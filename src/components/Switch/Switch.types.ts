// Type definitions for the Switch component props and variants.

export type SwitchVariant =
  | 'standard'
  | 'ghost'
  | 'square'

export interface SwitchFormat
{
    variant?: SwitchVariant,
    onClick?: () => void,
    disabled?: boolean,
    label?: string,
    checked?: boolean,
}
