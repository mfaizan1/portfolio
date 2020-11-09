import React from "react"
import {
  SiLinkedin,
  SiFacebook,
  SiTwitter,
  SiFiverr,
  SiUpwork,
} from "react-icons/Si"

const data = [
  {
    id: 3,
    icon: <SiFacebook className="social-icon"></SiFacebook>,
    url: "https://web.facebook.com/mfaizanulhaq1",
  },
  {
    id: 4,
    icon: <SiLinkedin className="social-icon"></SiLinkedin>,
    url: "https://www.linkedin.com/in/muhammad-faizan-ul-haq-83ba37111/",
  },
  {
    id: 5,
    icon: <SiTwitter className="social-icon"></SiTwitter>,
    url: "https://twitter.com/mfaziulhaq",
  },
  {
    id: 1,
    icon: <SiFiverr className="social-icon" />,
    url: "https://www.fiverr.com/mfaizan1",
  },
  {
    id: 2,
    icon: <SiUpwork className="social-icon" />,
    url: "https://www.upwork.com/freelancers/~01ab30277a5f399b08",
  },
]
const links = data.map(link => {
  console.log(link, "check")
  return (
    <li key={link.id}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
