import React from 'react';
import { Section, Container } from '@components/global';
import TECH from '../../constants/techConst'

const Tech = () => (
  <Section id="tech" accent>tech
  <Container>
      <h3>Tech</h3>

      <p>{TECH.primaryDesc}</p>
      <ul>
        {TECH.primary.map(item => (
          <li>{item}</li>
        ))}
      </ul>

      <p>{TECH.otherDesc}</p>
      <ul>
        {TECH.other.map(item => (
          <li>{item}</li>
        ))}
      </ul>

  </Container>
  </Section>
);

export default Tech;
