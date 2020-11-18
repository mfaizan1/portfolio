import React from "react"
import Image from "gatsby-image"
import { FaShareSquare } from "react-icons/fa"
const Project = ({ description, title, github, url, stack, image, index }) => {
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(elem => (
            <span key={elem.id}>{elem.title}</span>
          ))}
        </div>
        <div>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
