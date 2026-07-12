import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/image')({
  component: ImageDocs,
})

function ImageDocs() {
  return (
    <section className="page">
      <h1>Image</h1>
      <p>Placeholder page — component examples and variants go here.</p>
    </section>
  )
}
