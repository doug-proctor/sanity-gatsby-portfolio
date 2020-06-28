// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import article from './documents/article'
import project from './documents/project'
import director from './documents/director'
import siteSettings from './documents/siteSettings'

// Object types
import figure from './objects/figure'
import bioPortableText from './objects/bioPortableText'
import simplePortableText from './objects/simplePortableText'
import projectPortableText from './objects/projectPortableText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    figure,
    bioPortableText,
    simplePortableText,
    projectPortableText,

    // The following are document types which will appear
    // in the studio.
    article,
    project,
    director,
    siteSettings
  ])
})
