// Type definitions for the Container component props, sizes, gradients, and padding.

import type { ReactNode } from "react";

export type ContainerSize =
  | 'sm'
  | 'md'
  | 'lg'
  | 'full'

export type GradientDirection =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'

export type ContainerPadding =
  | 'sm'
  | 'md'
  | 'lg'

export interface ContainerFormat
{
    size?: ContainerSize,
    gradient?: GradientDirection,
    padding?: ContainerPadding,
    children: ReactNode,
}
