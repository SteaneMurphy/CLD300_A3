import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'

const codeSnippets = {
  basic: `<Container size="md">
  <Typography variant="h2">Page section</Typography>
  <Typography variant="body">Centred and width-constrained content.</Typography>
</Container>`,
  sizes: `<Container size="sm">…</Container>
<Container size="md">…</Container>
<Container size="lg">…</Container>
<Container size="full">…</Container>`,
}

export const Route = createFileRoute('/components/container')({
  component: ContainerDocs,
})

function ContainerDocs() {
  return (
    <Container size="md">
      <Typography variant='h1'>Container</Typography>
      <Typography variant='body'>
        Container constrains the width of its content and centres it
        horizontally. It has no visible styling of its own, use it to keep page
        content at a comfortable measure. Pick a width with
        the <Typography variant='code'>size</Typography> prop.
      </Typography>

      <Typography variant='h2'>Basic</Typography>
      <Typography variant='body'>
        Wrap content in a Container and choose a size. Below,
        each <Typography variant='code'>size</Typography> is shown with a card
        filling its width so the boundary is visible.
      </Typography>
      <Container size='md'>
        <Card variant='outlined'>
          <Typography variant='body'>Centred, width-constrained content.</Typography>
        </Card>
      </Container>
      <CodeBlock code={codeSnippets.basic} />

      <Typography variant='h2'>Sizes</Typography>
      <Typography variant='body'>
        Four widths are available:{' '}
        <Typography variant='code'>sm</Typography> (640px),{' '}
        <Typography variant='code'>md</Typography> (960px),{' '}
        <Typography variant='code'>lg</Typography> (1200px, default), and{' '}
        <Typography variant='code'>full</Typography> (no limit). Each card below
        marks the edge of its container.
      </Typography>
      <Container size='sm'>
        <Card variant='outlined'><Typography variant='caption'>size = sm</Typography></Card>
      </Container>
      <Container size='md'>
        <Card variant='outlined'><Typography variant='caption'>size = md</Typography></Card>
      </Container>
      <Container size='lg'>
        <Card variant='outlined'><Typography variant='caption'>size = lg</Typography></Card>
      </Container>
      <Container size='full'>
        <Card variant='outlined'><Typography variant='caption'>size = full</Typography></Card>
      </Container>
      <CodeBlock code={codeSnippets.sizes} />
    </Container>
  )
}
