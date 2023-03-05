import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hey, <br/> I'm Tanuj Bhatt
        {/* Welcome To <br />
        My Personal Portfolio */}
      </SectionTitle>
      <SectionText>
      Coding is also important for students because it helps to increase confidence. Because coding empowers students with applicable skills such as creativity, problem-solving and persistence, it also empowers them to more confidently face a variety of challenges and opportunities.
      </SectionText>
      <Button onClick={()=>window.location = "/blog"}>Read Blogs</Button>
    </LeftSection>
  </Section>
);

export default Hero;