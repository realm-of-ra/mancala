import { defineConfig } from 'vocs'

export default defineConfig({
  socials: [
      {
        icon: 'github',
        link: 'https://github.com/realm-of-ra/mancala',
      },
      {
        icon: 'x',
        link: 'https://twitter.com/starknetafrica',
      },
    ],
  title: 'Mancala',
  sidebar: [
    {
      text: 'Overview',
      link: '/getting-started',
    },
    {
      text: 'Game Play',
      link: '/game-play',
    },
  ],
})
