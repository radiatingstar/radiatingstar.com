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

  li ::marker {
    color: var(--supplementary-attention-color);
  }
`

const ToCLink = styled.a`
  background: var(--font-color);
  -webkit-background-clip: text;
  color: inherit;
  padding-block: 5px;
  text-decoration: none;
  -webkit-text-fill-color: transparent;

  &:hover {
    background: var(--text-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Bar = styled.div`
  position: absolute;
  left: -20px;
  width: 2px;
  background: var(--line-gradient);
  transition: height 250ms;
  will-change: height;
`
