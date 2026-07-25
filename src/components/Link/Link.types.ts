import type { IconName } from '../Icon/Icon.types'

interface LinkBase
{
    destination: string,
    linkText: string,
}

interface LinkWithIcon extends LinkBase
{
    icon: IconName,
    iconOnly?: boolean,
}

interface LinkTextOnly extends LinkBase
{
    icon?: never,
    iconOnly?: never,
}

export type LinkFormat = LinkWithIcon | LinkTextOnly
