import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "headshot.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data
  return (
    <>
      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div>
              <div className="underline"></div>
              <h1>I am Faizan</h1>
              <h4>Freelance Fullstack Web and Mobile Developer</h4>
              <SocialLinks />
            </div>
          </article>
          <Image fluid={fluid} className=".hero-img" alt="Faizan" />
        </div>
      </header>
    </>
  )
}

export default Hero
