// Type definitions for the Link component props. The union prevents icon options being passed without an icon.

import type { IconName, IconSize } from '../Icon/Icon.types'

export type LinkGap = 'sm' | 'md' | 'lg'

export type LinkSize = 'sm' | 'md' | 'lg'

interface LinkBase {
  destination: string
  linkText: string
  hoverBackground?: boolean
  fillWidth?: boolean
  /** Space between the icon and the link text. */
  gap?: LinkGap
  /** Overall height of the link row. */
  size?: LinkSize
}

interface LinkWithIcon extends LinkBase {
  icon: IconName
  iconSrc?: never
  iconOnly?: boolean
  iconSize?: IconSize
}

interface LinkWithIconSrc extends LinkBase {
  iconSrc: string
  icon?: never
  iconOnly?: boolean
  iconSize?: IconSize
}

interface LinkTextOnly extends LinkBase {
  icon?: never
  iconSrc?: never
  iconOnly?: never
  iconSize?: never
}

export type LinkFormat = LinkWithIcon | LinkWithIconSrc | LinkTextOnly
