import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import SectionWhoWeAre from '../components/section-who-we-are'
import SectionOurWork from '../components/section-our-work'
import SectionOurDirectors from '../components/section-our-directors'
import SectionOurFacilities from '../components/section-our-facilities'
import SectionWorkWithUs from '../components/section-work-with-us'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      showreel
      keywords
      description
    }
  }
`

const IndexPage = props => {
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

      [hero video - {site.showreel}]
      <hr />
      <SectionWhoWeAre />
      <SectionOurWork />
      <SectionOurDirectors />
      <SectionOurFacilities />
      <SectionWorkWithUs />
    </Layout>
  )
}

export default IndexPage
