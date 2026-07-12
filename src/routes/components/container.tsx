import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/container')({
  component: ContainerDocs,
})

function ContainerDocs() {
  return (
    <section className="page">
      <h1>Container</h1>
      <p>Placeholder page — component examples and variants go here.</p>
    </section>
  )
}
