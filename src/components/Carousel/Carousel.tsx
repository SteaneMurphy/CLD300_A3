// Carousel component. A scrolling row of cards with a heading and previous and next controls.

import { useCallback, useEffect, useRef, useState } from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import Icon from '../Icon/Icon'
import Image from '../Image/Image'
import Stack from '../Stack/Stack'
import { Stagger, StaggerItem } from '../Stagger/Stagger'
import PlayOverlay from '../PlayOverlay/PlayOverlay'
import FadeIn from '../FadeIn/FadeIn'
import Typography from '../Typography/Typography'
import { IconArrowLeft, IconArrowRight } from '../../constants/constants'
import styles from './Carousel.module.css'
import type { CarouselFormat } from './Carousel.types'

function formatViews(views: number) {
  return views >= 1_000_000
    ? `${(views / 1_000_000).toFixed(1)}M views`
    : `${Math.round(views / 1_000)}K views`
}

export function Carousel({
  heading,
  cards,
  layout = 'square',
  className: extraClassName,
}: CarouselFormat) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(true)
  // The previous and next controls stay hidden until the row is hovered.
  const [hovered, setHovered] = useState(false)

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
    <Stagger
      className={[styles.carousel, styles[layout], extraClassName]
        .filter(Boolean)
        .join(' ')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Stack direction="row" justify="between" align="center">
        <Typography variant="h1">{heading}</Typography>

        <FadeIn visible={hovered}>
          <Stack direction="row" gap="sm" align="center">
            <Button
              variant="youtube-icon"
              disabled={atStart}
              onClick={() => scrollByPage(-1)}
            >
              <Icon src={IconArrowLeft.path} size="md" label="Previous" />
            </Button>

            <Button
              variant="youtube-icon"
              disabled={atEnd}
              onClick={() => scrollByPage(1)}
            >
              <Icon src={IconArrowRight.path} size="md" label="Next" />
            </Button>
          </Stack>
        </FadeIn>
      </Stack>

      <Stack
        ref={trackRef}
        direction="row"
        gap="lg"
        className={styles.track}
        onScroll={updateBounds}
      >
        {cards.map((card) => (
          <StaggerItem key={card.path} className={styles.item}>
            <Card variant="naked" padding="none">
              <PlayOverlay>
                <Image src={card.path} alt="" fit="cover" radius="md" />
              </PlayOverlay>
              <div className={styles.meta}>
                <Typography variant="body">{card.title}</Typography>
                <Typography variant="caption">
                  {card.artists
                    ? card.artists.join(', ')
                    : `${card.username} • ${formatViews(card.views)}`}
                </Typography>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stack>
    </Stagger>
  )
}

export default Carousel
