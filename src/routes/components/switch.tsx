import { createFileRoute } from '@tanstack/react-router'
import Container from '../../components/Container/Container'

export const Route = createFileRoute('/components/switch')({
  component: SwitchDocs,
})

function SwitchDocs() {
  return (
    <Container size="md">
      <h1>Switch</h1>
      <p>Placeholder page — component examples and variants go here.</p>
    </Container>
  )
}
