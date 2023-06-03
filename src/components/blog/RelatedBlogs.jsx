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
    <div className="container border-t">
    <div style={{marginTop:40}}>
    <div className='flex items-center justify-center'><h2 className='fontXl'>Related Posts</h2></div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
    {
        relatedBlogs.map(blog=>(
   <div className='cursor-pointer '>
           <Link href={'/blog/'+ blog._id} className='overflow-hidden '>
            <div className="bg-slate-200 p-5 rounded-3xl h-72 hover:text-stone-500 text-black">
            <h2 className='text-3xl md:text-4xl'>{blog.title}</h2>
            <h6 className='mt-3'>Published On {blog.Date.slice(0,10)}</h6>
          </div>
          </Link>
    </div>
        ))
      }
    </div>
    </div>
  </div>
    )
}

export default RelatedBlogs