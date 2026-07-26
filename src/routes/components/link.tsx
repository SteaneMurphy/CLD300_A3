// Documentation route for the Link component. Shows internal, external, and icon links.

import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import Example from '../../components/Example/Example'
import Link from '../../components/Link/Link'
import Container from '../../components/Container/Container'
import Stack from '../../components/Stack/Stack'

const codeSnippets = {
  variants: `<Link destination="/components/button" linkText="View Button" />

<Link icon="github" iconOnly destination="/components/button" linkText="View source" />

<Link icon="github" destination="/components/button" linkText="View source" />`,
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

      <Typography variant='h2'>Variants</Typography>
      <Typography variant='body'>
        Three forms cover most needs. Text only is the default, for inline and
        body-copy links where the label alone is enough. Icon only adds an icon
        and iconOnly to hide the label, the text is still required and becomes
        the accessible name via aria-label. Icon + text keeps both, with the
        icon before the label, useful for navigation and call-to-action links.
      </Typography>
      <Example code={codeSnippets.variants}>
        <Container size='full'>
          <Stack direction='row' align='center' justify='between' gap='lg'>
            <Link destination='/components/button' linkText='View Button' />
            <Link icon='github' iconOnly destination='/components/button' linkText='View source' />
            <Link icon='github' destination='/components/button' linkText='View source' />
          </Stack>
        </Container>
      </Example>
    </Container>
  )
}
