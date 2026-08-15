import Link from '../Link/Link'
import styles from './Sidebar.module.css'
import type { SidebarFormat } from './Sidebar.types'

export function Sidebar({ items, heading }: SidebarFormat) {
  return (
    <nav className={styles.sidebar} aria-label="Main">
      {heading && <span className={styles.heading}>{heading}</span>}

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.label}>
            <Link
              destination={item.destination}
              linkText={item.label}
              hoverBackground
              fillWidth
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
