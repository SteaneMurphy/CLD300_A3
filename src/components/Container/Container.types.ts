import type { ReactNode } from "react";

export type ContainerSize =
  | 'sm'
  | 'md'
  | 'lg'
  | 'full'

export interface ContainerFormat
{
    size?: ContainerSize,
    children: ReactNode,
}
