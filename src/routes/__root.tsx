// Root route. Defines the app shell layout of header, sidebar, and main content outlet.

import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Sidebar } from '../components/Sidebar/Sidebar.tsx'
import { Header } from '../components/Header/Header'
import styles from './__root.module.css'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Header />
      </header>

      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>

      <main className={styles.main}>
        <Outlet />
      </main>

      <TanStackRouterDevtools position="bottom-right" />
    </div>
  )
}
