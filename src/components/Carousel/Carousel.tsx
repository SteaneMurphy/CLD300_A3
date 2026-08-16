// Carousel component. A scrolling row of cards with a heading and previous and next controls.

import { useCallback, useEffect, useRef, useState } from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import Icon from '../Icon/Icon'
import Image from '../Image/Image'
import Stack from '../Stack/Stack'
import Typography from '../Typography/Typography'
import { IconArrowLeft, IconArrowRight } from '../../constants/constants'
import styles from './Carousel.module.css'
import type { CarouselFormat } from './Carousel.types'

function formatViews(views: number) {
  return views >= 1_000_000
    ? `${(views / 1_000_000).toFixed(1)}M views`
    : `${Math.round(views / 1_000)}K views`
}

export function Carousel({ heading, cards }: CarouselFormat) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(true)

  const updateBounds = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    setAtStart(track.scrollLeft <= 0)
    setAtEnd(
      Math.ceil(track.scrollLeft + track.clientWidth) >= track.scrollWidth,
    )
  }, [])

  useEffect(() => {
    updateBounds()
  }, [updateBounds, cards])

  const scrollByPage = (direction: -1 | 1) => {
    const track = trackRef.current
    if (!track) return

    track.scrollBy({ left: direction * track.clientWidth })
  }

  return (
    <div className={styles.carousel}>
      <Stack direction="row" justify="between" align="center">
        <Typography variant="h3">{heading}</Typography>

        <Stack direction="row" gap="sm" align="center">
          <Button
            variant="ghost"
            size="sm"
            disabled={atStart}
            onClick={() => scrollByPage(-1)}
          >
            <Icon src={IconArrowLeft.path} size="md" label="Previous" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            disabled={atEnd}
            onClick={() => scrollByPage(1)}
          >
            <Icon src={IconArrowRight.path} size="md" label="Next" />
          </Button>
        </Stack>
      </Stack>

      <Stack
        ref={trackRef}
        direction="row"
        gap="md"
        className={styles.track}
        onScroll={updateBounds}
      >
        {cards.map((card) => (
          <Stack key={card.path} className={styles.item}>
            <Card variant="outlined" padding="sm">
              <Image src={card.path} alt="" fit="cover" radius="md" />
              <Typography variant="body">{card.title}</Typography>
              <Typography variant="caption">
                {card.artists
                  ? card.artists.join(', ')
                  : `${card.username} • ${formatViews(card.views)}`}
              </Typography>
            </Card>
          </Stack>
        ))}
      </Stack>
    </div>
  )
}

export default Carousel
