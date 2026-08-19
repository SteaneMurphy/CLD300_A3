// Card component. A surface that groups related content, styled by the variant and padding props.

import type { CardFormat } from './Card.types'
import styles from './Card.module.css'

export function Card({
  variant = 'naked',
  padding = 'md',
  children,
}: CardFormat) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${styles[padding]}`}>
      {children}
    </div>
  )
}

export default Card
