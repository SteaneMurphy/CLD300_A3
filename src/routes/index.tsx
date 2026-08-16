import { createFileRoute } from '@tanstack/react-router'
import Container from '../components/Container/Container'
import Sidebar from '../components/Sidebar/Sidebar'
import Typography from '../components/Typography/Typography'
import { SidebarLinks } from '../constants/constants'
import styles from './index.module.css'
import { Background, Promo } from '../constants/constants'
import Image from '../components/Image/Image'
import Stack from '../components/Stack/Stack'
import Button from '../components/Button/Button'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className={styles.page}>
      <Container as="aside" size="full" padding="md" className={styles.sidebar}>
        <Sidebar items={SidebarLinks} />
      </Container>

      <Container as="main" size="full" padding="lg" className={styles.content} backgroundImage={Background.path}>
        
        <Typography variant='body'>SOUNDTRACK THIS SEASON</Typography>

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
