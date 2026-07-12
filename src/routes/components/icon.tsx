import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/icon')({
  component: IconDocs,
})

function IconDocs() {
  return (
    <section className="page">
      <h1>Icon</h1>
      <p>Placeholder page — component examples and variants go here.</p>
    </section>
  )
}
