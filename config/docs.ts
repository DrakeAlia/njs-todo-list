import { MainNavItem, SidebarNavItem } from "../types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

// This is the configuration for the documentation site for the main navigation and sidebar navigation.
export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "GitHub",
      href: "http://www.github.com/DrakeAlia",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/drake___alia",
      external: true,
    },
  ],
  sidebarNav: [],
};
