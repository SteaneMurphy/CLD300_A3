import Icon from '../Icon/Icon'
import Link from '../Link/Link'
import styles from './Sidebar.module.css'
import type { SidebarFormat } from './Sidebar.types'
import { YoutubeMusicLogo, IconMenu } from '../../constants/constants'
import Stack from '../Stack/Stack'
import Button from '../Button/Button'
import Typography from '../Typography/Typography'

export function Sidebar({ items, heading }: SidebarFormat) {
  return (
    <nav className={styles.sidebar} aria-label="Main">
      {heading && <span className={styles.heading}>{heading}</span>}

      <Stack
        direction='row'
      >
        <Icon 
          src={IconMenu.path}
          size='md'
        />

        <Icon 
          src={YoutubeMusicLogo.path}
          size='lg'
        />
      </Stack>


      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.text}>
            <Link
              destination={item.url}
              linkText={item.text}
              iconSrc={item.icon}
              iconSize='md'
              hoverBackground
              fillWidth
            />
          </li>
        ))}
      </ul>

       <hr style={{ border: "none", width: "100%", height: "1px", backgroundColor: "#282828" }} />

       <Button variant='secondary'>Sign In</Button>

       <Typography variant='caption'>Sign in to create & share playlists, get personalized recommendations, and more.</Typography>
    </nav>
  )
}

export default Sidebar
