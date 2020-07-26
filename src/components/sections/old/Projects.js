import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import PROJECTS from '../../constants/ProjectsConst'

const UsedBy = (props) => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="projects" accent>
        <StyledContainer>
          <div>
            <h1>Some projects</h1>
            <LogoGrid>
              {PROJECTS.map(({ title, description, repo, site, inProduction }) => (
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p> 
                  {repo && !site ? <ExternalLink key={title} href={ repo }><p>GitHub repo</p></ExternalLink> : ''}
                  {site ? <ExternalLink key={title} href={ site }><p>Live {inProduction ? 'site' : 'demo'}</p></ExternalLink> : ''}
                </div>
              ))}
            </LogoGrid>
          </div>
          {/* <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art> */}
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default UsedBy;
