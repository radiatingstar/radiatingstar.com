import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft"
import { Link, PageProps } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { BlogIndexQuery } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { CoreLayout, PageTitle, WithLayout } from "../../../backbone"
import { SEO } from "../../../seo"
import { BlogPostInfo } from "../../types/blog-post-info"
import { PostsList } from "../posts-list/posts-list.component"

type Properties = WithLayout<Pick<PageProps<BlogIndexQuery>, "data">>

export const BlogTagPage: FunctionComponent<Properties> = ({
  data: { taggedPosts },
  layout: Layout = CoreLayout,
  pageContext: { tag },
}) => {
  const posts = taggedPosts.edges.map(({ node }) => {
    assertDefined(node.frontmatter)
    assertDefined(node.fields)
    assertDefined(node.excerpt)
    return node as BlogPostInfo
  })
  return (
    <Layout>
      <SEO
        title="All posts"
        description="Read and learn about programming, web development, React, CSS and other great tools."
      />
      <Header>
        <TagTitle>#{tag}</TagTitle>
        <TagDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque
          eum hic neque soluta! Accusantium, dignissimos eos facere iusto
          mollitia nemo nihil optio quas quasi? Dolore dolorem ipsam laboriosam
          sunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          beatae blanditiis, commodi corporis doloribus dolorum eos explicabo
          harum illo inventore itaque laboriosam libero recusandae repellat, sed
          sit soluta veniam voluptas!
        </TagDescription>
        <nav>
          <NavigationLink to="/blog">
            <FaArrowLeft />
            All posts
          </NavigationLink>
        </nav>
      </Header>
      <SectionTitle>Posts</SectionTitle>
      <List posts={posts} />
    </Layout>
  )
}

const TagTitle = styled(PageTitle)`
  line-height: 1;
`

const SectionTitle = styled.h2`
  margin-bottom: 2rem;
`

const List = styled(PostsList)``

const Header = styled.header`
  margin-block-end: 4rem;
  margin-block-start: 2rem;
`

const TagDescription = styled.p`
  font-size: 1.2rem;
  line-height: calc(1.4em + 0.2vw);
  margin-block: 2rem;
`

const NavigationLink = styled(Link)`
  display: inline-flex;
  padding: 0.5rem 1rem;
  background: var(--button-gradient);
  border-radius: 100px;
  color: var(--font-color);
  font-weight: bold;
  gap: 0.75rem;
  line-height: 1;
  place-items: center;
  text-decoration: none;
  transition: transform 150ms;

  svg {
    transition: transform 250ms;
  }

  &:hover {
    svg {
      transform: translateX(-5px);
    }
  }

  &:active {
    transform: scale(0.95);
  }
`
