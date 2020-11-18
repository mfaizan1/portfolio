import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in touch</h3>
          <form action="https://formspree.io/f/meqpzrnj" method="POST">
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                name="name"
              />
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                name="_replyto"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="form-control"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
