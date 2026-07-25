import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import CodeBlock from '../../components/CodeBlock/CodeBlock'
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
        Image renders an <Typography variant='code'>img</Typography> with sensible
        defaults: it is responsive (never overflows its container), lazy-loaded,
        and requires <Typography variant='code'>alt</Typography> text. Use
        the <Typography variant='code'>fit</Typography> and{' '}
        <Typography variant='code'>radius</Typography> props to control how it
        fills its box and its corner shape.
      </Typography>

      <Typography variant='h2'>Basic</Typography>
      <Typography variant='body'>
        Provide a <Typography variant='code'>src</Typography> and{' '}
        <Typography variant='code'>alt</Typography>. Without an explicit size the
        image renders at its natural width, capped at 100% of the container.
      </Typography>
      <Image src={heroImage} alt='Example hero artwork' width={320} />
      <CodeBlock code={codeSnippets.basic} />

      <Typography variant='h2'>Fit</Typography>
      <Typography variant='body'>
        When a width and height constrain the box,
        the <Typography variant='code'>fit</Typography> prop decides how the
        image fills it: <Typography variant='code'>cover</Typography> (default)
        crops to fill, <Typography variant='code'>contain</Typography> fits the
        whole image inside.
      </Typography>
      <Stack direction='row' gap='md'>
        <Image src={heroImage} alt='' fit='cover' width={160} height={100} />
        <Image src={heroImage} alt='' fit='contain' width={160} height={100} />
      </Stack>
      <CodeBlock code={codeSnippets.fit} />

      <Typography variant='h2'>Radius</Typography>
      <Typography variant='body'>
        The <Typography variant='code'>radius</Typography> prop rounds the
        corners: <Typography variant='code'>none</Typography> (default),{' '}
        <Typography variant='code'>md</Typography>, or{' '}
        <Typography variant='code'>full</Typography> for a circle (pair with a
        square width and height).
      </Typography>
      <Stack direction='row' gap='md' align='center'>
        <Image src={heroImage} alt='' radius='md' width={160} />
        <Image src={heroImage} alt='' radius='full' fit='cover' width={100} height={100} />
      </Stack>
      <CodeBlock code={codeSnippets.radius} />
    </Container>
  )
}
