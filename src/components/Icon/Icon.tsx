// Icon component. Renders an SVG from the icon sprite, hidden from assistive technology unless given a label.

import type { IconFormat } from './Icon.types'
import styles from './Icon.module.css'

export function Icon({ src, size = 'md', label }: IconFormat) {
  const decorative = label === undefined
  const className = `${styles.icon} ${styles[size]}`

  // sprite references carry a fragment id, standalone image files do not
  if (!src.includes('#')) {
    return <img className={className} src={src} alt={label ?? ''} />
  }

  return (
    <svg
      className={className}
      role={decorative ? undefined : 'img'}
      aria-label={label}
      aria-hidden={decorative || undefined}
    >
      <use href={src} />
    </svg>
  )
}

export default Icon
