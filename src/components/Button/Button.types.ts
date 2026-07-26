// Type definitions for the Button component props, variants, and sizes.

import type { ReactNode } from "react";

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'

export type ButtonSize =
  | 'sm'
  | 'md'
  | 'lg'

export interface ButtonFormat
{
    variant?: ButtonVariant,
    size?: ButtonSize,
    type?: 'button' | 'submit' | 'reset',
    disabled?: boolean,
    onClick?: () => void,
    children: ReactNode,
}
