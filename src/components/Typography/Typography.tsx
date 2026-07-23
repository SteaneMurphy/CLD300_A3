import type { TypographyFormat } from "./Typography.types"

export function Typography({ children }: TypographyFormat)
{
  return( 
    <p>{children}</p>
  )
}

export default Typography;

