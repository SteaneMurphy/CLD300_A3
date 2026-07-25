import type { ReactNode } from "react";

export type StackDirection =
  | 'row'
  | 'column'

export type StackGap =
  | 'sm'
  | 'md'
  | 'lg'

export type StackAlign =
  | 'start'
  | 'center'
  | 'end'
  | 'stretch'

export type StackJustify =
  | 'start'
  | 'center'
  | 'between'
  | 'end'

export interface StackFormat
{
    direction?: StackDirection,
    gap?: StackGap,
    align?: StackAlign,
    justify?: StackJustify,
    wrap?: boolean,
    children: ReactNode,
}
