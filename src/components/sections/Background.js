import React from 'react';
import { Section, Container } from '@components/global';
import BKGD from '../../constants/BackgroundConst'

const Background = () => (
  <Section id="background" accent>
    <Container>
        <h3>Background</h3>

        <h4>{BKGD.p1.header}</h4>
        <p>{BKGD.p1.body}</p>

        <h4>{BKGD.p2.header}</h4>
        <p>{BKGD.p2.body}</p>

        <h4>{BKGD.p3.header}</h4>
        <p>{BKGD.p3.body}</p>
        
    </Container>
  </Section>
);

export default Background;
