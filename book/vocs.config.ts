import { defineConfig } from "vocs";

export default defineConfig({
  socials: [
    {
      icon: "github",
      link: "https://github.com/realm-of-ra/mancala",
    },
    {
      icon: "x",
      link: "https://twitter.com/realm_of_ra",
    },
  ],
  title: "Mancala",
  sidebar: [
    {
      text: "Overview",
      link: "/getting-started",
    },
    {
      text: "Game Play",
      link: "/game-play",
    },
  ],
});
