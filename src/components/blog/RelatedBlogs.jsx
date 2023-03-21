import React from 'react'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from '../Acomplishments/AcomplishmentsStyles';
import { useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const RelatedBlogs = (props) => {

    const [relatedBlogs, setRelatedBlogs] = React.useState([])

useEffect(() => {
    axios.get(`https://portfolio-38ir.onrender.com/blog/bytag`,{params:{tag: "dsa"}}).then(res=>setRelatedBlogs(res.data)).catch(err=>console.log(err))

},[])


  return (
    <Section>
    <div style={{marginTop:20}}>
    <SectionTitle>Related Posts</SectionTitle>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
    {
        relatedBlogs.map(blog=>(
   <div className='cursor-pointer '>
           <Link href={'/blog/'+ blog._id} className='overflow-hidden '>
            <Box>
            <h2 className='text-3xl md:text-5xl'>{blog.title}</h2>
            <BoxText className='mt-3'>Published On {blog.Date.slice(0,10)}</BoxText>
          </Box>
          </Link>
    </div>
        ))
      }
    </div>
    </div>
  </Section>
    )
}

export default RelatedBlogs