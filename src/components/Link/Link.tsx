import { Link as RouterLink } from '@tanstack/react-router'
import styles from './Link.module.css'
import type { LinkFormat } from './Link.types'

export function Link({ icon, iconPath, iconOnly, linkText, destination }: LinkFormat) {
  const showIcon = icon === true && Boolean(iconPath)

  const content = (
    <>
      {showIcon && <img className={styles.icon} src={iconPath} alt="" aria-hidden="true" />}
      {!iconOnly && <span>{linkText}</span>}
    </>
  )

  return (
    <RouterLink className={styles.link} to={destination} aria-label={iconOnly ? linkText : undefined}>
      {content}
    </RouterLink>
  )
}

export default Link
