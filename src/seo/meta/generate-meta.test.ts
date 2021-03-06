import { generateMeta } from "./generate-meta"

const basicMetaProperties = {
  description: "Bloody Horror",
  author: "Mister X",
  title: "Resident Evil",
}

describe("Meta properties generator", () => {
  describe("when passing basic properties", () => {
    it("generates the description meta info", () => {
      expect(generateMeta(basicMetaProperties)).arrayToContainObject({
        name: "description",
        content: basicMetaProperties.description,
      })
    })
    it("generates the og:title meta property", () => {
      expect(generateMeta(basicMetaProperties)).arrayToContainObject({
        property: "og:title",
        content: basicMetaProperties.title,
      })
    })
    it("generates the og:type meta property", () => {
      expect(generateMeta(basicMetaProperties)).arrayToContainObject({
        property: "og:type",
        content: "website",
      })
    })
    it("generates the og:description meta property", () => {
      expect(generateMeta(basicMetaProperties)).arrayToContainObject({
        property: "og:description",
        content: basicMetaProperties.description,
      })
    })
    it("generates the twitter:card meta info", () => {
      expect(generateMeta(basicMetaProperties)).arrayToContainObject({
        name: "twitter:card",
        content: "summary",
      })
    })
    it("generates the twitter:creator meta info", () => {
      expect(generateMeta(basicMetaProperties)).arrayToContainObject({
        name: "twitter:creator",
        content: basicMetaProperties.author,
      })
    })
    it("generates the twitter:description meta property", () => {
      expect(generateMeta(basicMetaProperties)).arrayToContainObject({
        name: "twitter:description",
        content: basicMetaProperties.description,
      })
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
