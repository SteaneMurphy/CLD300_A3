import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/searchbox')({
  component: SearchBoxDocs,
})

function SearchBoxDocs() {
  return (
    <section className="page">
      <h1>SearchBox</h1>
      <p>Placeholder page — component examples and variants go here.</p>
    </section>
  )
}
