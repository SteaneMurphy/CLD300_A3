// Documentation route for the Typography component. Shows every variant with its size and MUI equivalent.

import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import Example from '../../components/Example/Example'
import Container from '../../components/Container/Container'

const codeSnippets = {
  display: `<Typography variant="display">Display</Typography>`,
  headline: `<Typography variant="headline">Headline</Typography>`,
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
        Typography renders text at a consistent scale. Pass a variant to
        pick the role; each variant maps to the appropriate semantic element and
        pulls its size, weight, and colour from the design tokens. Sizes follow the
        Material UI type scale. When no variant is given it defaults to body.
      </Typography>

      <Typography variant='h2'>Display</Typography>
      <Typography variant='body'>
        The largest display size, matching MUI's h1 variant.
        Reserve for hero and marketing moments rather than document structure.
      </Typography>
      <Typography variant='caption'>6rem · 96px · MUI h1 · weight 300</Typography>
      <Example code={codeSnippets.display}>
        <Typography variant='display'>The quick brown fox</Typography>
      </Example>

      <Typography variant='h2'>Headline</Typography>
      <Typography variant='body'>
        A large display size, matching MUI's h2 variant.
        Use for prominent section titles above the standard heading scale.
      </Typography>
      <Typography variant='caption'>3.75rem · 60px · MUI h2 · weight 300</Typography>
      <Example code={codeSnippets.headline}>
        <Typography variant='headline'>The quick brown fox</Typography>
      </Example>

      <Typography variant='h2'>Heading 1</Typography>
      <Typography variant='body'>
        The largest heading, rendered as an h1.
        Use once per page for the primary title.
      </Typography>
      <Typography variant='caption'>3rem · 48px · MUI h3</Typography>
      <Example code={codeSnippets.h1}>
        <Typography variant='h1'>The quick brown fox</Typography>
      </Example>

      <Typography variant='h2'>Heading 2</Typography>
      <Typography variant='body'>
        Section heading, rendered as an h2.
      </Typography>
      <Typography variant='caption'>2.125rem · 34px · MUI h4</Typography>
      <Example code={codeSnippets.h2}>
        <Typography variant='h2'>The quick brown fox</Typography>
      </Example>

      <Typography variant='h2'>Heading 3</Typography>
      <Typography variant='body'>
        Sub-section heading, rendered as an h3.
      </Typography>
      <Typography variant='caption'>1.5rem · 24px · MUI h5</Typography>
      <Example code={codeSnippets.h3}>
        <Typography variant='h3'>The quick brown fox</Typography>
      </Example>

      <Typography variant='h2'>Body</Typography>
      <Typography variant='body'>
        Default paragraph text, rendered as a p.
        Use for the bulk of readable content.
      </Typography>
      <Typography variant='caption'>1rem · 16px · MUI body1</Typography>
      <Example code={codeSnippets.body}>
        <Typography variant='body'>
          The quick brown fox jumps over the lazy dog. Pack my box with five dozen
          liquor jugs.
        </Typography>
      </Example>

      <Typography variant='h2'>Caption</Typography>
      <Typography variant='body'>
        Small, muted text rendered as a span.
        Use for labels, hints, and secondary detail.
      </Typography>
      <Typography variant='caption'>0.875rem · 14px · MUI body2</Typography>
      <Example code={codeSnippets.caption}>
        <Typography variant='caption'>The quick brown fox jumps over the lazy dog</Typography>
      </Example>

      <Typography variant='h2'>Code</Typography>
      <Typography variant='body'>
        Inline monospace text rendered as a code element,
        for referencing a prop or value mid-sentence. For multi-line examples use
        the CodeBlock component instead.
      </Typography>
      <Typography variant='caption'>0.875rem · 14px · monospace</Typography>
      <Example code={codeSnippets.code}>
        <Typography variant='code'>const value = 42</Typography>
      </Example>
    </Container>
  )
}
