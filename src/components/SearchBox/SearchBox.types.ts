// Type definitions for the SearchBox component props and icon placement.

export type SearchIconPosition = 'left' | 'right'

export interface SearchBoxFormat {
  placeholder: string
  icon: string
  iconPosition?: SearchIconPosition
  onSearch?: (value: string) => void
}
