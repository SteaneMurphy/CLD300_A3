import iconHome from '../assets/icons/whiteHouse.svg'
import iconExplore from '../assets/icons/whiteCompass.svg'
import iconLibrary from '../assets/icons/whiteBookmark.svg'
import iconMenu from '../assets/icons/whiteHamburgerIcon.svg'
import iconOverflow from '../assets/icons/whiteTripleDots.svg'
import iconSearch from '../assets/icons/greyMagGlass.svg'
import iconArrowLeft from '../assets/icons/greyLeftArrow.svg'
import iconArrowRight from '../assets/icons/whiteRightArrow.svg'

import card1 from '../assets/cards/card1.png'
import card2 from '../assets/cards/card2.png'
import card3 from '../assets/cards/card3.png'
import card4 from '../assets/cards/card4.png'
import card5 from '../assets/cards/card5.png'
import card6 from '../assets/cards/card6.png'
import card7 from '../assets/cards/card7.png'
import card8 from '../assets/cards/card8.png'
import card9 from '../assets/cards/card9.png'
import card10 from '../assets/cards/card10.png'
import card11 from '../assets/cards/card11.png'
import card12 from '../assets/cards/card12.png'

import logoYoutubeMusic from '../assets/logos/youtubeMusicLogo.svg'

import background from '../assets/misc/background.png'
import promo1 from '../assets/misc/promo1.png'

export interface NavLinkFormat {
  text: string
  url: string
  icon: string
}

export const SidebarLinks: NavLinkFormat[] = [
  {
    text: 'Home',
    url: '/',
    icon: iconHome,
  },
  {
    text: 'Explore',
    url: '/',
    icon: iconExplore,
  },
  {
    text: 'Library',
    url: '/',
    icon: iconLibrary,
  },
]

export interface StandAloneImageFormat {
  path: string
}

export const YoutubeMusicLogo: StandAloneImageFormat = {
  path: logoYoutubeMusic,
}

export const IconMenu: StandAloneImageFormat = {
  path: iconMenu,
}

export const IconSearch: StandAloneImageFormat = {
  path: iconSearch,
}

export const IconOverflow: StandAloneImageFormat = {
  path: iconOverflow,
}

export const IconArrowLeft: StandAloneImageFormat = {
  path: iconArrowLeft,
}

export const IconArrowRight: StandAloneImageFormat = {
  path: iconArrowRight,
}

export const Background: StandAloneImageFormat = {
  path: background,
}

export const Promo: StandAloneImageFormat = {
  path: promo1,
}

interface CardBase {
  path: string
  title: string
}

interface CardWithArtists extends CardBase {
  artists: string[]
  username?: never
  views?: never
}

interface CardWithCreator extends CardBase {
  username: string
  views: number
  artists?: never
}

/*
  In a fullstack application we would collect the artist names from the included tracks inside a playlist and then populate
  a short list of those artists into the description string element. For example, we would collect the first 5, concat those artist names
  to a single string (including an ',') and then push it to the string element. The string element would be capped and truncated
  dependending on the limit set by the designers or set by the screen width.

  In this case we are hardcoding this data and so this logic is not set up.
*/

export type CardFormat = CardWithArtists | CardWithCreator

export const MadeForYou: CardFormat[] = [
  {
    path: card1,
    title: 'Country Summer',
    artists: [
      'Delta Youngblood',
      'Marlowe Finch',
      'Rhodes Avenue',
      'Otis Vance',
    ],
  },
  {
    path: card2,
    title: 'Chill R&B',
    artists: ['Sable Monroe', 'Junia Sparrow', 'Lyra Solace', 'Amberline'],
  },
  {
    path: card3,
    title: 'Yacht Rock Classics',
    artists: [
      'Kite & Anchor',
      'The Harbour Lights',
      'Cassius Vale',
      'Fenn Brothers',
    ],
  },
  {
    path: card4,
    title: 'Nineties Country',
    artists: [
      'Wilder Quinn',
      'Velvet Ashcroft',
      'The Slow Hours',
      'Bright Antenna',
    ],
  },
  {
    path: card5,
    title: 'Two Thousands R&B',
    artists: ['Nova Reyes', 'Sable Monroe', 'Junia Sparrow'],
  },
  {
    path: card6,
    title: 'Hip Hop Party',
    artists: ['Ellis Crane', 'Marlowe Finch', 'Otis Vance', 'Nova Reyes'],
  },
]

/*
  User generated playlists appear on Youtube Music. This card type will display a username and view count.
*/
export const TrendingPlaylists: CardFormat[] = [
  {
    path: card7,
    title: 'Throwback Hits',
    username: 'brandoreyes',
    views: 8700000,
  },
  {
    path: card8,
    title: 'Rock Revival',
    username: 'xScottyHalloranx',
    views: 7800000,
  },
  {
    path: card9,
    title: 'Country Roads',
    username: 'zataantony',
    views: 2400000,
  },
  {
    path: card10,
    title: 'Late Night Pop',
    username: 'jacqui_simons',
    views: 3600000,
  },
  {
    path: card11,
    title: 'Old School Rap',
    username: 'romellosuave',
    views: 5500000,
  },
  {
    path: card12,
    title: 'Nineties Anthems',
    username: 'samportillo',
    views: 5900000,
  },
]

export interface ShelfFormat {
  heading: string
  cards: CardFormat[]
}

export const Shelves: ShelfFormat[] = [
  {
    heading: 'That summer feeling',
    cards: MadeForYou,
  },
  {
    heading: 'Trending community playlists',
    cards: TrendingPlaylists,
  },
]
