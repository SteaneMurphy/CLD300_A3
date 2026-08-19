// FadeIn component. Fades its content in and out in response to a boolean,
// leaving the content mounted so its layout never shifts.

import { motion } from 'motion/react'
import type { FadeInFormat } from './FadeIn.types'

export function FadeIn({
  visible,
  duration = 0.18,
  className,
  children,
}: FadeInFormat) {
  return (
    <motion.div
      className={className}
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
