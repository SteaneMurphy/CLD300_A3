// Type definitions for the FadeIn animation component.

import type { ReactNode } from 'react'

export interface FadeInFormat {
  /** Whether the content is currently shown. */
  visible: boolean
  /** Seconds the fade takes in each direction. */
  duration?: number
  className?: string
  children: ReactNode
}
