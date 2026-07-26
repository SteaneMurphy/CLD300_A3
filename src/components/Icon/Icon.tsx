// Icon component. Renders an SVG from the icon sprite, hidden from assistive technology unless given a label.

import type { IconFormat } from "./Icon.types"
import styles from "./Icon.module.css"

export function Icon({ src, size = 'md', label }: IconFormat)
{
  const decorative = label === undefined

  return(
    <svg
      className={`${styles.icon} ${styles[size]}`}
      role={decorative ? undefined : 'img'}
      aria-label={label}
      aria-hidden={decorative || undefined}
    >
      <use href={src} />
    </svg>
  )
}

export default Icon;
