import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import WorkCard from "./WorkCard.component"
import StyledTitle from "../StyledTitle"
import styles from "../../css/work.module.css"

const getWork = graphql`
  query {
    work: allContentfulWork(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do YYYY")
          createdAt(formatString: "LLLL")
          title
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const WorkList = () => {
  const { work } = useStaticQuery(getWork)

  return (
    <section className={styles.blog}>
      <StyledTitle title="my" subtitle="work" />
      <div className={styles.center}>
        {work.edges.map(({ node }) => {
          return <WorkCard key={node.id} work={node} />
        })}
      </div>
    </section>
  )
}

export default WorkList
