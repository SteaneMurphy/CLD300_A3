// Type definitions for the Typography component props and variants.

import type { ReactNode } from "react";

export type TypographyVariant =
  | 'display'
  | 'headline'
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