import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { BiBitcoin } from 'react-icons/bi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import Link from 'next/link';
const Technologies = () =>  (
  <section id="stack" class="container text-gray-600 body-font">
  <div class=" md:px-5 md:py-24 mx-auto">
    <div className='flex items-center justify-center'>
      <h1 class=" fontXl">Technologies</h1>
    </div>
    <div class="flex flex-col text-center w-full mb-8 md:mb-20">
      <p class="lg:w mx-auto leading-relaxed text-justify md:text-justify">We use technology to accomplish various tasks in our daily lives, in brief; we can describe technology as products and processes used to simplify our daily lives. We use technology to extend our abilities, making people the most crucial part of any technological system. Technology is also an application of science used to solve problems.</p>
    </div>
    <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full ">
        <div class="h-full flex items-center bg-slate-100 shadow-md  p-4 rounded-2xl">
          <DiReact size='10rem' />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Front-End</h2>
            <p class="text-gray-500">Experience with React.js, Bootstrap, Styled Components</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full ">
        <div class="h-full flex items-center bg-slate-100 shadow-md  p-4 rounded-2xl">
        <DiFirebase size='10rem' />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Back-End</h2>
            <p class="text-gray-500">Experience with Node.js and Databases(MongoDB, SQL)</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full ">
        <div class="h-full flex items-center bg-slate-100 shadow-md  p-4 rounded-2xl">
        <BiBitcoin size='10rem' />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Blockchain</h2>
            <p class="text-gray-500">Learning Blockchain using Solidity, Metamask, Ethereum</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
);

export default Technologies;

