// Type definitions for the SearchBox component props and icon placement.

export type SearchIconPosition = 'left' | 'right'

export type SearchBoxVariant = 'youtube-searchbox'

export interface SearchBoxFormat {
  placeholder: string
  icon: string
  iconPosition?: SearchIconPosition
  variant?: SearchBoxVariant
  onSearch?: (value: string) => void
}
