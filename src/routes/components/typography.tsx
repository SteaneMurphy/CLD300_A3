import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Container from '../../components/Container/Container'

const codeSnippets = {
  h1: `<Typography variant="h1">Heading 1</Typography>`,
  h2: `<Typography variant="h2">Heading 2</Typography>`,
  h3: `<Typography variant="h3">Heading 3</Typography>`,
  body: `<Typography variant="body">Body text</Typography>`,
  caption: `<Typography variant="caption">Caption text</Typography>`,
  code: `<Typography variant="code">const value = 42</Typography>`,
}

export const Route = createFileRoute('/components/typography')({
  component: TypographyDocs,
})

function TypographyDocs() {
  return (
    <Container size="md">
      <Typography variant='h1'>Typography</Typography>
      <Typography variant='body'>
        Typography renders text at a consistent scale. Pass a <Typography variant='code'>variant</Typography> to
        pick the role; each variant maps to the appropriate semantic element and
        pulls its size, weight, and colour from the design tokens. When no variant
        is given it defaults to <Typography variant='code'>body</Typography>.
      </Typography>

      <Typography variant='h2'>Heading 1</Typography>
      <Typography variant='body'>
        The largest heading, rendered as an <Typography variant='code'>h1</Typography>.
        Use once per page for the primary title.
      </Typography>
      <Typography variant='h1'>The quick brown fox</Typography>
      <CodeBlock code={codeSnippets.h1} />

      <Typography variant='h2'>Heading 2</Typography>
      <Typography variant='body'>
        Section heading, rendered as an <Typography variant='code'>h2</Typography>.
      </Typography>
      <Typography variant='h2'>The quick brown fox</Typography>
      <CodeBlock code={codeSnippets.h2} />

      <Typography variant='h2'>Heading 3</Typography>
      <Typography variant='body'>
        Sub-section heading, rendered as an <Typography variant='code'>h3</Typography>.
      </Typography>
      <Typography variant='h3'>The quick brown fox</Typography>
      <CodeBlock code={codeSnippets.h3} />

      <Typography variant='h2'>Body</Typography>
      <Typography variant='body'>
        Default paragraph text, rendered as a <Typography variant='code'>p</Typography>.
        Use for the bulk of readable content.
      </Typography>
      <Typography variant='body'>
        The quick brown fox jumps over the lazy dog. Pack my box with five dozen
        liquor jugs.
      </Typography>
      <CodeBlock code={codeSnippets.body} />

      <Typography variant='h2'>Caption</Typography>
      <Typography variant='body'>
        Small, muted text rendered as a <Typography variant='code'>span</Typography>.
        Use for labels, hints, and secondary detail.
      </Typography>
      <Typography variant='caption'>The quick brown fox jumps over the lazy dog</Typography>
      <CodeBlock code={codeSnippets.caption} />

      <Typography variant='h2'>Code</Typography>
      <Typography variant='body'>
        Inline monospace text rendered as a <Typography variant='code'>code</Typography> element,
        for referencing a prop or value mid-sentence. For multi-line examples use
        the CodeBlock component instead.
      </Typography>
      <Typography variant='code'>const value = 42</Typography>
      <CodeBlock code={codeSnippets.code} />
    </Container>
  )
}
