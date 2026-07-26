import type { ElementType } from "react"
import type { TypographyVariant, TypographyFormat } from "./Typography.types"
import styles from "./Typography.module.css"

const variantElements: Record<TypographyVariant, ElementType> = {
  display: 'h1',
  headline: 'h2',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  caption: 'span',
  code: 'code',
}

export function Typography({ variant = 'body', children }: TypographyFormat)
{
  const Element = variantElements[variant]

  return(
    <Element className={styles[variant]}>{children}</Element>
  )
}

export default Typography;
