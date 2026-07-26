// Documentation route for the Card component. Shows each variant and padding option.

import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import Example from '../../components/Example/Example'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import Stack from '../../components/Stack/Stack'

const codeSnippets = {
  variants: `<Card variant="outlined">
  <Typography variant="h3">Outlined card</Typography>
  <Typography variant="body">A bordered surface for grouping content.</Typography>
</Card>

<Card variant="elevated">
  <Typography variant="h3">Elevated card</Typography>
  <Typography variant="body">A raised surface with a soft shadow.</Typography>
</Card>

<Card>
  <Typography variant="h3">Publish changes?</Typography>
  <Typography variant="body">This will make your edits live.</Typography>
  <Button variant="primary">Publish</Button>
</Card>`,
  padding: `<Card padding="sm">Compact</Card>
<Card padding="md">Default</Card>
<Card padding="lg">Roomy</Card>`,
}

export const Route = createFileRoute('/components/card')({
  component: CardDocs,
})

function CardDocs() {
  return (
    <Container size="md">
      <Typography variant='h1'>Card</Typography>
      <Typography variant='body'>
        Card is a surface for grouping related content. It renders whatever
        you place inside it, so compose it from the other primitives:
        Typography, Image, Button, and so on. Use the variant prop to switch
        between a bordered and a raised style, and the padding prop to set the
        internal spacing.
      </Typography>

      <Typography variant='h2'>Variants and composition</Typography>
      <Typography variant='body'>
        Outlined is the default: a one-pixel border with no shadow, best on
        plain backgrounds where a subtle boundary is enough. Elevated swaps the
        border for a soft shadow to lift a card off a busier background. And
        because Card renders its children, you can build richer blocks by
        dropping other components inside.
      </Typography>
      <Example code={codeSnippets.variants}>
        <Stack direction='row' gap='md'>
          <Card variant='outlined'>
            <Typography variant='h3'>Outlined card</Typography>
            <Typography variant='body'>A bordered surface for grouping content.</Typography>
          </Card>
          <Card variant='elevated'>
            <Typography variant='h3'>Elevated card</Typography>
            <Typography variant='body'>A raised surface with a soft shadow.</Typography>
          </Card>
          <Card>
            <Typography variant='h3'>Publish changes?</Typography>
            <Typography variant='body'>This will make your edits live.</Typography>
            <Button variant='primary'>Publish</Button>
          </Card>
        </Stack>
      </Example>

      <Typography variant='h2'>Padding</Typography>
      <Typography variant='body'>
        Three padding sizes are available via the padding prop: sm, md
        (default), and lg.
      </Typography>
      <Example code={codeSnippets.padding}>
        <Stack gap='md'>
          <Card padding='sm'>Compact — sm padding</Card>
          <Card padding='md'>Default — md padding</Card>
          <Card padding='lg'>Roomy — lg padding</Card>
        </Stack>
      </Example>
    </Container>
  )
}
