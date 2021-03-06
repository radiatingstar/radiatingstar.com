import { Link } from "gatsby"
import React, { FunctionComponent } from "react"
import { SEO } from "../../../seo"

export const NotFoundPage: FunctionComponent = () => (
  <div>
    <SEO title="404: Not Found" />
    <h1>There are so many starts in the universe!</h1>
    <p>No wonder we were not able to find this one.</p>
    <Link to={"/"}>Go back</Link>
  </div>
)
