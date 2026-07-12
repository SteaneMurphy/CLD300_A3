import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <Link to="/" className="brand">
          Design System Docs
        </Link>
        <nav className="app-nav">
          <Link to="/" activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/components/button">Button</Link>
        </nav>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      {/* Dev-only route inspector; tree-shaken out of production builds. */}
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  )
}
