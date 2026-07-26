import { Link as RouterLink } from '@tanstack/react-router'
import styles from './Link.module.css'
import type { LinkFormat } from './Link.types'
import Icon from '../Icon/Icon'

export function Link({ icon, iconOnly, iconSize = 'sm', linkText, destination, hoverBackground, fillWidth }: LinkFormat) {
  const isExternal = /^https?:\/\//.test(destination)

  const className = [
    styles.link,
    hoverBackground && styles.hoverBackground,
    fillWidth && styles.fillWidth,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon && <Icon name={icon} size={iconSize} />}
      {!iconOnly && <span>{linkText}</span>}
    </>
  )

  if (isExternal) {
    return (
      <a
        className={className}
        href={destination}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={iconOnly ? linkText : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <RouterLink className={className} to={destination} aria-label={iconOnly ? linkText : undefined}>
      {content}
    </RouterLink>
  )
}

export default Link
