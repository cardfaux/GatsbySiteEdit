import React from "react"

import Layout from "../components/Layout.component"
import About from "../components/About/About.component"
import SEO from '../components/SEO.component'

export default () => {
  return (
    <Layout>
      <SEO title="About Me" description="JamesHagood Design and Development Uses Modern JavaScript Tools To Deliver You Optimized Web Applications" />
      <About />
    </Layout>
  )
}
