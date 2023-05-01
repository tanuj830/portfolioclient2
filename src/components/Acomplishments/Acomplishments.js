import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import Link from 'next/link'
const data = [
  { number: 10, text: 'Open Source Cont.'},
  { number: 15, text: 'Contests & Hackathons', },
  { number: 10, text: 'Projects', },
  { number: 100, text: 'Github Stars', }
];

const Acomplishments = () => (
  <section id='accomplishments' class="container text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-10">
    <div className='flex items-center justify-center'>
      <h1 class="fontXl">Accomplishments</h1>
      </div>
    {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
    </div>
    <div class="flex flex-wrap -m-12 text-center">
    {
      data.map(a=>(
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <h2 class="title-font font-medium text-5xl text-gray-900">{a.number}+</h2>
          <p class="leading-relaxed">{a.text}</p>
        </div>
      </div>
      ))
    }
    </div>
  </div>
</section>
);

export default Acomplishments;
