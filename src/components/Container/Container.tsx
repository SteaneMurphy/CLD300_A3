import type { ContainerFormat } from "./Container.types"
import styles from "./Container.module.css"

export function Container({ size = 'lg', children }: ContainerFormat)
{
  return(
    <div className={`${styles.container} ${styles[size]}`}>
      {children}
    </div>
  )
}

export default Container;
