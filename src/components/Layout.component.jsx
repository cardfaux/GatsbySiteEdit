import React from "react"

import Navbar from "./Navbar.component"
import Footer from "./Footer.component"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
