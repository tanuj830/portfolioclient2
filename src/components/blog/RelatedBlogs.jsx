import React from 'react'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from '../Acomplishments/AcomplishmentsStyles';
import { useEffect } from 'react';
import axios from 'axios';


const RelatedBlogs = (props) => {

    const [relatedBlogs, setRelatedBlogs] = React.useState([])

useEffect(() => {
    axios.get(`https://portfolio-38ir.onrender.com/blog/bytag`,{params:{tag:props.tag, title:props.tag, disp: props.tag}}).then(res=>setRelatedBlogs(res.data)).catch(err=>console.log(err))

})


  return (
    <Section>
    <div style={{marginTop:20}}>
    <SectionTitle>Related Posts</SectionTitle>
    <div className='grid grid-cols-1 md:grid-cols-3'>
    {
        relatedBlogs.map(blog=>(
          <Box>
            <BoxText>{blog.title}</BoxText>
          </Box>
        ))
      }
    </div>
    </div>
  </Section>
    )
}

export default RelatedBlogs