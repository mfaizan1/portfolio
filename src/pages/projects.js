import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="All projects" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  query MyQuery {
    allStrapiProjects {
      nodes {
        title
        url
        description
        id
        featured
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
export default ProjectsPage
