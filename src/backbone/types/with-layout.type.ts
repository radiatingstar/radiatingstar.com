import { JSXElementConstructor, PropsWithChildren } from "react"

/**
 * Allow passing a layout component. The type exists mostly for
 * the simplicity: to not have to define this complex type everywhere.
 */
export type WithLayout<Properties> = Properties & {
  layout?: JSXElementConstructor<PropsWithChildren<unknown>>
}
