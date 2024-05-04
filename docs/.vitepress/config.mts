import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Awesome React",
  description: "A collection of awesome React resources",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Introduction",
        collapsed: false,
        items: [
          { text: "Getting Started", link: "/introduction/getting-started" },
          {
            text: "Table of Contents",
            link: "/introduction/table-of-contents",
          },
        ],
      },
      {
        text: "UI Components",
        collapsed: false,
        items: [
          {
            text: "Editable data grid",
            link: "/ui-components/editable-data-grid",
          },
          {
            text: "Table",
            link: "/ui-components/table",
          },
          {
            text: "Infinite Scroll",
            link: "/ui-components/infinite-scroll",
          },
          {
            text: "Overlay",
            link: "/ui-components/overlay",
          },
          {
            text: "Notification",
            link: "/ui-components/notification",
          },
          {
            text: "Tooltip",
            link: "/ui-components/tooltip",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
