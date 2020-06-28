import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Article from '../components/article'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ArticleTemplateQuery($id: String!) {
    article: sanityArticle(id: {eq: $id}) {
      id
      publishedAt
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
    }
  }
`

const ArticleTemplate = props => {
  const {data, errors} = props
  const article = data && data.article
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {article && <SEO title={article.name || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {article && <Article {...article} />}
    </Layout>
  )
}

export default ArticleTemplate
