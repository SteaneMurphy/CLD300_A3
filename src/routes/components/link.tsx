import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Container from '../../components/Container/Container'

const codeSnippets = {
  textOnly: `<Link
  destination="/components/button"
  linkText="View Button"
/>`,
  iconOnly: `<Link
  icon="github"
  iconOnly
  destination="/components/button"
  linkText="View source"
/>`,
  iconText: `<Link
  icon="github"
  destination="/components/button"
  linkText="View source"
/>`,
}

export const Route = createFileRoute('/components/link')({
  component: LinkDocs,
})

function LinkDocs() {
  return (
    <Container size="md">
      <Typography variant='h1'>Link</Typography>
      <Typography variant='body'>
        Links allow a user to navigate to another page, either internally within
        the app or out to an external site. Every link renders visible text; an
        optional icon can sit alongside that text or replace it entirely.
      </Typography>

      <Typography variant='h2'>Link — Text Only</Typography>
      <Typography variant='body'>
        The default form. Provide a linkText and
        a destination. Use this for inline
        and body-copy links where the label alone is enough.
      </Typography>
      <CodeBlock code={codeSnippets.textOnly} />

      <Typography variant='h2'>Link — Icon Only</Typography>
      <Typography variant='body'>
        Set icon to a sprite name and add iconOnly to hide the label. The
        text is still required, it becomes the accessible name via aria-label,
        so screen-reader users know where the link goes.
      </Typography>
      <CodeBlock code={codeSnippets.iconOnly} />

      <Typography variant='h2'>Link — Icon + Text</Typography>
      <Typography variant='body'>
        Set icon to a sprite name and leave iconOnly off. The icon renders
        before the label, useful for navigation and call-to-action links.
      </Typography>
      <CodeBlock code={codeSnippets.iconText} />
    </Container>
  )
}
