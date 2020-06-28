// import MdStar from 'react-icons/lib/md/star'
import {format} from 'date-fns'

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  // icon: MdStar,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'simplePortableText'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'projectPortableText'
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, media}) {
      return {
        title,
        media,
        subtitle: publishedAt ? format(publishedAt, 'D MMMM YYYY') : 'No publish date'
      }
    }
  }
}
