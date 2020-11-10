import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Jobs = () => {
  const [jobIndex, setJobIndex] = React.useState(0)
  const query = graphql`
    {
      allStrapiJobs(sort: { fields: id, order: DESC }) {
        nodes {
          strapiId
          company
          date
          position
          description {
            name
            id
          }
        }
      }
    }
  `
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(query)
  console.log(jobs, "check")
  const { company, position, date, description } = jobs[jobIndex]
  console.log(company, position, date, description, "check2")
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((elem, index) => {
            return (
              <button
                key={elem.strapiId}
                className={`job-btn ${jobIndex === index ? "active-btn" : ""}`}
                onClick={() => setJobIndex(index)}
              >
                {elem.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map(elem => {
            return (
              <div key={elem.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{elem.name}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Jobs
