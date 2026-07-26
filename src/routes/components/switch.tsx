// Documentation route for the Switch component. Shows each variant and the disabled state.

import { createFileRoute } from '@tanstack/react-router'
import Typography from '../../components/Typography/Typography'
import Example from '../../components/Example/Example'
import Switch from '../../components/Switch/Switch'
import Container from '../../components/Container/Container'
import Stack from '../../components/Stack/Stack'

const codeSnippets = {
  standard: `<Switch label="Notifications" onClick={handleToggle} />`,
  variants: `<Switch variant="standard" label="Standard" onClick={handleToggle} />
<Switch variant="ghost" label="Ghost" onClick={handleToggle} />
<Switch variant="square" label="Square" onClick={handleToggle} />`,
  disabled: `<Switch label="Disabled" disabled />`,
}

export const Route = createFileRoute('/components/switch')({
  component: SwitchDocs,
})

function SwitchDocs() {
  return (
    <Container size="md">
      <Typography variant='h1'>Switch</Typography>
      <Typography variant='body'>
        Switch is a toggle for an on/off setting. It manages its own state and
        calls the onClick handler each time it is flipped. Pass a label to give
        it an accessible name. Choose a look with the variant prop.
      </Typography>

      <Typography variant='h2'>Basic</Typography>
      <Typography variant='body'>
        The default standard variant: a pill track whose background changes
        colour between off and on, with a circular knob that slides across.
      </Typography>
      <Example code={codeSnippets.standard}>
        <Switch label='Notifications' />
      </Example>

      <Typography variant='h2'>Variants</Typography>
      <Typography variant='body'>
        Three variants set the look. Standard is a coloured pill with a round
        knob. Ghost drops the track fill for an outlined track, showing state
        through the knob colour instead. Square uses the same coloured track and
        travel with square edges.
      </Typography>
      <Example code={codeSnippets.variants}>
        <Stack direction='row' align='center' gap='lg'>
          <Switch variant='standard' label='Standard' />
          <Switch variant='ghost' label='Ghost' />
          <Switch variant='square' label='Square' />
        </Stack>
      </Example>

      <Typography variant='h2'>Disabled</Typography>
      <Typography variant='body'>
        Set disabled to make the switch non-interactive. Works with any variant.
      </Typography>
      <Example code={codeSnippets.disabled}>
        <Switch label='Disabled' disabled />
      </Example>
    </Container>
  )
}
