import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
//import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout.component';
import StyledTitle from '../components/StyledTitle';
import SEO from '../components/SEO.component';
import styles from '../css/single-work.module.css';

const workTemplate = ({ data }) => {
  const {
    title,
    livePreview,
    githubsrc,
    languages,
    description: { description },
    image,
  } = data.work;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <section className={styles.work}>
        <div className={styles.center}>
          <div className={styles.imgContainer}>
            <div className={styles.title}>{title}</div>
            <Image fluid={image.fluid} className={styles.img} alt={title} />
            <div className={styles.footer}>Languages/Tools: {languages}</div>
          </div>
        </div>
        <div className={styles.description}>
          <StyledTitle title="brief" subtitle="description" />
          <h2>{description}</h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            href={`${livePreview}`}
          >
            live preview
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            href={`${githubsrc}`}
          >
            source code
          </a>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getWork($slug: String!) {
    work: contentfulWork(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do YYYY")
      languages
      githubsrc
      livePreview
      description {
        description
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default workTemplate;
