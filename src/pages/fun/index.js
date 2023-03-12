import React from 'react'
import Header from '../../components/Header/Header'
import {Box, Boxes, BoxNum, BoxText} from '../../components/Acomplishments/AcomplishmentsStyles'
import { Section, SectionTitle } from '../../styles/GlobalComponents'
import {FunActivites} from '../../constants/constants'
import {FiExternalLink} from 'react-icons/fi'
import Link from 'next/link'

const index = () => {
  return (
    <>
    <Header />

    <Section>
        <SectionTitle>Some Fun Stuff To Explore</SectionTitle>
        <div className='grid md:grid-cols-3 gap-5 mt-5 grid-cols-1'>
    {
        FunActivites.map(fun=>(   
            <div className='bg-[#212D45] p-6 rounded-lg'>
              <h2 className=' text-5xl'>{fun.title}
              <Link href={"/"+ fun.href}><FiExternalLink className='cursor-pointer' /></Link>
              </h2>
              <BoxText className='mt-6'>{fun.description}</BoxText>
            </div>
      ))
    }
    </div>
    </Section>
    </>
  )
}

export default index