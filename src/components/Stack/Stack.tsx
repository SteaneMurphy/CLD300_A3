// Stack component. Lays out its children in a row or column with a consistent gap.

import type { StackFormat } from "./Stack.types"
import styles from "./Stack.module.css"

export function Stack({
  direction = 'column',
  gap = 'md',
  align,
  justify,
  wrap = false,
  children,
}: StackFormat)
{
  return(
    <div
      className={styles.stack}
      data-direction={direction}
      data-gap={gap}
      data-align={align}
      data-justify={justify}
      data-wrap={wrap || undefined}
    >
      {children}
    </div>
  )
}

export default Stack;
