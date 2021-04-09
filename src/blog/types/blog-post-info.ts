// TODO: Need to reconsider the Blog interface, as it's almost identical
//   to the preview type.

export interface BlogPostInfo {
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    date: string
    title: string
  }
}
