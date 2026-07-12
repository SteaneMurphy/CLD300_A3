import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/card')({
  component: CardDocs,
})

function CardDocs() {
  return (
    <section className="page">
      <h1>Card</h1>
      <p>Placeholder page — component examples and variants go here.</p>
    </section>
  )
}
