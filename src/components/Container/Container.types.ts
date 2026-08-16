// Type definitions for the Container component props, sizes, gradients, and padding.

import type { ReactNode } from 'react'

export type ContainerElement =
  'div' | 'aside' | 'nav' | 'section' | 'header' | 'main'

export type ContainerSize = 'sm' | 'md' | 'lg' | 'full'

export type GradientDirection = 'top' | 'bottom' | 'left' | 'right'

export type ContainerPadding = 'sm' | 'md' | 'lg'

export interface ContainerFormat {
  as?: ContainerElement
  size?: ContainerSize
  gradient?: GradientDirection
  padding?: ContainerPadding
  backgroundImage?: string
  className?: string
  children: ReactNode
}
