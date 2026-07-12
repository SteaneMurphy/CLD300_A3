import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/link')({
  component: LinkDocs,
})

function LinkDocs() {
  return (
    <section className="page">
      <h1>Link</h1>
      <p>Placeholder page — component examples and variants go here.</p>
    </section>
  )
}
