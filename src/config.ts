import Authors from "./collections/Authors";
import Posts from "./collections/Posts";
import Settings from "./globals/Settings";
import type { Config } from "./types";

export default {
  github: {
    owner: "NardiniA",
    repo: "markdown-editor",
    access_token: process.env.GITHUB_ACCESS_TOKEN as string,
  },
  navigation: {
    links: [
      {
        label: "Dashboard",
        href: "/",
        type: "link",
      },
      {
        label: "Collections",
        links: [
          {
            label: "Posts",
            href: "/collections/posts",
            description: "Blog posts for the blog section of the frontend website",
          },
          {
            label: "Authors",
            href: "/collections/authors",
            description: "Collection of authors to assign to blog posts in the posts collection.",
          },
        ],
        type: "dropdown",
      },
      {
        label: "Globals",
        links: [
          {
            label: "Settings",
            href: "/settings",
            description: "All the websites settings are stored here for ease of use.",
          },
        ],
        type: "dropdown",
      },
      {
        label: "Help",
        href: "/help",
        type: "link",
      },
    ],
  },
  collections: [Posts, Authors],
  globals: [Settings],
} satisfies Config;
