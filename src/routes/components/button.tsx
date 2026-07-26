import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import Stack from '../../components/Stack/Stack'

const codeSnippets = {
  primary: `<Button variant="primary">Save</Button>`,
  secondary: `<Button variant="secondary">Cancel</Button>`,
  ghost: `<Button variant="ghost">Dismiss</Button>`,
  sizes: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
  disabled: `<Button disabled>Unavailable</Button>`,
}

export const Route = createFileRoute('/components/button')({
  component: ButtonDocs,
})

function ButtonDocs() {
  return (
    <Container size="lg">
      
      <Typography variant='h1'>Button</Typography>
      <Typography variant='body'>
        Buttons trigger an action. Pass a <Typography variant='code'>variant</Typography> to
        set the visual style and a <Typography variant='code'>size</Typography> to
        set the scale. When no variant is given it defaults
        to <Typography variant='code'>primary</Typography>.
      </Typography>

      <Typography variant='h2'>Primary</Typography>
      <Typography variant='body'>
        The default. Use for the main action in a given context — one per view
        where possible.
      </Typography>
      <Button variant='primary'>Save</Button>
      <CodeBlock code={codeSnippets.primary} />

      <Typography variant='h2'>Secondary</Typography>
      <Typography variant='body'>
        A lower-emphasis action that sits alongside a primary button.
      </Typography>
      <Button variant='secondary'>Cancel</Button>
      <CodeBlock code={codeSnippets.secondary} />

      <Typography variant='h2'>Ghost</Typography>
      <Typography variant='body'>
        The quietest option, with no fill until hovered. Use for tertiary or
        repeated actions where a solid button would be too heavy.
      </Typography>
      <Button variant='ghost'>Dismiss</Button>
      <CodeBlock code={codeSnippets.ghost} />

      <Typography variant='h2'>Sizes</Typography>
      <Typography variant='body'>
        Three sizes are available via the <Typography variant='code'>size</Typography> prop:{' '}
        <Typography variant='code'>sm</Typography>, <Typography variant='code'>md</Typography> (default),
        and <Typography variant='code'>lg</Typography>.
      </Typography>
      <Stack direction='row' align='center' gap='md'>
        <Button size='sm'>Small</Button>
        <Button size='md'>Medium</Button>
        <Button size='lg'>Large</Button>
      </Stack>
      <CodeBlock code={codeSnippets.sizes} />

      <Typography variant='h2'>Disabled</Typography>
      <Typography variant='body'>
        Set <Typography variant='code'>disabled</Typography> to make the button
        non-interactive. Works with any variant.
      </Typography>
      <Button disabled>Unavailable</Button>
      <CodeBlock code={codeSnippets.disabled} />
    </Container>
  )
}
