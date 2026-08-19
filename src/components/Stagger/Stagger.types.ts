// Type definitions for the Stagger and StaggerItem animation components.

import type { ReactNode } from 'react'

export interface StaggerFormat {
  stagger?: number
  delay?: number
  once?: boolean
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  children: ReactNode
}

export interface StaggerItemFormat {
  /* Distance in pixels the item rises from as it fades in. */
  distance?: number
  className?: string
  children: ReactNode
}
