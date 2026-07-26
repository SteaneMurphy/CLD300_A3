// Documentation route for the SearchBox component. Placeholder until the component is built.

import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import Container from '../../components/Container/Container'

export const Route = createFileRoute('/components/searchbox')({
  component: SearchBoxDocs,
})

function SearchBoxDocs() {
  return (
    <Container size="md">
      <Typography variant='h1'>SearchBox</Typography>
      <Typography variant='body'>
        Placeholder page: component examples and variants go here.
      </Typography>
    </Container>
  )
}
