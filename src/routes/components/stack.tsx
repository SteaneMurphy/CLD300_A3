// Documentation route for the Stack component. Shows direction, gap, alignment, and wrapping.

import { createFileRoute } from '@tanstack/react-router'
import Container from '../../components/Container/Container'
import Stack from '../../components/Stack/Stack'
import Typography from '../../components/Typography/Typography'
import Example from '../../components/Example/Example'
import Card from '../../components/Card/Card'

const codeSnippets = {
  column: `<Stack gap="md">
  <Card>One</Card>
  <Card>Two</Card>
  <Card>Three</Card>
</Stack>`,
  row: `<Stack direction="row" gap="md">
  <Card>One</Card>
  <Card>Two</Card>
  <Card>Three</Card>
</Stack>`,
  justify: `<Stack direction="row" justify="between">
  <Card>Start</Card>
  <Card>End</Card>
</Stack>`,
  wrap: `<Stack direction="row" gap="sm" wrap>
  {items.map((item) => <Card key={item}>{item}</Card>)}
</Stack>`,
}

const boxes = ['One', 'Two', 'Three']

export const Route = createFileRoute('/components/stack')({
  component: StackDocs,
})

function StackDocs() {
  return (
    <Container size="md">
      <Typography variant='h1'>Stack</Typography>
      <Typography variant='body'>
        Stack arranges its children in a single direction with consistent
        spacing. It is a thin wrapper over flexbox: choose a direction, a
        token-based gap, and optionally align, justify, and wrap.
      </Typography>

      <Typography variant='h2'>Column (default)</Typography>
      <Typography variant='body'>
        By default a Stack lays children out vertically. Use it to give a
        consistent rhythm to stacked content.
      </Typography>
      <Example code={codeSnippets.column}>
        <Stack gap='md'>
          {boxes.map((b) => (
            <Card key={b} padding='sm'><Typography variant='caption'>{b}</Typography></Card>
          ))}
        </Stack>
      </Example>

      <Typography variant='h2'>Row</Typography>
      <Typography variant='body'>
        Set direction="row" to lay children out horizontally.
      </Typography>
      <Example code={codeSnippets.row}>
        <Stack direction='row' gap='md'>
          {boxes.map((b) => (
            <Card key={b} padding='sm'><Typography variant='caption'>{b}</Typography></Card>
          ))}
        </Stack>
      </Example>

      <Typography variant='h2'>Justify</Typography>
      <Typography variant='body'>
        On a row, justify distributes children along the main axis, between
        pushes them to the edges.
      </Typography>
      <Example code={codeSnippets.justify}>
        <Container size='full'>
          <Stack direction='row' justify='between'>
            <Card padding='sm'><Typography variant='caption'>Start</Typography></Card>
            <Card padding='sm'><Typography variant='caption'>End</Typography></Card>
          </Stack>
        </Container>
      </Example>

      <Typography variant='h2'>Wrap</Typography>
      <Typography variant='body'>
        Add wrap so a row flows onto multiple lines when it runs out of space.
      </Typography>
      <Example code={codeSnippets.wrap}>
        <Stack direction='row' gap='sm' wrap>
          {Array.from({ length: 12 }, (_, i) => (
            <Card key={i} padding='sm'><Typography variant='caption'>{`Item ${i + 1}`}</Typography></Card>
          ))}
        </Stack>
      </Example>
    </Container>
  )
}
