import React, { FunctionComponent } from "react"
import { Stylable } from "../../../../backbone"

export const TimeToRead: FunctionComponent<Stylable<{ time: number }>> = ({
  time,
  className,
}) => {
  return (
    <span className={className}>
      {time} {time > 1 ? "minutes to read" : "minute to read"}
    </span>
  )
}
