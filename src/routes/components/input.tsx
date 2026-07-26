import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import Container from '../../components/Container/Container'

export const Route = createFileRoute('/components/input')({
  component: InputDocs,
})

function InputDocs() {
  return (
    <Container size="md">
      <Typography variant='h1'>Input</Typography>
      <Typography variant='body'>
        Placeholder page: component examples and variants go here.
      </Typography>
    </Container>
  )
}
