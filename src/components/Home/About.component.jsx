import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import StyledTitle from "../StyledTitle"
// import img from "../../images/js.jpg"
import styles from "../../css/about.module.css"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "js.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <StyledTitle title="about" subtitle="me" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="javascript" /> */}
            <Img fluid={aboutImage.childImageSharp.fluid} alt="javascript" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>JavaScript Web Development</h4>
          <p>
            Using JavaScript for Web Development Offers Many Advantages and
            Optimizations For Your Projects! Using A JavaScript Framework or
            Library on the Frontend for Building The User Interface of Your
            Application or Web Site, can Give it The Ability To Perform More
            Like A Mobile Application with Much Faster, Almost Instant Page
            Renders. Providing A Much Better User Experience.....
          </p>
          <AniLink fade to="/about" className="btn-primary">
            read more
          </AniLink>
        </article>
      </div>
    </section>
  )
}

export default About
