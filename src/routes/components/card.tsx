import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'

const codeSnippets = {
  outlined: `<Card variant="outlined">
  <Typography variant="h3">Outlined card</Typography>
  <Typography variant="body">A bordered surface for grouping content.</Typography>
</Card>`,
  elevated: `<Card variant="elevated">
  <Typography variant="h3">Elevated card</Typography>
  <Typography variant="body">A raised surface with a soft shadow.</Typography>
</Card>`,
  composition: `<Card>
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
        Typography, Image, Button, and so on. Use
        the <Typography variant='code'>variant</Typography> prop to switch
        between a bordered and a raised style, and
        the <Typography variant='code'>padding</Typography> prop to set the
        internal spacing.
      </Typography>

      <Typography variant='h2'>Outlined</Typography>
      <Typography variant='body'>
        The default. A one-pixel border with no shadow — best on plain
        backgrounds where a subtle boundary is enough.
      </Typography>
      <Card variant='outlined'>
        <Typography variant='h3'>Outlined card</Typography>
        <Typography variant='body'>A bordered surface for grouping content.</Typography>
      </Card>
      <CodeBlock code={codeSnippets.outlined} />

      <Typography variant='h2'>Elevated</Typography>
      <Typography variant='body'>
        A raised surface with a soft shadow instead of a border. Use to lift a
        card off a busier background.
      </Typography>
      <Card variant='elevated'>
        <Typography variant='h3'>Elevated card</Typography>
        <Typography variant='body'>A raised surface with a soft shadow.</Typography>
      </Card>
      <CodeBlock code={codeSnippets.elevated} />

      <Typography variant='h2'>Composition</Typography>
      <Typography variant='body'>
        Because Card renders its children, you can build richer blocks by
        dropping other components inside.
      </Typography>
      <Card>
        <Typography variant='h3'>Publish changes?</Typography>
        <Typography variant='body'>This will make your edits live.</Typography>
        <Button variant='primary'>Publish</Button>
      </Card>
      <CodeBlock code={codeSnippets.composition} />

      <Typography variant='h2'>Padding</Typography>
      <Typography variant='body'>
        Three padding sizes are available via
        the <Typography variant='code'>padding</Typography> prop:{' '}
        <Typography variant='code'>sm</Typography>, <Typography variant='code'>md</Typography> (default),
        and <Typography variant='code'>lg</Typography>.
      </Typography>
      <Card padding='sm'>Compact</Card>
      <Card padding='md'>Default</Card>
      <Card padding='lg'>Roomy</Card>
      <CodeBlock code={codeSnippets.padding} />
    </Container>
  )
}
