// Type definitions for the Card component props, variants, and padding sizes.

import type { ReactNode } from "react";

export type CardVariant =
  | 'outlined'
  | 'elevated'

export type CardPadding =
  | 'sm'
  | 'md'
  | 'lg'

export interface CardFormat
{
    variant?: CardVariant,
    padding?: CardPadding,
    children: ReactNode,
}
