export type SwitchVariant =
  | 'standard'
  | 'ghost'
  | 'square'

export interface SwitchFormat
{
    variant?: SwitchVariant,
    onClick?: () => void,
    disabled?: boolean,
    /** Accessible name for the toggle. */
    label?: string,
}
