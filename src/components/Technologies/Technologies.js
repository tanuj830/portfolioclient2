import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { BiBitcoin } from 'react-icons/bi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>We use technology to accomplish various tasks in our daily lives, in brief; we can describe technology as products and processes used to simplify our daily lives. We use technology to extend our abilities, making people the most crucial part of any technological system. Technology is also an application of science used to solve problems.</SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>Experience with React.js, Bootstrap, Styled Components</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>Experience with Node.js and Databases(MongoDB, SQL)</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BiBitcoin size='3rem' />
        <ListContainer>
        <ListTitle>Blockchain</ListTitle>
        <ListParagraph>Learning Blockchain using Solidity, Metamask, Ethereum</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
