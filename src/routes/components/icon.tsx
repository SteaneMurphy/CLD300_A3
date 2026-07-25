import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Icon from '../../components/Icon/Icon'
import type { IconName } from '../../components/Icon/Icon.types'

const iconNames: IconName[] = [
  'bluesky',
  'discord',
  'documentation',
  'github',
  'social',
  'x',
]

const codeSnippets = {
  basic: `<Icon name="github" />`,
  sizes: `<Icon name="github" size="sm" />
<Icon name="github" size="md" />
<Icon name="github" size="lg" />`,
  label: `<Icon name="github" label="GitHub" />`,
}

export const Route = createFileRoute('/components/icon')({
  component: IconDocs,
})

function IconDocs() {
  return (
    <section className="page">
      <Typography variant='h1'>Icon</Typography>
      <Typography variant='body'>
        Icon renders a symbol from the shared sprite. Pass
        a <Typography variant='code'>name</Typography> to choose the
        glyph, the type only accepts names that exist in the sprite, so a
        typo is a compile error. Use
        the <Typography variant='code'>size</Typography> prop to scale it.
      </Typography>

      <Typography variant='h2'>Available icons</Typography>
      <Typography variant='body'>
        The full set from the sprite. The <Typography variant='code'>name</Typography> prop
        matches each label below.
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {iconNames.map((name) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Icon name={name} size='lg' label={name} />
            <Typography variant='caption'>{name}</Typography>
          </div>
        ))}
      </div>
      <CodeBlock code={codeSnippets.basic} />

      <Typography variant='h2'>Sizes</Typography>
      <Typography variant='body'>
        Three sizes are available via
        the <Typography variant='code'>size</Typography> prop:{' '}
        <Typography variant='code'>sm</Typography>, <Typography variant='code'>md</Typography> (default),
        and <Typography variant='code'>lg</Typography>.
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Icon name='github' size='sm' label='GitHub small' />
        <Icon name='github' size='md' label='GitHub medium' />
        <Icon name='github' size='lg' label='GitHub large' />
      </div>
      <CodeBlock code={codeSnippets.sizes} />

      <Typography variant='h2'>Accessibility</Typography>
      <Typography variant='body'>
        An icon is decorative by default and hidden from assistive tech. When
        the icon carries meaning on its own, pass
        a <Typography variant='code'>label</Typography> — it becomes the
        accessible name via <Typography variant='code'>role="img"</Typography> and{' '}
        <Typography variant='code'>aria-label</Typography>.
      </Typography>
      <Icon name='github' label='GitHub' size='lg' />
      <CodeBlock code={codeSnippets.label} />
    </section>
  )
}
