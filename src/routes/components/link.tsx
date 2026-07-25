import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import CodeBlock from '../../components/CodeBlock/CodeBlock'

const codeSnippets = {
  textOnly: `<Link
  destination="/components/button"
  linkText="View Button"
/>`,
  iconOnly: `<Link
  icon
  iconPath="/favicon.svg"
  iconOnly
  destination="/components/button"
  linkText="Home"
/>`,
  iconText: `<Link
  icon
  iconPath="/favicon.svg"
  destination="/components/button"
  linkText="Home"
/>`,
}

export const Route = createFileRoute('/components/link')({
  component: LinkDocs,
})

function LinkDocs() {
  return (
    <section className="page">
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
        Set icon, supply an iconPath,
        and add iconOnly to hide the label. The
        text is still required, it becomes the accessible name via aria-label,
        so screen-reader users know where the link goes.
      </Typography>
      <CodeBlock code={codeSnippets.iconOnly} />

      <Typography variant='h2'>Link — Icon + Text</Typography>
      <Typography variant='body'>
        Set icon and iconPath while
        leaving iconOnly off. The icon renders
        before the label, useful for navigation and call-to-action links.
      </Typography>
      <CodeBlock code={codeSnippets.iconText} />
    </section>
  )
}
