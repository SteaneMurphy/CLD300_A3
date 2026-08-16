// Type definitions for the Input component props, types, and variants.

export type InputType = 'text' | 'search'

export type InputVariant = 'default' | 'bare'

export interface InputFormat {
  value: string
  onChange: (value: string) => void
  type?: InputType
  variant?: InputVariant
  placeholder?: string
  label?: string
}
