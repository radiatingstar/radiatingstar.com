import React, { ComponentProps, VoidFunctionComponent } from "react"
import { SEO as OriginalSEO } from "../seo.component"

export const SEO: VoidFunctionComponent<ComponentProps<typeof OriginalSEO>> = ({
  title,
  description,
}) => {
  return (
    <aside>
      <div>[title] {title}</div>
      <div>[description] {description}</div>
    </aside>
  )
}
