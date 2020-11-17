import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const About = ({ data }) => {
  const {
    allStrapiAbout: {
      nodes: {
        0: { title, summary, skills, image },
      },
    },
  } = data
  return (
    <Layout>
      <SEO title="About" description="This is about page." />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{summary}</p>
            <div className="about-stack">
              {skills.map(elem => (
                <span key={elem.id}>{elem.title}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        summary
        skills {
          id
          title
        }
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
export default About
