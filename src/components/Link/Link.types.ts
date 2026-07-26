import type { IconName, IconSize } from '../Icon/Icon.types'

interface LinkBase
{
    destination: string,
    linkText: string,
    hoverBackground?: boolean,
    fillWidth?: boolean,
}

interface LinkWithIcon extends LinkBase
{
    icon: IconName,
    iconOnly?: boolean,
    iconSize?: IconSize,
}

interface LinkTextOnly extends LinkBase
{
    icon?: never,
    iconOnly?: never,
    iconSize?: never,
}

export type LinkFormat = LinkWithIcon | LinkTextOnly
