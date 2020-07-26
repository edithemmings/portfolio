import React from 'react';
import { Section, Container } from '@components/global';
import ABOUT from '../../constants/aboutConst'

const About = () => (
  <Section id="about" accent>
    <Container>
        <h2>About</h2>
        <p>{ABOUT.description}</p>
    </Container>
  </Section>
);

export default About;
