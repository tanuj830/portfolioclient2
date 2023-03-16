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
      Tanuj Bhatt is a skilled web developer and blockchain enthusiast with a passion for innovative technology. With extensive experience in designing and developing websites and blockchain applications. His expertise in web development includes a wide range of programming languages, such as HTML, CSS, JavaScript(ReactJS, NextJS, NodeJS, Web3JS, NodeJS, ExpressJS) & MongoDB etc. Additionally, his understanding of blockchain technology has enabled him to create decentralized applications that are secure, transparent, and efficient. My commitment to staying up-to-date with the latest advancements in the industry has made him a valuable asset to any team he works with. With a strong work ethic and a dedication to delivering high-quality results, Tanuj is eager to take on new challenges and contribute to the success of his clients and colleagues.
      </SectionText>
      <Button onClick={()=>window.location = "/blog"}>Read Blogs</Button>
    </LeftSection>
  </Section>
);

export default Hero;