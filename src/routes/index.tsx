import { createFileRoute } from '@tanstack/react-router'
import Container from '../components/Container/Container'
import Sidebar from '../components/Sidebar/Sidebar'
import Typography from '../components/Typography/Typography'
import { SidebarLinks } from '../constants/constants'
import styles from './index.module.css'
import {
  Background,
  Promo,
  IconOverflow,
  IconSearch,
  Shelves,
} from '../constants/constants'
import Image from '../components/Image/Image'
import Stack from '../components/Stack/Stack'
import Button from '../components/Button/Button'
import Icon from '../components/Icon/Icon'
import SearchBox from '../components/SearchBox/SearchBox'
import Carousel from '../components/Carousel/Carousel'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className={styles.page}>
      {/* SIDEBAR CONTENT */}
      <Container as="aside" size="full" padding="md" className={styles.sidebar}>
        <Sidebar items={SidebarLinks} />
      </Container>

      {/* MAIN WINDOW CONTENT */}
      <Container
        as="main"
        size="full"
        className={`${styles.content} site-layout`}
        backgroundImage={Background.path}
      >
        {/* SEARCHBAR/HEADER */}
        <Stack
          direction="row"
          justify="between"
          align="center"
          className="search-row"
        >
          <SearchBox
            variant="youtube-searchbox"
            placeholder="Search songs, albums, artists, podcasts"
            icon={IconSearch.path}
            iconPosition="left"
          />
          <Stack direction="row" align="center">
            <Icon src={IconOverflow.path} />
            <Button variant="youtube-primary">Sign In</Button>
          </Stack>
        </Stack>

        {/* CATEGORY BUTTON ROW */}
        <Stack direction="row" className="category-row">
          <Button variant="youtube-ghost">Podcasts</Button>
          <Button variant="youtube-ghost">Workout</Button>
          <Button variant="youtube-ghost">Energise</Button>
          <Button variant="youtube-ghost">Feel good</Button>
          <Button variant="youtube-ghost">Relax</Button>
          <Button variant="youtube-ghost">Party</Button>
          <Button variant="youtube-ghost">Commute</Button>
        </Stack>

        <Typography variant="body" className="section-heading">
          SOUNDTRACK THIS SEASON
        </Typography>

        {/* PLAYLIST CONTENT - GENERATED ON SCROLL */}
        {Shelves.map((carousel) => (
          <Carousel
            className="shelf"
            key={carousel.heading}
            heading={carousel.heading}
            cards={carousel.cards}
            layout={carousel.layout}
          />
        ))}

        {/* PROMO */}
        <Stack direction="row" className="promo">
          <Image src={Promo.path} alt="promotional image" fit="contain" />
          <Stack>
            <Typography variant="h3">Tell us which artists you like</Typography>
            <Typography variant="body">
              We'll create an experience just for you
            </Typography>
            <Button variant="youtube-primary">Let's Go</Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  )
}
