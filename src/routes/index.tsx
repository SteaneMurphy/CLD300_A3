import { createFileRoute } from '@tanstack/react-router'
import Container from '../components/Container/Container'
import Sidebar from '../components/Sidebar/Sidebar'
import Typography from '../components/Typography/Typography'
import type { SidebarItem } from '../components/Sidebar/Sidebar.types'
import styles from './index.module.css'

export const Route = createFileRoute('/')({
  component: Home,
})

const navItems: SidebarItem[] = [
  { label: 'Home', destination: '/' },
  { label: 'Explore', destination: '/' },
  { label: 'Library', destination: '/' },
]

function Home() {
  return (
    <div className={styles.page}>
      <Container as="aside" size="full" padding="md" className={styles.sidebar}>
        <Sidebar items={navItems} heading="Browse" />
      </Container>

      <Container as="main" size="full" padding="lg" className={styles.content}>
        <Typography variant="h1">Home</Typography>
      </Container>
    </div>
  )
}
