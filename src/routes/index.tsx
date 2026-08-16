import { createFileRoute } from '@tanstack/react-router'
import Container from '../components/Container/Container'
import Sidebar from '../components/Sidebar/Sidebar'
import Typography from '../components/Typography/Typography'
import { SidebarLinks } from '../constants/constants'
import styles from './index.module.css'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className={styles.page}>
      <Container as="aside" size="full" padding="md" className={styles.sidebar}>
        <Sidebar items={SidebarLinks} />
      </Container>

      <Container as="main" size="full" padding="lg" className={styles.content}>
        <Typography variant="h1">Home</Typography>
      </Container>
    </div>
  )
}
