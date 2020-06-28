import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import SectionWorkWithUs from '../components/section-work-with-us'

export const query = graphql`
  query WhoPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      keywords
      description
    }
  }
`

const WhoPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site

  if (!site) {
    throw new Error(
      'Missing "Site settings"! Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1>Who we are</h1>
        <p>CMS zone 1</p>
        <p>CMS zone 2</p>
        <div>
          <div>Person 1</div>
          <div>Person 2</div>
          <div>Person 3</div>
        </div>
        <SectionWorkWithUs />
      </Container>
    </Layout>
  )
}

export default WhoPage
