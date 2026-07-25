import { createFileRoute } from '@tanstack/react-router'
import Container from '../../components/Container/Container'
import Stack from '../../components/Stack/Stack'
import Typography from '../../components/Typography/Typography'
import CodeBlock from '../../components/CodeBlock/CodeBlock'
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
        spacing. It is a thin wrapper over flexbox: choose
        a <Typography variant='code'>direction</Typography>, a token-based{' '}
        <Typography variant='code'>gap</Typography>, and optionally{' '}
        <Typography variant='code'>align</Typography>,{' '}
        <Typography variant='code'>justify</Typography>, and{' '}
        <Typography variant='code'>wrap</Typography>.
      </Typography>

      <Typography variant='h2'>Column (default)</Typography>
      <Typography variant='body'>
        By default a Stack lays children out vertically. Use it to give a
        consistent rhythm to stacked content.
      </Typography>
      <Stack gap='md'>
        {boxes.map((b) => (
          <Card key={b} padding='sm'><Typography variant='caption'>{b}</Typography></Card>
        ))}
      </Stack>
      <CodeBlock code={codeSnippets.column} />

      <Typography variant='h2'>Row</Typography>
      <Typography variant='body'>
        Set <Typography variant='code'>direction="row"</Typography> to lay children
        out horizontally.
      </Typography>
      <Stack direction='row' gap='md'>
        {boxes.map((b) => (
          <Card key={b} padding='sm'><Typography variant='caption'>{b}</Typography></Card>
        ))}
      </Stack>
      <CodeBlock code={codeSnippets.row} />

      <Typography variant='h2'>Justify</Typography>
      <Typography variant='body'>
        On a row, <Typography variant='code'>justify</Typography> distributes
        children along the main axis, {' '}
        <Typography variant='code'>between</Typography> pushes them to the edges.
      </Typography>
      <Stack direction='row' justify='between'>
        <Card padding='sm'><Typography variant='caption'>Start</Typography></Card>
        <Card padding='sm'><Typography variant='caption'>End</Typography></Card>
      </Stack>
      <CodeBlock code={codeSnippets.justify} />

      <Typography variant='h2'>Wrap</Typography>
      <Typography variant='body'>
        Add <Typography variant='code'>wrap</Typography> so a row flows onto
        multiple lines when it runs out of space.
      </Typography>
      <Stack direction='row' gap='sm' wrap>
        {Array.from({ length: 12 }, (_, i) => (
          <Card key={i} padding='sm'><Typography variant='caption'>{`Item ${i + 1}`}</Typography></Card>
        ))}
      </Stack>
      <CodeBlock code={codeSnippets.wrap} />
    </Container>
  )
}
