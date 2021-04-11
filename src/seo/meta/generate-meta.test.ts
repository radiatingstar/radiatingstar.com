import { generateMeta } from "./generate-meta"

const basicMetaProperties = {
  description: "Bloody Horror",
  author: "Mister X",
  title: "Resident Evil",
}

describe("Meta properties generator", () => {
  describe("when passing basic properties", () => {
    it.each([
      [
        "generates the description meta info",
        {
          name: "description",
          content: basicMetaProperties.description,
        },
      ],
      [
        "generates the og:title meta property",
        {
          property: "og:title",
          content: basicMetaProperties.title,
        },
      ],
      [
        "generates the og:type meta property",
        {
          property: "og:type",
          content: "website",
        },
      ],
      [
        "generates the og:description meta property",
        {
          property: "og:description",
          content: basicMetaProperties.description,
        },
      ],
      [
        "generates the twitter:card meta info",
        {
          name: "twitter:card",
          content: "summary",
        },
      ],
      [
        "generates the twitter:creator meta info",
        {
          name: "twitter:creator",
          content: basicMetaProperties.author,
        },
      ],
      [
        "generates the twitter:description meta property",
        {
          name: "twitter:description",
          content: basicMetaProperties.description,
        },
      ],
    ])("%s", (_, content) => {
      expect(generateMeta(basicMetaProperties)).arrayToContainObject(content)
    })
    it("doesn't generate any keywords", () => {
      expect(generateMeta(basicMetaProperties)).not.arrayToContainObject({
        name: "keywords",
      })
    })
  })
  describe("when passing keywords", () => {
    it("generates the keywords list meta property", () => {
      expect(
        generateMeta({ ...basicMetaProperties, keywords: ["zombies", "guns"] })
      ).arrayToContainObject({
        name: "keywords",
        content: "zombies, guns",
      })
    })
  })
  describe("when passing additional properties", () => {
    const result = generateMeta({
      ...basicMetaProperties,
      otherMeta: [
        { name: "Meta #1", content: "#1 content" },
        { property: "Meta #2", content: "#2 content" },
      ],
    })
    it("appends the meta info to the result", () => {
      expect(result).arrayToContainObject({
        name: "Meta #1",
        content: "#1 content",
      })
    })
    it("appends the meta property to the result", () => {
      expect(result).arrayToContainObject({
        property: "Meta #2",
        content: "#2 content",
      })
    })
  })
})
