import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ open, setOpen }) => {
  return (
    <aside className={`sidebar ${open ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={() => setOpen(false)}>
        <FaTimes />
      </button>
      <div className={`${open ? "side-container" : ""}`}>
        <Links styleClass={`${open ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${open ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  )
}

export default Sidebar
