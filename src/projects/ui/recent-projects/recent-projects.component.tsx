import React, { VoidFunctionComponent } from "react"
import { List } from "../../../backbone"
import { ProjectPreview } from "../../types/project-preview"
import { RecentProjectItem } from "./elements/recent-project-item/recent-project-item.component"

interface Properties {
  projects: ProjectPreview[]
}

export const RecentProjects: VoidFunctionComponent<Properties> = ({
  projects,
}) => {
  return (
    <List
      items={projects}
      renderItem={(project, { last }) => (
        <RecentProjectItem
          title={project.title}
          link={project.link}
          last={last}
        />
      )}
    />
  )
}
