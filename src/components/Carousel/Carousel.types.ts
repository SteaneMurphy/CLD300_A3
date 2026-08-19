// Type definitions for the Carousel component props.

import type { CardFormat } from '../../constants/constants'

export type CarouselLayout = 'square' | 'wide'

export interface CarouselFormat {
  heading: string
  cards: CardFormat[]
  /** Square artwork packs more cards per row; wide 16:9 artwork needs fewer. */
  layout?: CarouselLayout
  className?: string
}
