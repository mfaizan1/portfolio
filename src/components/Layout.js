import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Navbar setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
