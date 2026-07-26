// Documentation route for the Image component. Shows the fit and radius options.

import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import Example from '../../components/Example/Example'
import Image from '../../components/Image/Image'
import heroImage from '../../assets/hero.png'
import Container from '../../components/Container/Container'
import Stack from '../../components/Stack/Stack'

const codeSnippets = {
  basic: `<Image src="/hero.png" alt="A short description" />`,
  fit: `<Image src="/hero.png" alt="" fit="cover" width={160} height={100} />
<Image src="/hero.png" alt="" fit="contain" width={160} height={100} />`,
  radius: `<Image src="/hero.png" alt="" radius="md" width={160} />
<Image src="/hero.png" alt="" radius="full" width={100} height={100} />`,
}

export const Route = createFileRoute('/components/image')({
  component: ImageDocs,
})

function ImageDocs() {
  return (
    <Container size="md">
      <Typography variant='h1'>Image</Typography>
      <Typography variant='body'>
        Image renders an img with sensible defaults: it is responsive (never
        overflows its container), lazy-loaded, and requires alt text. Use the
        fit and radius props to control how it fills its box and its corner
        shape.
      </Typography>

      <Typography variant='h2'>Basic</Typography>
      <Typography variant='body'>
        Provide a src and alt. Without an explicit size the image renders at its
        natural width, capped at 100% of the container.
      </Typography>
      <Example code={codeSnippets.basic}>
        <Image src={heroImage} alt='Example hero artwork' width={320} />
      </Example>

      <Typography variant='h2'>Fit</Typography>
      <Typography variant='body'>
        When a width and height constrain the box, the fit prop decides how the
        image fills it: cover (default) crops to fill, contain fits the whole
        image inside.
      </Typography>
      <Example code={codeSnippets.fit}>
        <Stack direction='row' gap='md'>
          <Image src={heroImage} alt='' fit='cover' width={160} height={100} />
          <Image src={heroImage} alt='' fit='contain' width={160} height={100} />
        </Stack>
      </Example>

      <Typography variant='h2'>Radius</Typography>
      <Typography variant='body'>
        The radius prop rounds the corners: none (default), md, or full for a
        circle (pair with a square width and height).
      </Typography>
      <Example code={codeSnippets.radius}>
        <Stack direction='row' gap='md' align='center'>
          <Image src={heroImage} alt='' radius='md' width={160} />
          <Image src={heroImage} alt='' radius='full' fit='cover' width={100} height={100} />
        </Stack>
      </Example>
    </Container>
  )
}
