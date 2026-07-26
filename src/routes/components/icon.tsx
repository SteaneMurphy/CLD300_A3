// Documentation route for the Icon component. Shows every icon in the sprite at each size.

import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import Example from '../../components/Example/Example'
import Icon from '../../components/Icon/Icon'
import type { IconName } from '../../components/Icon/Icon.types'
import Container from '../../components/Container/Container'
import Stack from '../../components/Stack/Stack'

const iconNames: IconName[] = [
  'bluesky',
  'discord',
  'documentation',
  'github',
  'social',
  'x',
]

const codeSnippets = {
  basic: `<Icon src="/icons.svg#github-icon" />`,
  sizes: `<Icon src="/icons.svg#github-icon" size="sm" />
<Icon src="/icons.svg#github-icon" size="md" />
<Icon src="/icons.svg#github-icon" size="lg" />`,
  label: `<Icon src="/icons.svg#github-icon" label="GitHub" />`,
}

export const Route = createFileRoute('/components/icon')({
  component: IconDocs,
})

function IconDocs() {
  return (
    <Container size="md">
      <Typography variant='h1'>Icon</Typography>
      <Typography variant='body'>
        Icon renders a symbol from an SVG sprite. Pass a src that points at the
        icon, including the sprite fragment (for example
        /icons.svg#github-icon). Use the size prop to scale it.
      </Typography>

      <Typography variant='h2'>Available icons</Typography>
      <Typography variant='body'>
        The full set from the sprite. Each src is /icons.svg# followed by the
        label below and -icon.
      </Typography>
      <Example code={codeSnippets.basic}>
        <Stack direction='row' gap='lg' wrap>
          {iconNames.map((name) => (
            <Stack key={name} align='center' gap='sm'>
              <Icon src={`/icons.svg#${name}-icon`} size='lg' label={name} />
              <Typography variant='caption'>{name}</Typography>
            </Stack>
          ))}
        </Stack>
      </Example>

      <Typography variant='h2'>Sizes</Typography>
      <Typography variant='body'>
        Three sizes are available via the size prop: sm, md (default), and lg.
      </Typography>
      <Example code={codeSnippets.sizes}>
        <Stack direction='row' align='center' gap='md'>
          <Icon src='/icons.svg#github-icon' size='sm' label='GitHub small' />
          <Icon src='/icons.svg#github-icon' size='md' label='GitHub medium' />
          <Icon src='/icons.svg#github-icon' size='lg' label='GitHub large' />
        </Stack>
      </Example>

      <Typography variant='h2'>Accessibility</Typography>
      <Typography variant='body'>
        An icon is decorative by default and hidden from assistive tech. When
        the icon carries meaning on its own, pass a label, and it becomes the
        accessible name via role="img" and aria-label.
      </Typography>
      <Example code={codeSnippets.label}>
        <Icon src='/icons.svg#github-icon' label='GitHub' size='lg' />
      </Example>
    </Container>
  )
}
