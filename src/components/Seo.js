import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery , graphql } from 'gatsby'

export default function Seo({ description, keywords, title, image, url, author }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaAuthor = author || data.site.siteMetadata.author
        const metaUrl = url || data.site.siteMetadata.url
        const metaKeywords = keywords || ['andrés fuenzalida', 'andrés fuenzalida chile', 'andres fuenzalida', 'desarrollador web', 'programación', 'frontend developer', 'backend developer', 'fullstack developer']
        return (
          <Helmet
            title={`Andrés Fuenzalida${title ? ` — ${title}` : ''}`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                property: `og:title`,
                content: metaTitle
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                property: `og:url`,
                content: metaUrl
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`
              },
              {
                name: `twitter:creator`,
                content: metaAuthor
              },
              {
                name: `twitter:title`,
                content: metaTitle
              },
              {
                name: `twitter:description`,
                content: metaDescription
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0 ? {
                name: `keywords`,
                content: metaKeywords.join(`, `)
              } : []
            )}
          />
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
  }
`