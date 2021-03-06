import { Link } from "gatsby"
import React, { FunctionComponent } from "react"

export const NotFoundPageContent: FunctionComponent = () => {
  return (
    <>
      <h1>There are so many starts in the universe!</h1>
      <p>No wonder we were not able to find this one.</p>
      <Link to={"/"}>Go back</Link>
    </>
  )
}
