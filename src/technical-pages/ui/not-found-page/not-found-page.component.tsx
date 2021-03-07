import React, { FunctionComponent } from "react"
import { SEO } from "../../../seo"
import { NotFoundPageContent } from "../not-found-page-content/not-found-page-content.component"

export const NotFoundPage: FunctionComponent = () => (
  <div>
    <SEO title="404: Not Found" />
    <NotFoundPageContent />
  </div>
)
