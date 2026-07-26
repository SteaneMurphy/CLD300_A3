// Type definitions for the Icon component props, icon names, and sizes.

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
    src: string,
    size?: IconSize,
    label?: string,
}
