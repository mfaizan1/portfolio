import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <Blogs blogs={blogs} title="Articles" />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        category
        slug
        desc
        date(formatString: "MMMM Do, YYYY")
        content
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default Blog
