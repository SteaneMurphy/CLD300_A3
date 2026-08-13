// Home route. Landing page for the client site.

import { createFileRoute } from '@tanstack/react-router'
import Container from '../components/Container/Container'
import Stack from '../components/Stack/Stack'
import Typography from '../components/Typography/Typography'
import Button from '../components/Button/Button'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <Container size="md" padding="lg">
      <Stack direction="column" gap="lg" align="start">
        <Typography variant="display">Client name</Typography>
        <Typography variant="body">
          Placeholder hero copy for the client home page. Replace this with the
          real proposition once the content is settled.
        </Typography>
        <Stack direction="row" gap="md" align="center">
          <Button variant="primary" size="lg">
            Primary action
          </Button>
          <Button variant="secondary" size="lg">
            Secondary action
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}
