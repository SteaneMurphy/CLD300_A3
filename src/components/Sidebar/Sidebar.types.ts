// Type definitions for the sidebar links, with paths restricted to routes the router knows about.

import type { FileRouteTypes } from '../../routeTree.gen'

/** Every path TanStack Router knows about, generated from the routes folder.
    Written automatically by the TanStack Router Vite plugin into routeTree.gen.ts
    and regenerated whenever a route file changes. 
**/
export type RoutePath = FileRouteTypes['to']

export interface SidebarLink
{
    linkText: string,
    destination: RoutePath,
}
