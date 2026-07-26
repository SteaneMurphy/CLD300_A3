// Home route. Landing page for the documentation site.

import { createFileRoute, Link } from '@tanstack/react-router'
import Container from '../components/Container/Container'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <Container size="md">
      <h1>Design System Docs</h1>
      <p>
        Documentation for the custom React component library, with live
        examples, variants, and copyable code.
      </p>
      <p>
        Start with the <Link to="/components/button">Button</Link> component.
      </p>
    </Container>
  )
}
