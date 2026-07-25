import type { IconFormat } from "./Icon.types"
import styles from "./Icon.module.css"

export function Icon({ name, size = 'md', label }: IconFormat)
{
  const decorative = label === undefined

  return(
    <svg
      className={`${styles.icon} ${styles[size]}`}
      role={decorative ? undefined : 'img'}
      aria-label={label}
      aria-hidden={decorative || undefined}
    >
      <use href={`/icons.svg#${name}-icon`} />
    </svg>
  )
}

export default Icon;
