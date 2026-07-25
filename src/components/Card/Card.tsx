import type { CardFormat } from "./Card.types"
import styles from "./Card.module.css"

export function Card({ variant = 'outlined', padding = 'md', children }: CardFormat)
{
  return(
    <div className={`${styles.card} ${styles[variant]} ${styles[padding]}`}>
      {children}
    </div>
  )
}

export default Card;
