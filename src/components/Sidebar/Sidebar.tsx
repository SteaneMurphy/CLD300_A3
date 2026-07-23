import { Link } from '../Link/Link'
import type { SidebarLink } from './Sidebar.types'
import styles from './Sidebar.module.css'

const componentLinks: SidebarLink[] = [
    { linkText: 'Button', destination: '/components/button' },
    { linkText: 'Card', destination: '/components/card' },
    { linkText: 'Container', destination: '/components/container' },
    { linkText: 'Icon', destination: '/components/icon' },
    { linkText: 'Image', destination: '/components/image' },
    { linkText: 'Input', destination: '/components/input' },
    { linkText: 'Link', destination: '/components/link' },
    { linkText: 'Searchbox', destination: '/components/searchbox' },
    { linkText: 'Stack', destination: '/components/stack' },
    { linkText: 'Switch', destination: '/components/switch' },
    { linkText: 'Typography', destination: '/components/typography' },
]

export function Sidebar()
{
    return(
        <nav className={styles.nav}>
            {componentLinks.map(({ linkText, destination }) => (
                <Link key={destination} destination={destination} linkText={linkText} />
            ))}
        </nav>
    )
}

export default Sidebar;
