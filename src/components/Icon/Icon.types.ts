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
    /** Path to the icon, including any sprite fragment, e.g. "/icons.svg#github-icon". */
    src: string,
    size?: IconSize,
    /** Accessible name. Omit for decorative icons (they are hidden from assistive tech). */
    label?: string,
}
