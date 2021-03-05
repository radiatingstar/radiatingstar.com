import { generateMeta } from "./generate-meta"

const basicMetaProperties = {
  description: "Bloody Horror",
  author: "Mister X",
  title: "Resident Evil",
}

describe("Meta properties generator", () => {
  describe("when passing basic properties", () => {
    it("generates the description meta info", () => {
      expect(generateMeta(basicMetaProperties)).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: "description",
            content: basicMetaProperties.description,
          }),
        ])
      )
    })
    it("generates the og:title meta property", () => {
      expect(generateMeta(basicMetaProperties)).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            property: "og:title",
            content: basicMetaProperties.title,
          }),
        ])
      )
    })
    it("generates the og:type meta property", () => {
      expect(generateMeta(basicMetaProperties)).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            property: "og:type",
            content: "website",
          }),
        ])
      )
    })
    it("generates the og:description meta property", () => {
      expect(generateMeta(basicMetaProperties)).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            property: "og:description",
            content: basicMetaProperties.description,
          }),
        ])
      )
    })
    it("generates the twitter:card meta info", () => {
      expect(generateMeta(basicMetaProperties)).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: "twitter:card",
            content: "summary",
          }),
        ])
      )
    })
    it("generates the twitter:creator meta info", () => {
      expect(generateMeta(basicMetaProperties)).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: "twitter:creator",
            content: basicMetaProperties.author,
          }),
        ])
      )
    })
    it("generates the twitter:description meta property", () => {
      expect(generateMeta(basicMetaProperties)).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: "twitter:description",
            content: basicMetaProperties.description,
          }),
        ])
      )
    })
    it("doesn't generate any keywords", () => {
      expect(generateMeta(basicMetaProperties)).not.toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: "keywords",
          }),
        ])
      )
    })
  })
  describe("when passing keywords", () => {
    it("generates the keywords list meta property", () => {
      expect(
        generateMeta({ ...basicMetaProperties, keywords: ["zombies", "guns"] })
      ).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: "keywords",
            content: "zombies, guns",
          }),
        ])
      )
    })
  })
  describe("when passing additional properties", () => {
    it("appends them to the result", () => {
      expect(
        generateMeta({
          ...basicMetaProperties,
          otherMeta: [
            { name: "Meta #1", content: "#1 content" },
            { property: "Meta #2", content: "#2 content" },
          ],
        })
      ).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: "Meta #1",
            content: "#1 content",
          }),
          expect.objectContaining({
            property: "Meta #2",
            content: "#2 content",
          }),
        ])
      )
    })
  })
})
