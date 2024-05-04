// links.ts
export interface NavLink {
  route: string;
  label: string;
}

export const sidebarLinks: NavLink[] = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/blogs",
    label: "Blogs",
  },
  {
    route: "/Projects",
    label: "Projects",
  },
  {
    route: "/resume",
    label: "Resume",
  },
];


