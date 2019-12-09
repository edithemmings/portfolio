import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as AirbnbLogo } from '@images/logos/airbnb.svg';
import { ReactComponent as AppleMusicLogo } from '@images/logos/apple-music.svg';
import { ReactComponent as CokeLogo } from '@images/logos/coca-cola.svg';
import { ReactComponent as NodeLogo } from '@images/logos/nodejs.svg';
import { ReactComponent as NikeLogo } from '@images/logos/nike.svg';
import { ReactComponent as InstagramLogo } from '@images/logos/instagram.svg';

const PROJECTS = [
  {
    title: "Fred Emmings",
    description: "A personal site for my brother, Fred, who happens to be really good at soccer.",
    repo: "",
    site: "https://fredemmings.com/",
    stage: "side project"
  },
  {
    title: "ConOps",
    description: "A volunteer scheduling and management system for 2D Con, a charitable gaming convention.",
    repo: "https://github.com/conops-porta/conops-porta",
    site: "https://conops-porta.herokuapp.com/",
    stage: "client project"
  },
  {
    title: "Open Doors",
    description: "A web app to make it easier to find available emergency housing",
    repo: "https://github.com/edithemmings/open-doors",
    site: "https://open-doors-housing-resource.herokuapp.com/",
    stage: "Prime solo project"
  },
  {
    title: "Movies",
    description: "Listings of popular movies that can be edited by the user. An exercise in redux-sagas.",
    repo: "https://github.com/edithemmings/movie-sagas",
    site: "",
    stage: "Prime project"
  },
  {
    title: "Carbon Foodprint",
    description: "A web app to track the carbon footprint of your food consumption. 1st place at Hack the Gap",
    repo: "https://github.com/edithemmings/Carbon-FoodPrint",
    site: "",
    stage: "Hackathon project"
  },
  {
    title: "Mina",
    description: "A platform to connect new and expecting families with care providers.",
    repo: "",
    site: "https://minafamilies.com/",
    stage: "client project"
  },
  {
    title: "The Wildlife Foundation",
    description: "An informational website for an organization that works to conserve wildlife and indiginous land.",
    repo: "",
    site: "http://www.thewildlifefoundationkenya.org/",
    stage: "client project"
  },
  {
    title: "To-do list",
    description: "Keep track of the things you need to do and check them off as you go.",
    repo: "",
    site: "https://edithemmings.github.io/to-do-list-old/",
    stage: "self-teaching project"
  },
  {
    title: "Rock Paper Scissors",
    description: "Can you beat the computer in a game of Rock, Paper, Scissors?",
    repo: "",
    site: "https://edithemmings.github.io/rock-paper-scissors/#",
    stage: "self-teaching project"
  },
  {
    title: "Rocket Launch",
    description: "Launch our friend into outer space! Will he make it?",
    repo: "",
    site: "https://edithemmings.github.io/js-rocket/rocket.html",
    stage: "self-teaching project"
  }
]


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
            <h1>Projects</h1>
            <LogoGrid>
              {PROJECTS.map(({ title, description, repo, site, stage }) => (
                <div>
                  <h3>{title}</h3>
                  <p>({stage})</p>
                  <p>{description}</p> 
                  {repo ? <ExternalLink key={title} href={ repo }><p>GitHub repo</p></ExternalLink> : ''}
                  {site ? <ExternalLink key={title} href={ site }><p>Live site</p></ExternalLink> : ''}
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
