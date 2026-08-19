// Link component. Renders a router link for internal paths and a plain anchor for external URLs.

import { Link as RouterLink } from '@tanstack/react-router'
import styles from './Link.module.css'
import type { LinkFormat } from './Link.types'
import Icon from '../Icon/Icon'

// regex is used to determine if the link destination attribute passed in is external or internal.
// checks on "https:/"
export function Link({
  icon,
  iconSrc,
  iconOnly,
  iconSize = 'sm',
  linkText,
  destination,
  hoverBackground,
  fillWidth,
  gap,
  size,
}: LinkFormat) {
  const isExternal = /^https?:\/\//.test(destination)

  // .filter(Boolean) filters out the boolean conditions sent into the className attribute. Falsey
  // boolean conditions are dropped so that only truthy conditions remain.
  // .join(' ') then combines the remaining class names into the single
  // space-separated string that className expects
  const className = [
    styles.link,
    hoverBackground && styles.hoverBackground,
    fillWidth && styles.fillWidth,
    gap && styles[`gap-${gap}`],
    size && styles[`size-${size}`],
  ]
    .filter(Boolean)
    .join(' ')

  // content is created based on conditional rendering and passed to the final return
  const iconHref = iconSrc ?? (icon ? `/icons.svg#${icon}-icon` : undefined)

  const content = (
    <>
      {iconHref && <Icon src={iconHref} size={iconSize} />}
      {!iconOnly && <span>{linkText}</span>}
    </>
  )

  // if external, generate an <a> tag element otherwise generate an <RouterLink> element
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
    <RouterLink
      className={className}
      to={destination}
      aria-label={iconOnly ? linkText : undefined}
    >
      {content}
    </RouterLink>
  )
}

export default Link
