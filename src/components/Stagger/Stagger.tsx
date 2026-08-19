// Stagger and StaggerItem. A container that reveals its items in sequence when
// it scrolls into view, and the item wrapper that describes a single entrance.

import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import type { StaggerFormat, StaggerItemFormat } from './Stagger.types'

const containerVariants = (stagger: number, delay: number): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})

const itemVariants = (distance: number): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
})

export function Stagger({
  stagger = 0.09,
  delay = 0,
  once = true,
  className,
  onMouseEnter,
  onMouseLeave,
  children,
}: StaggerFormat) {
  return (
    <motion.div
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      variants={containerVariants(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  distance = 12,
  className,
  children,
}: StaggerItemFormat) {
  return (
    <motion.div className={className} variants={itemVariants(distance)}>
      {children}
    </motion.div>
  )
}

export default Stagger
