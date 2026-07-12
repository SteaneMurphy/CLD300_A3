import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/typography')({
  component: TypographyDocs,
})

function TypographyDocs() {
  return (
    <section className="page">
      <h1>Typography</h1>
      <p>Placeholder page — component examples and variants go here.</p>
    </section>
  )
}
