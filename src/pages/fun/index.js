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

    <Section>
        <h2 className='fontXl text-center'>Some Fun Stuff To Explore</h2>
        <div className='grid md:grid-cols-2 gap-5 mt-5 grid-cols-1'>
    {
        FunActivites.map(fun=>(   
              <Link  href={"/"+ fun.href}>
            <div className='bg-slate-200 cursor-pointer px-6 py-20 rounded-2xl text-black'>
              <h2 className=' text-4xl font-bold'>{fun.title}
              {/* <FiExternalLink className='cursor-pointer' /> */}
              </h2>
              <h6 className='mt-6'>{fun.description}</h6>
            </div>
              </Link>
      ))
    }
    </div>
    </Section>
    </>
  )
}

export default index