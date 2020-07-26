import React from 'react';
import styled from 'styled-components';
// import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';
import ExternalLink from '@common/ExternalLink';
import { Section, Container } from '@components/global';

const About = () => (
    <Section id="about" accent>
    <Container>
      <Grid>
        <p>I'm Edith Emmings</p>
      </Grid>
      <Grid>
        <p>I'm a software engineer currently working on a small agile 
          team within a large company. I build, enhance, and support 
          modern distributed systems using many differnet tools. Within
          the company, I also organize cross-team activities and participate in
          diversity action. I mentor folks pivoting into a career in technology 
          and I advocate for entry-level engineers. </p>
        <br />
        </Grid>
      <Grid>
        <p>
          <StyledExternalLink href="https://github.com/edithemmings">
            Check out my GitHub &nbsp;&#x2794;
          </StyledExternalLink>
        </p>
        </Grid>
    </Container>
  </Section>
);

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
