import React from 'react';
import { Section, Container } from '@components/global';
import TECH from '../../constants/techConst'
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Tech = () => (
  <StaticQuery
  query={graphql`
    query {
      tech_left: file(
        sourceInstanceName: { eq: "art" }
        name: { eq: "tech-L" }
      ) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }

      tech_right: file(
        sourceInstanceName: { eq: "art" }
        name: { eq: "tech-R" }
      ) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `}
render={data => (
  <Section id="tech" accent>
  <Container>
    <BigBox>
      <LittleBox side='left'>
          <h2>Tech</h2>
          <p>{TECH.primaryDesc}:</p>
          <ul>
            {TECH.primary.map(item => (
              <li>{item}</li>
            ))}
          </ul>
      </LittleBox>
      <Art side='right'>
        <Img fluid={data.tech_right.childImageSharp.fluid}/>
      </Art>
      </BigBox><BigBox>
      <Art  side='left'>
          <Img fluid={data.tech_left.childImageSharp.fluid}/>
      </Art>
      <LittleBox side='right'>
        <p>{TECH.otherDesc}:</p>
        <ul>
          {TECH.other.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </LittleBox>
    </BigBox>

  </Container>
  </Section>
)}
/>
);

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 200px;
  margin-${props => props.side}: -35px;
  ${props =>
    props.side==='right' &&
    `
    margin-left: -250px;
    margin-top: 15px;
    
  `}
`;

const BigBox = styled.div`
  margin: 20px 0;
  display: flex;`;

const LittleBox = styled.div`
margin: 0;
display: block;
text-align: left;
align-items: center;
justify-items: center;
width: 400px;
h1 {
} 

${props =>
  props.side==='right' &&
  `
  padding-left: 10px;
  min-width: 213px;
`}
${props =>
  props.side==='left' &&
  `
  width: 700px;
`}

`;

export default Tech;
