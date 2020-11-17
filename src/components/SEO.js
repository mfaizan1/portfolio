import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
const query = graphql`
  {
    site {
      siteMetadata {
        author
        image
        siteDescription: description
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`
const SEO = ({ description, title }) => {
  const {
    site: {
      siteMetadata: {
        siteDescription,
        siteTitle,
        siteUrl,
        image,
        twitterUsername,
        author,
      },
    },
  } = useStaticQuery(query)
  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: "en" }}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_iamge" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
