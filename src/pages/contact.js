import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout.component"
import StyledHero from "../components/StyledHero.component"
import Contact from "../components/Contact/Contact.component"
import SEO from '../components/SEO.component'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact Me" description="Send Me A Message via E-Mail for Any Quotes or Questions about Your Next Project" />
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
