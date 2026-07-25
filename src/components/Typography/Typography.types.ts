import type { ReactNode } from "react";

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'caption'
  | 'code'

export interface TypographyFormat
{
    variant?: TypographyVariant,
    children: ReactNode,
}