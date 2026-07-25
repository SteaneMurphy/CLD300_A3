import { createFileRoute } from '@tanstack/react-router'
import Container from '../../components/Container/Container'

export const Route = createFileRoute('/components/stack')({
  component: StackDocs,
})

function StackDocs() {
  return (
    <Container size="md">
      <h1>Stack</h1>
      <p>Placeholder page — component examples and variants go here.</p>
    </Container>
  )
}
