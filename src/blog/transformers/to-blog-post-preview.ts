import {
  MarkdownRemarkFields,
  MarkdownRemarkFrontmatter,
  Maybe,
} from "../../../graphql-types"
import { assertDefined } from "../../assertions"
import { BlogPostPreview } from "../types/blog-post-preview"

interface BlogPostFromNode {
  fields?: Maybe<Pick<MarkdownRemarkFields, "slug">>
  frontmatter?: Maybe<
    Pick<MarkdownRemarkFrontmatter, "title" | "tags" | "date" | "formattedDate">
  >
  excerpt?: Maybe<string>
  timeToRead?: Maybe<number>
}

/**
 * Transforms the GraphQL query result into usable piece of data. Ensures the
 * values are there. If not, it's considered a critical failure and will break
 * the build.
 *
 * @param fromNode The query result's node.
 */
export const toBlogPostPreview = (
  fromNode: BlogPostFromNode
): BlogPostPreview => {
  assertDefined(fromNode.fields)
  assertDefined(fromNode.fields.slug)
  assertDefined(fromNode.frontmatter)
  assertDefined(fromNode.frontmatter.title)
  assertDefined(fromNode.frontmatter.tags)
  assertDefined(fromNode.frontmatter.date)
  assertDefined(fromNode.frontmatter.formattedDate)
  assertDefined(fromNode.excerpt)
  return {
    fields: {
      slug: fromNode.fields.slug,
    },
    frontmatter: {
      title: fromNode.frontmatter.title,
      tags: (fromNode.frontmatter.tags as string[]) ?? [],
      date: fromNode.frontmatter.date as string,
      formattedDate: fromNode.frontmatter.formattedDate as string,
    },
    excerpt: (fromNode.excerpt as string) ?? "",
    timeToRead: (fromNode.timeToRead as number) ?? 0,
  }
}
