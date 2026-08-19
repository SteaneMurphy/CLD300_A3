import Icon from '../Icon/Icon'
import Link from '../Link/Link'
import styles from './Sidebar.module.css'
import type { SidebarFormat } from './Sidebar.types'
import { YoutubeMusicLogo, IconMenu } from '../../constants/constants'
import Stack from '../Stack/Stack'
import Button from '../Button/Button'
import Typography from '../Typography/Typography'

export function Sidebar({ items }: SidebarFormat) {
  return (
    <nav className={styles.sidebar} aria-label="Main">
      <Stack direction="row" gap="md" align="center" className="sidebar-header">
        <Icon src={IconMenu.path} size="md" />

        <img
          className={styles.logo}
          src={YoutubeMusicLogo.path}
          alt="YouTube Music"
        />
      </Stack>

      <ul className={`${styles.list} sidebar-links`}>
        {items.map((item) => (
          <li key={item.text}>
            <Link
              destination={item.url}
              linkText={item.text}
              iconSrc={item.icon}
              iconSize="md"
              gap="md"
              size="lg"
              hoverBackground
              fillWidth
            />
          </li>
        ))}
      </ul>

      <hr
        style={{
          border: 'none',
          width: '100%',
          height: '1px',
          backgroundColor: '#282828',
        }}
      />

      <Button variant="youtube-secondary">Sign In</Button>

      <Typography variant="caption">
        Sign in to create & share playlists, get personalized recommendations,
        and more.
      </Typography>
    </nav>
  )
}

export default Sidebar
