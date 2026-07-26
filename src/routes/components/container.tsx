import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import Example from '../../components/Example/Example'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import Stack from '../../components/Stack/Stack'

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
        content at a comfortable measure. Pick a width with the size prop.
      </Typography>

      <Typography variant='h2'>Basic</Typography>
      <Typography variant='body'>
        Wrap content in a Container and choose a size. Below, each size is shown
        with a card filling its width so the boundary is visible.
      </Typography>
      <Example code={codeSnippets.basic}>
        <Container size='md'>
          <Card variant='outlined'>
            <Typography variant='body'>Centred, width-constrained content.</Typography>
          </Card>
        </Container>
      </Example>

      <Typography variant='h2'>Sizes</Typography>
      <Typography variant='body'>
        Four widths are available: sm (640px), md (960px), lg (1200px, default),
        and full (no limit). The cards below are drawn as a share of the column
        to show the relative widths, since the real sizes are wider than this
        space.
      </Typography>
      <Example code={codeSnippets.sizes}>
        <Container size='full'>
          <Stack align='center' gap='md'>
            <div style={{ width: '25%' }}>
              <Card variant='outlined'><Typography variant='caption'>size = sm</Typography></Card>
            </div>
            <div style={{ width: '50%' }}>
              <Card variant='outlined'><Typography variant='caption'>size = md</Typography></Card>
            </div>
            <div style={{ width: '75%' }}>
              <Card variant='outlined'><Typography variant='caption'>size = lg</Typography></Card>
            </div>
            <div style={{ width: '100%' }}>
              <Card variant='outlined'><Typography variant='caption'>size = full</Typography></Card>
            </div>
          </Stack>
        </Container>
      </Example>
    </Container>
  )
}
