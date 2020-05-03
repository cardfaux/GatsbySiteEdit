import React from "react"

import WorkList from "../components/Work/WorkList.component"
import Layout from "../components/Layout.component"
import SEO from '../components/SEO.component'

export default () => {
  return (
    <Layout>
      <SEO title="My Work" description="View Some Of My Latest Work and I review Some Of The Tools I Used To Bring The Ideas To Life" />
      <WorkList />
    </Layout>
  )
}
