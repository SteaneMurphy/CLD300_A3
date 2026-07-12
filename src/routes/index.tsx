import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <section className="page">
      <h1>Design System Docs</h1>
      <p>
        Documentation for the custom React component library, with live
        examples, variants, and copyable code.
      </p>
      <p>
        Start with the <Link to="/components/button">Button</Link> component.
      </p>
    </section>
  )
}
