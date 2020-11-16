import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

const ComponentName = ({ data }) => {
  const {
    blog: { content },
  } = data
  return (
    <section className="blog-template">
      <div className="section-center">
        <article className="blog-content">
          <ReactMarkdown source={content}></ReactMarkdown>
        </article>
        <Link to="/blog" className="btn center-btn">
          Back to blogs
        </Link>
      </div>
    </section>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
    }
  }
`

export default ComponentName
