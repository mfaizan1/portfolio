import React from "react"
import {
  FaCode,
  FaMobileAlt,
  FaMobile,
  FaServer,
  FaRedo,
  FaTools,
} from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I develop custom websites , keeping them unique, functional and modern . Considering the latest technologies like React.js, Gatsby.js, Node.js and more.`,
  },
  {
    id: 2,
    icon: <FaMobile className="service-icon" />,
    title: "App development",
    text: `Have a great idea for a mobile application? or need to make your bussiness more accesible ? I will develop Mobile app using React Native, according to your requirements.`,
  },

  {
    id: 3,
    title: "WEBSITE RESTYLING",
    icon: <FaRedo className="service-icon"></FaRedo>,
    text: `Is your website out of date or need some improvement? I can help you to update it into a modern, user-friendly and responsive website that will convert more visitors into customers and boost your conversion rate.`,
  },
  {
    id: 4,
    title: "RESPONSIVE DESIGN",
    icon: <FaMobileAlt className="service-icon"></FaMobileAlt>,
    text: `A website must be properly viewed on a wide variety of screens. I make sure that your website is always optimally usable on any device, any operating system and any web browser.`,
  },
  {
    id: 5,
    icon: <FaServer className="service-icon" />,
    title: "Backend development",
    text: `Just in case you have you in-house front-end development team for web or mobile app and need to create backend, I am here to help.`,
  },
  {
    id: 6,
    icon: <FaTools className="service-icon" />,
    title: "MAINTENANCE & SUPPORT",
    text: `From building your first website or mobile app to maintaining your existing applications. I provide on-going support and maintenance services to ensure that your digital presence keeps running smoothly. I provide honest advice and the best possible support for you to reach your goals.`,
  },
]
