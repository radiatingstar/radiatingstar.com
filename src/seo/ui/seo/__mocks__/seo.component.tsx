import React, { ComponentProps, VoidFunctionComponent } from "react"
import { SEO as OriginalSEO } from "../seo.component"

export const SEO: VoidFunctionComponent<ComponentProps<typeof OriginalSEO>> = ({
  title,
  description,
}) => {
  return (
    <div>
      <div>[title] {title}</div>
      <div>[description] {description}</div>
    </div>
  )
}
