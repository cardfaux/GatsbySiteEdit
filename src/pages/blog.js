import React from "react"

import BlogList from "../components/Blog/BlogList.component"
import Layout from "../components/Layout.component"
import SEO from '../components/SEO.component'

export default () => {
  return (
    <Layout>
      <SEO title="Blog Page" description="Blog Page Where I Post How To Blogs About Website Developent and Information about JamesHagood Design and Development" />
      <BlogList />
    </Layout>
  )
}
