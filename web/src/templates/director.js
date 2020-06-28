import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Director from '../components/director'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query DirectorTemplateQuery($id: String!) {
    director: sanityDirector(id: {eq: $id}) {
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

const DirectorTemplate = props => {
  const {data, errors} = props
  const director = data && data.director
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {director && <SEO title={director.name || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {director && <Director {...director} />}
    </Layout>
  )
}

export default DirectorTemplate
