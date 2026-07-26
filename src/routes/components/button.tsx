import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import Example from '../../components/Example/Example'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import Stack from '../../components/Stack/Stack'

const codeSnippets = {
  variants: `<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="ghost">Dismiss</Button>`,
  sizes: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
  disabled: `<Button variant="primary" disabled>Save</Button>
<Button variant="secondary" disabled>Cancel</Button>
<Button variant="ghost" disabled>Dismiss</Button>`,
  onClick: `const [count, setCount] = useState(0)

<Button onClick={() => setCount(count + 1)}>
  Clicked {count} times
</Button>`,
}

export const Route = createFileRoute('/components/button')({
  component: ButtonDocs,
})

function ButtonDocs() {
  const [count, setCount] = useState(0)

  return (
    <Container size="md">
      
      <Typography variant='h1'>Button</Typography>
      <Typography variant='body'>
        Buttons trigger an action. Pass a variant to set the visual style and a
        size to set the scale. When no variant is given it defaults to primary.
      </Typography>

      <Typography variant='h2'>Variants</Typography>
      <Typography variant='body'>
        Three variants set the visual emphasis: primary for the main action
        (the default, one per view where possible), secondary for a
        lower-emphasis action alongside it, and ghost, the quietest option
        with no fill until hovered, for tertiary or repeated actions.
      </Typography>
      <Example code={codeSnippets.variants}>
        <Stack direction='row' align='center' gap='md'>
          <Button variant='primary'>Save</Button>
          <Button variant='secondary'>Cancel</Button>
          <Button variant='ghost'>Dismiss</Button>
        </Stack>
      </Example>

      <Typography variant='h2'>Sizes</Typography>
      <Typography variant='body'>
        Three sizes are available via the size prop: sm, md (default), and lg.
      </Typography>
      <Example code={codeSnippets.sizes}>
        <Stack direction='row' align='center' gap='md'>
          <Button size='sm'>Small</Button>
          <Button size='md'>Medium</Button>
          <Button size='lg'>Large</Button>
        </Stack>
      </Example>

      <Typography variant='h2'>Disabled</Typography>
      <Typography variant='body'>
        Set disabled to make the button non-interactive. Works with any variant.
      </Typography>
      <Example code={codeSnippets.disabled}>
        <Stack direction='row' align='center' gap='md'>
          <Button variant='primary' disabled>Save</Button>
          <Button variant='secondary' disabled>Cancel</Button>
          <Button variant='ghost' disabled>Dismiss</Button>
        </Stack>
      </Example>

      <Typography variant='h2'>On click</Typography>
      <Typography variant='body'>
        Pass an onClick handler to respond to presses. It fires on every click
        unless the button is disabled.
      </Typography>
      <Example code={codeSnippets.onClick}>
        <Stack direction='row' align='center' gap='md'>
          <Button onClick={() => setCount(count + 1)}>Clicked {count} times</Button>
        </Stack>
      </Example>
    </Container>
  )
}
