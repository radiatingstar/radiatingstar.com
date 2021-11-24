import React, {
  FunctionComponent,
  ReactNode,
  useLayoutEffect,
  useState,
} from "react"
import { useWindowScroll } from "react-use"
import styled from "styled-components"
import { MarkdownHeading } from "../../../../graphql-types"

interface Properties {
  articleReference: ReactNode
  headings: MarkdownHeading[] | null
}

/*
Full scroller.
1. Get the current scroll position. That way we will know the start of the counting.
2. Measure the whole article length to define the boundaries.
3. Listen to the scroll event and update the position.
4. Listen to the resize event to make the measurements again.

With additional headers:
1.
 */

export const BlogTableOfContents: FunctionComponent<Properties> = ({
  articleReference,
  headings,
}) => {
  const { y } = useWindowScroll()
  const [articleRect, setArticleRect] = useState<DOMRect>()
  const [windowHeight, setWindowHeight] = useState(0)

  useLayoutEffect(() => {
    setArticleRect(() => articleReference?.current?.getBoundingClientRect())
    setWindowHeight(() => window.innerHeight)
  }, [articleReference, y])

  const progress =
    articleRect && articleRect?.top <= 0
      ? Math.round(
          Math.min(
            100,
            ((articleRect.height - articleRect.bottom) /
              (articleRect.height - windowHeight)) *
              100
          )
        )
      : 0

  return (
    <Container>
      <Bar style={{ height: `${progress}%` }} />
      {headings && (
        <nav>
          <ToCList>
            {headings.map(({ id, value }) => (
              <li key={id}>
                <ToCLink href={`#${id}`}>{value}</ToCLink>
              </li>
            ))}
          </ToCList>
        </nav>
      )}
    </Container>
  )
}

const Container = styled.div`
  position: sticky;
  top: 10px;
  display: flex;
`

const ToCList = styled.ol`
  padding-left: 0;
  line-height: 1.5;
  list-style-position: inside;
  margin-block-end: 0;
  margin-block-start: 0;

  li + li {
    margin-block-start: 0.5rem;
  }
`

const ToCLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--attention-color);
  }
`

const Bar = styled.div`
  position: absolute;
  left: -20px;
  width: 2px;
  background: var(--line-gradient);
`
