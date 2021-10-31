export interface BlogPostPreview {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    tags: string[]
    date: string
    formattedDate: string
  }
  excerpt: string
  timeToRead: number
}
