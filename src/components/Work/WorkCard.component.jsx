import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Image from "gatsby-image"
import styles from "../../css/work-card.module.css"

const WorkCard = ({ work }) => {
  const { slug, title, image, published } = work

  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} className={styles.img} alt="single work" />
        <AniLink fade className={styles.link} to={`/work/${slug}`}>
          read more
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default WorkCard
