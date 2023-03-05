import axios from "axios"
import { useEffect } from "react"
import Header from "../Header/Header"
import React from 'react';
import { Section, SectionText, SectionTitle, SectionSubText, SecondaryBtn, SectionDivider } from '../../styles/GlobalComponents';
const parse = require('html-react-parser');
import { Link } from "next/link";
import Footer from "../Footer/Footer";

const Blog = () => {

  const [blogs, setBlogs] = React.useState([])

  useEffect(() => {
    axios.get("https://portfolio-38ir.onrender.com/blog").then(res=>setBlogs(res.data)).catch(err=>console.log(err))
  }, [])
  
  const handleClick = (e) =>{
    window.location.href=`/blog/${e}`
  }

  return (
    <> 
<div className='container'><Header/></div>
      <Section>
        <SectionTitle>Blogs</SectionTitle>
      </Section>
     {
       blogs.length == 0 ?
       <Section className='d-flex flex-row '>
    <div class="spinner-border text-light" role="status">
        <span class="visually-hidden"></span>
    </div>
    <div className='mx-3'>
    <h3 className=''>Loading...</h3>
    </div>
    </Section>
      :
      blogs.reverse().map(blog=>(
        <Section>
          <hr />
        <SectionSubText>Published on {blog.Date.slice(0,10)}</SectionSubText>
        <SectionText>{blog.title}</SectionText>
        <SectionSubText>{parse(blog.disp.slice(0,300))}</SectionSubText> 
        <SecondaryBtn  onClick={()=>handleClick(blog._id)}>Read More</SecondaryBtn>
      </Section>
      ))
     }
      <Footer/> 
    </>
  )
}

export default Blog