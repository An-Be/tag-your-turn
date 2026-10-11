// Everything user-facing that names the tool reads from here.
export const site = {
  name: "TagYourTurn",
  /** Browser tab and search result title: brand first, then the plain-language promise. Under 60 chars. */
  title: "TagYourTurn: Quick and Easy Way to Track Whose Turn It Is",
  /** Search result snippet and link previews. Under 160 chars. */
  description: "TagYourTurn tracks whose turn it is for your nightly games and rituals. One shared link, and no login.",
  tagline: "Tiny tools for keeping a rhythm.",
  author: { name: "Andrea", url: "https://andreaberrocal.com" },
  themeColor: "#ffffff",
  /** Browser UI color in dark mode; matches --color-paper there. */
  themeColorDark: "#0b0b0b",
  /**
   * The landing page is public. Tracker pages stay out of search engines on
   * their own (page metadata + X-Robots-Tag on /t/* in next.config.ts).
   */
  indexable: true,
} as const;
