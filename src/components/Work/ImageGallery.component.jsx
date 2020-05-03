import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import StyledTitle from '../StyledTitle';

const getImages = graphql`
  query Images {
    fluidCannaT: file(relativePath: { eq: "cannat.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluidDevConnect: file(relativePath: { eq: "devconnect.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluidEcommerce: file(relativePath: { eq: "ecommerce.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluidNodeReact: file(relativePath: { eq: "node-react.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluidSmallTown: file(relativePath: { eq: "smallTown.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const ImageGallery = () => {
  const data = useStaticQuery(getImages);

  return (
    <>
      <Wrapper>
        <StyledTitle className="titleclass" title="my" subtitle="work" />
        <section>
          <article>
            <div className="container">
              <h3>CannaT Vape Company</h3>
              <Img fluid={data.fluidCannaT.childImageSharp.fluid} />
            </div>
            <AniLink fade to="/about" className="btn-primary button">
              more info
            </AniLink>
          </article>
          <article>
            <div className="container">
              <h3>Social Network For Developers</h3>
              <Img fluid={data.fluidDevConnect.childImageSharp.fluid} />
            </div>
            <AniLink fade to="/about" className="btn-primary button">
              more info
            </AniLink>
          </article>
          <article>
            <div className="container">
              <h3>An E-Commerce Site</h3>
              <Img fluid={data.fluidEcommerce.childImageSharp.fluid} />
            </div>
            <AniLink fade to="/about" className="btn-primary button">
              more info
            </AniLink>
          </article>
          <article className="large">
            <div className="container">
              <h3>React-Node Blog</h3>
              <Img fluid={data.fluidNodeReact.childImageSharp.fluid} />
            </div>
            <AniLink fade to="/about" className="btn-primary button">
              more info
            </AniLink>
          </article>
          <article className="large">
            <div className="container">
              <h3>Small Town Creations</h3>
              <Img fluid={data.fluidSmallTown.childImageSharp.fluid} />
            </div>
            <AniLink fade to="/about" className="btn-primary button">
              more info
            </AniLink>
          </article>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 98vw;
  margin: 0 auto 10rem auto;
  article {
    border: 2px solid var(--darkGrey);
    padding: 1rem 0;
    margin-bottom: 3rem;
    box-shadow: var(--darkShadow);
  }
  .basic {
    width: 100%;
  }
  .titleclass {
    font-size: 2rem;
    margin: 2rem 0 2.5rem 0;
  }
  .container {
    text-align: center;
    margin: auto;
    width: 97%;
    border: 2px solid var(--primaryColor);
    box-shadow: var(--lightShadow);
  }
  h3 {
    margin-top: 1.25rem;
  }
  article:nth-child(6) {
    margin-bottom: 0rem;
  }
  .button {
    margin-top: 1rem;
    box-shadow: var(--lightShadow);
  }
  @media (min-width: 768px) {
    article {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .button {
      position: absolute;
      opacity: 1;
    }
  }
  @media (min-width: 1200px) {
    section {
      margin: 4rem 4rem 4rem 4rem;
      display: grid;
      grid-template-columns: 30vw auto auto;
      grid-gap: 1rem;
    }
    article {
      width: 30vw;
      height: auto;
      justify-self: stretch;
    }
    article:last-child {
      grid-column-start: 3;
    }
    .large {
      width: 30vw;
      height: 50vh;
    }
    .container {
      height: 100%;
    }
  }
`;

export default ImageGallery;
