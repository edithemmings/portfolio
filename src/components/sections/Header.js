import React from 'react';
import { Section, Container } from '@components/global';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Header = () => (
      <StaticQuery
      query={graphql`
        query {
          garden: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "garden" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      `}
    render={data => (
      <Section id="header">
        <Container>
          <Grid>
            {/* {JSON.stringify(data)} */}
            <Img fluid={data.garden.childImageSharp.fluid}/>
            <h1>I'm Edith Emmings</h1>
            <p>Welcome to my personal site</p>
          </Grid>
        </Container>
      </Section>
    )}
    />
);

const Grid = styled.div`
  display: block;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;
  text-align: center;
  background-image: url(../../images/croods/garden.png)

  h1 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: center;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }
  }
`;


export default Header;
