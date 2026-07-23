import type { FileRouteTypes } from '../../routeTree.gen'

/** Every path TanStack Router knows about, generated from the routes folder. */
export type RoutePath = FileRouteTypes['to']

export interface SidebarLink
{
    linkText: string,
    destination: RoutePath,
}
