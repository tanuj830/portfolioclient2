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

     <div className='mb-4 flex items-center'>
     <h3>
      Stack    | 
        
      </h3>
           <div className='ml-4 md:ml-10 flex items-center gap-4 md:gap-8'>
           <img className='w-9' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            
            <img className='w-12 bg-white rounded-full border-none shadow-inner' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
          
            <img className='w-24' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
          

            <i className="text-8xl devicon-express-original-wordmark"></i>
                    
            
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
          
          
           </div>
     </div>
      <Button onClick={()=>window.location = "/blog"}>Read Blogs</Button>
    </LeftSection>
  </Section>
);

export default Hero;