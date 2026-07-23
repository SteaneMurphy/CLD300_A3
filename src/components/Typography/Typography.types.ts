import type { ReactNode } from "react";

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'p1'
  | 'p2'
  | 'code'

export interface TypographyFormat
{
    variant?: TypographyVariant,
    children: ReactNode,
}