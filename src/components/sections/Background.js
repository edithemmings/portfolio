import React from 'react';
import { Section, Container } from '@components/global';
import BKGD from '../../constants/BackgroundConst'
import styled from 'styled-components';

const Background = () => (
  <Section id="background" accent>
    <Container>
        <h2>Background</h2>
        <LittleBox textAlign='left'>
          <h4>{BKGD.p1.header}</h4>
          <p>{BKGD.p1.body}</p>
        </LittleBox>
        <LittleBox textAlign='right'>
          <h4>{BKGD.p2.header}</h4>
          <p>{BKGD.p2.body}</p>
        </LittleBox>
        <LittleBox textAlign='left'>
          <h4>{BKGD.p3.header}</h4>
          <p>{BKGD.p3.body}</p>
        </LittleBox>
    </Container>
  </Section>
);

const LittleBox = styled.div`
  margin: 20px 0;
  text-align: ${props => props.textAlign};
  `;

export default Background;
