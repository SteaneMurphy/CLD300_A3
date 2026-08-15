// Container component. Constrains content to a maximum width and centres it horizontally.

import type { ContainerFormat } from './Container.types'
import styles from './Container.module.css'

// .filter(Boolean) filters out the boolean conditions sent into the className attribute. Falsey
// boolean conditions are dropped so that only truthy conditions remain.
// .join(' ') then combines the remaining class names into the single
// space-separated string that className expects
export function Container({
  as: Tag = 'div',
  size = 'lg',
  gradient,
  padding,
  className: extraClassName,
  children,
}: ContainerFormat) {
  const className = [
    styles.container,
    styles[size],
    gradient && styles[`gradient-${gradient}`],
    padding && styles[`padding-${padding}`],
    extraClassName,
  ]
    .filter(Boolean)
    .join(' ')

  return <Tag className={className}>{children}</Tag>
}

export default Container
