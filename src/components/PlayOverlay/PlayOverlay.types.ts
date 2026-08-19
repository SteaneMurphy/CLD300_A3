// Type definitions for the PlayOverlay animation component.

import type { ReactNode } from 'react'

export interface PlayOverlayFormat {
  /** Seconds the overlay takes to fade in and out. */
  duration?: number
  className?: string
  children: ReactNode
}
