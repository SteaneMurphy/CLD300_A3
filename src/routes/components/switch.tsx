import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/switch')({
  component: SwitchDocs,
})

function SwitchDocs() {
  return (
    <section className="page">
      <h1>Switch</h1>
      <p>Placeholder page — component examples and variants go here.</p>
    </section>
  )
}
