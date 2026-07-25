import { createFileRoute } from '@tanstack/react-router'
import Container from '../../components/Container/Container'

export const Route = createFileRoute('/components/searchbox')({
  component: SearchBoxDocs,
})

function SearchBoxDocs() {
  return (
    <Container size="md">
      <h1>SearchBox</h1>
      <p>Placeholder page — component examples and variants go here.</p>
    </Container>
  )
}
