import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Open Source Projects'},
  { number: 10, text: 'Contests & Hackathons', },
  { number: 15, text: 'Projects', },
  { number: 50, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
  <div style={{marginTop:14}}>
  <SectionTitle>Acomplishments</SectionTitle>
  <Boxes>
    {
      data.map(accomp=>(
        <Box>
          <BoxNum>{accomp.number}+</BoxNum>
          <BoxText>{accomp.text}</BoxText>
        </Box>
      ))
    }
  </Boxes>
  </div>
</Section>
);

export default Acomplishments;
