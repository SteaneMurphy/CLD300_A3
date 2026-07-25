export type IconName =
  | 'bluesky'
  | 'discord'
  | 'documentation'
  | 'github'
  | 'social'
  | 'x'

export type IconSize =
  | 'sm'
  | 'md'
  | 'lg'

export interface IconFormat
{
    name: IconName,
    size?: IconSize,
    /** Accessible name. Omit for decorative icons (they are hidden from assistive tech). */
    label?: string,
}
