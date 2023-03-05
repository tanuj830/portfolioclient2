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
       <Section >
          <div className="w-100 flex flex-column">
              <div className="bg-slate-500 animate-pulse h-12 w-50 rounded-full"></div>
              <div className="bg-slate-500 animate-pulse h-1 w-100 rounded-full mt-12"></div>
              <div className="bg-slate-500 animate-pulse h-9 w-40 rounded-full mt-3"></div>
              <div className="bg-slate-500 animate-pulse h-9 w-50 rounded-full mt-3"></div>
              <div className="bg-slate-500 animate-pulse h-11 w-90 rounded-full mt-20"></div>
              <div className="bg-slate-500 animate-pulse h-11 w-90 rounded-full mt-3"></div>
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