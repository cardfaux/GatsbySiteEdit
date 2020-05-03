import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaReact, FaDigitalOcean, FaComments } from "react-icons/fa"

import styles from "../../css/aboutPage.module.css"

const getFamilyImage = graphql`
  query familyImage {
    familyImage: file(relativePath: { eq: "family.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

function About() {
  const { familyImage } = useStaticQuery(getFamilyImage)

  return (
    <section className={styles.about}>
      <article className={styles.img}>
        <div className={styles.imgContainer}>
          <Img fluid={familyImage.childImageSharp.fluid} alt="javascript" />
        </div>
      </article>
      <article className={styles.headings}>
        <h1>
          I am A FullStack JavaScript Developer. Designing, Developing, and
          Deploying Your Ideas!
        </h1>
      </article>
      <div className={styles.information}>
        <article className={styles.info}>
          <div className={styles.icon}>
            <FaReact />
          </div>
          <h2>What Is React</h2>
          <h4>
            React Is a JavaScript Library of Multiple Other Libraries That Are
            all Used Together To Help Develop User Friendly Applications, That
            Perform At A Very High Level. Creating What Is Called A Single Page
            Application or (SPA). The Idea Behind This Is, When You Initially
            Visit The Site All The Files For That Site Are Sent To You Right
            Then. So Every Page You Visit is Already There, So What You Want to
            See Is Just Essentially Put On The Screen When You Want It To Be.
            Resulting In Page Renders at A Super Sonic Speed. Adding Value To
            Your Site for Prolonged User Visits.
          </h4>
        </article>
        <article className={styles.info}>
          <div className={styles.icon}>
            <FaDigitalOcean />
          </div>
          <h2>What Is Cloud Deployment</h2>
          <h4>
            Cloud Deployment Is A Faster and More Secure Form Of Deploying Your
            Sites To The World Wide Web. It Basically Offers A Server with A
            UNIX (Linux) Based Operating System to Run The Files That Runs Your
            Applications. These Servers Can Be Configured Any Way You Want To
            Configure Them and Can Set Up The DataBase Infrastructure anyway The
            Developer Sees Fit. There Is A lot More Advantages To This Form Of
            Deployment, But It Will Be Hard For Me To Explain Them Well Here In
            This Small Block.
          </h4>
        </article>
        <article className={styles.info}>
          <div className={styles.icon}>
            <FaComments />
          </div>
          <h2>How These Help You</h2>
          <h4>
            I Use Multiple Tools To Make Highly Compatible Cross Platform
            Applications, Optimized For Performance. As Stated Above My Tool Of
            Choice For Building Highly Optimized UIs is React. Still There Is
            Several Sub Branches From There. For Example There Is Gatsbyjs and
            Nextjs. Without Going into Too Much Detail, Gatsbyjs is For Static
            Sites Nextjs Is For Dynamic Sites. For More Dynamic Sites I Use
            Digital Ocean and CloudFlare for Deploying These Sites. Which Saves
            Money On Deployment Costs and Offers A SuperCharged Deliverable
            Application. For More Static Sites I Use Netlify to Deploy These
            Sites, Which Makes it Super Fast To Edit Sites.
          </h4>
        </article>
      </div>
    </section>
  )
}

export default About
