import { createFileRoute } from '@tanstack/react-router'
import Container from '../components/Container/Container'
import Sidebar from '../components/Sidebar/Sidebar'
import Typography from '../components/Typography/Typography'
import { SidebarLinks } from '../constants/constants'
import styles from './index.module.css'
import { Background, Promo, IconOverflow } from '../constants/constants'
import Image from '../components/Image/Image'
import Stack from '../components/Stack/Stack'
import Button from '../components/Button/Button'
import Icon from '../components/Icon/Icon'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className={styles.page}>
      {/* SIDEBAR CONTENT */}
      <Container as="aside" size="full" padding="md" className={styles.sidebar}>
        <Sidebar items={SidebarLinks} />
      </Container>

      {/* MAIN WINDOW CONTENT */}
      <Container as="main" size="full" padding="lg" className={styles.content} backgroundImage={Background.path}>

        {/* SEARCHBAR/HEADER */}
        <Stack direction='row'>
          {/* BUILD SEARCHBAR COMPONENT HERE */}
          <Stack direction='row'>
            <Icon src={IconOverflow.path} />
            <Button variant='primary'>Sign In</Button>
          </Stack>
        </Stack>

        {/* CATEGORY BUTTON ROW */}
        <Stack direction='row'>
          <Button variant='secondary' >Podcasts</Button>
          <Button variant='secondary' >Workout</Button>
          <Button variant='secondary' >Energise</Button>
          <Button variant='secondary' >Feel good</Button>
          <Button variant='secondary' >Relax</Button>
          <Button variant='secondary' >Party</Button>
          <Button variant='secondary' >Commute</Button>
        </Stack>

        <Typography variant='body'>SOUNDTRACK THIS SEASON</Typography>


        {/* PLAYLIST CONTENT - GENERATED ON SCROLL */}


        {/* PROMO */}
        <Stack direction='row'>
          <Image src={Promo.path} alt='none' fit='contain' />
          <Stack>
            <Typography variant='h3' >Tell us which artists you like</Typography>
            <Typography variant='body' >We'll create an experience just for you</Typography>
            <Button variant='primary' >Let's Go</Button>
          </Stack>
        </Stack>

      </Container>
    </div>
  )
}
