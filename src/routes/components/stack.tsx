import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/stack')({
  component: StackDocs,
})

function StackDocs() {
  return (
    <section className="page">
      <h1>Stack</h1>
      <p>Placeholder page — component examples and variants go here.</p>
    </section>
  )
}
