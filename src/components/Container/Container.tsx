import type { ContainerFormat } from "./Container.types"
import styles from "./Container.module.css"

export function Container({ size = 'lg', gradient, padding, children }: ContainerFormat)
{
  const className = [
    styles.container,
    styles[size],
    gradient && styles[`gradient-${gradient}`],
    padding && styles[`padding-${padding}`],
  ]
    .filter(Boolean)
    .join(' ')

  return(
    <div className={className}>
      {children}
    </div>
  )
}

export default Container;
