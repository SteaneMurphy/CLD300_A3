interface LinkBase
{
    destination: string,
    linkText: string,
}

interface LinkWithIcon extends LinkBase
{
    icon: true,
    iconPath: string,
    iconOnly?: boolean,
}

interface LinkTextOnly extends LinkBase
{
    icon?: false,
    iconPath?: never,
    iconOnly?: never,
}

export type LinkFormat = LinkWithIcon | LinkTextOnly
