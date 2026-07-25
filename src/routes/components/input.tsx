import { createFileRoute } from '@tanstack/react-router'
import Container from '../../components/Container/Container'

export const Route = createFileRoute('/components/input')({
  component: InputDocs,
})

function InputDocs() {
  return (
    <Container size="md">
      <h1>Input</h1>
      <p>Placeholder page — component examples and variants go here.</p>
    </Container>
  )
}
