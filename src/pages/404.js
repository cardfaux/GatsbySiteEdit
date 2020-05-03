import React from "react"
import Layout from "../components/Layout.component"
import styles from "../css/error.module.css"
import Banner from "../components/Banner.component"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from '../components/SEO.component'

const error = () => {
  return (
    <Layout>
      <SEO title="Error 404" description="404 Page The Page you Requested Dosen't Seem To Exist" />
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink fade to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
