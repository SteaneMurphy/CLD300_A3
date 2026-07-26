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
    /** Controls the on/off state. Omit to let the Switch manage its own state. */
    checked?: boolean,
}
