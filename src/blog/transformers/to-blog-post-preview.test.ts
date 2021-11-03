import { toBlogPostPreview } from "./to-blog-post-preview"

describe("Blog Post Preview Transformer", () => {
  describe.each([
    ["frontmatter", { fields: { slug: "/slug" } }],
    ["title", { fields: { slug: "/slug" }, frontmatter: {} }],
    ["fields", { frontmatter: { title: "title" } }],
    ["slug", { fields: {}, frontmatter: { title: "title" } }],
  ])("when provided with no %s", (title, properties) => {
    it("should fail", () => {
      expect(() => toBlogPostPreview(properties)).toThrow()
    })
  })
  describe("when provided with valid values", () => {
    it("should transform node to post preview", () => {
      const actual = toBlogPostPreview({
        fields: { slug: "/slug" },
        frontmatter: {
          title: "title",
          tags: ["tag"],
          date: "2021-07-20T20:00:00.000Z",
          formattedDate: "July 20th, 2021",
        },
        excerpt: "excerpt",
        timeToRead: 10,
      })
      const expectation = {
        fields: {
          slug: "/slug",
        },
        frontmatter: {
          title: "title",
          tags: ["tag"],
          date: "2021-07-20T20:00:00.000Z",
          formattedDate: "July 20th, 2021",
        },
        excerpt: "excerpt",
        timeToRead: 10,
      }
      expect(actual).toStrictEqual(expectation)
    })
  })
})
