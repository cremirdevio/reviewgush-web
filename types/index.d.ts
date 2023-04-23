import { IconType } from "react-icons"
import FAIcons from "react-icons/fa"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: IconType
} & (
    | {
      href: string;
      isTitle?: never;
    }
    | {
      href?: never;
      isTitle: true
    }
  )

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

