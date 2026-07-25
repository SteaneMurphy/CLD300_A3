import { Link as RouterLink } from '@tanstack/react-router'
import styles from './Link.module.css'
import type { LinkFormat } from './Link.types'
import Icon from '../Icon/Icon'

export function Link({ icon, iconOnly, linkText, destination }: LinkFormat) {
  return (
    <RouterLink className={styles.link} to={destination} aria-label={iconOnly ? linkText : undefined}>
      {icon && <Icon name={icon} size="sm" />}
      {!iconOnly && <span>{linkText}</span>}
    </RouterLink>
  )
}

export default Link
