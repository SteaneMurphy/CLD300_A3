export type ImageFit =
  | 'cover'
  | 'contain'

export type ImageRadius =
  | 'none'
  | 'md'
  | 'full'

export interface ImageFormat
{
    src: string,
    /** Alternative text. Required; pass an empty string for purely decorative images. */
    alt: string,
    fit?: ImageFit,
    radius?: ImageRadius,
    width?: number | string,
    height?: number | string,
}
