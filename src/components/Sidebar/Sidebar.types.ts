export interface SidebarItem {
  label: string
  destination: string
}

export interface SidebarFormat {
  items: SidebarItem[]
  heading?: string
}
