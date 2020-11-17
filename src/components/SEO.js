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
    </Helmet>
  )
}

export default SEO
