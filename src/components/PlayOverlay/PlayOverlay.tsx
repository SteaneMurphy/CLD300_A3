// PlayOverlay component. Washes its content with a grey gradient and centres a
// play button over it while hovered.

import { useState } from 'react'
import { motion } from 'motion/react'
import { IconPlay } from '../../constants/constants'
import styles from './PlayOverlay.module.css'
import type { PlayOverlayFormat } from './PlayOverlay.types'

/*
  Hover is tracked as local state rather than a whileHover variant because the
  carousel already drives its cards through hidden/visible entrance variants,
  and those names propagate down through context. Keeping this animation on its
  own state leaves the two completely independent.
*/
export function PlayOverlay({
  duration = 0.2,
  className,
  children,
}: PlayOverlayFormat) {
  const [hovered, setHovered] = useState(false)
  const transition = { duration, ease: 'easeOut' as const }

  return (
    <div
      className={[styles.frame, className].filter(Boolean).join(' ')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}

      <motion.div
        className={styles.overlay}
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={transition}
      >
        <motion.img
          className={styles.play}
          src={IconPlay.path}
          alt=""
          initial={false}
          animate={{ scale: hovered ? 1 : 0.85 }}
          transition={transition}
        />
      </motion.div>
    </div>
  )
}

export default PlayOverlay
