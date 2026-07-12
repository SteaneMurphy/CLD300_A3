import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/input')({
  component: InputDocs,
})

function InputDocs() {
  return (
    <section className="page">
      <h1>Input</h1>
      <p>Placeholder page — component examples and variants go here.</p>
    </section>
  )
}
