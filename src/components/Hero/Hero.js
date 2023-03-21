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
      Tanuj Bhatt is a skilled web developer and blockchain enthusiast with a passion for innovative technology. With extensive experience in designing and developing websites and blockchain applications.
      </SectionText>
      <SectionText>
      Stack  | ReactJS NextJS NodeJS ExpressJS MongoDB
      </SectionText>
      <Button onClick={()=>window.location = "/blog"}>Read Blogs</Button>
    </LeftSection>
  </Section>
);

export default Hero;