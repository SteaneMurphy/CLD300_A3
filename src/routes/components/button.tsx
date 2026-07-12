import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/button')({
  component: ButtonDocs,
})

function ButtonDocs() {
  return (
    <section className="page">
      <h1>Button</h1>
      <p>Placeholder page — component examples and variants go here.</p>
    </section>
  )
}
