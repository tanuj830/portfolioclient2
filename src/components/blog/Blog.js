import axios from "axios"
import { useEffect } from "react"
import Header from "../Header/Header"
import React from 'react';
import { Section, SectionText, SectionTitle, SectionSubText, SecondaryBtn, SectionDivider } from '../../styles/GlobalComponents';
const parse = require('html-react-parser');
import Link  from "next/link";
import Footer from "../Footer/Footer";

const Blog = () => {

  const [SearchedBlogs, setSearchedBlogs] = React.useState([])
  const [blogs, setBlogs] = React.useState([])
  const [tags, setTags] = React.useState("")

  useEffect(() => {
    axios.get("https://portfolio-38ir.onrender.com/blog").then(res=>setBlogs(res.data)).catch(err=>console.log(err))
  }, [])
  
  const handleClick = (e) =>{
    window.location.href=`/blog/${e}`
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    axios.get(`https://portfolio-38ir.onrender.com/blog/bytag`,{params:{tag:tags}}).then(res=>setSearchedBlogs(res.data)).catch(err=>console.log(err))
  }

  return (
    <> 
<div className='container'><Header/></div>

{/* Search component */}
<Section>
  <div className="flex justify-center items-center w-100">
      <div className="w-100 mr-3  flex justify-center items-start">
        <input placeholder="Search (Ex: Graph Problems)" onChange={e=>setTags(e.target.value)} className="md:px-3 md:py-4 px-2 py-3 border-1 border-slate-500 bg-transparent rounded-md w-100" />
      </div>
      <div className="flex justify-start items-center ">
      <button className="border-1 border-slate-500 px-6 py-3 rounded-full hover:bg-white hover:text-slate-900" onClick={handleSubmit}>Search</button>
      </div>
  </div>
</Section>

{/* Showing Searched Data */}

{
  SearchedBlogs.length > 0 ?

<>
<Section><SectionTitle>Searched Related Data</SectionTitle>
  {
     SearchedBlogs.reverse().map(blog=>(
       <> <hr />
      <SectionSubText>Published on {blog.Date.slice(0,10)}</SectionSubText>
      <SectionText>{blog.title}</SectionText>
      <SectionSubText>{parse(blog.disp.slice(0,300))}</SectionSubText> 
      <SecondaryBtn><Link href={"/blog/" + blog._id}>Read More</Link></SecondaryBtn>
      </>)) 
    }
    </Section>
</>: null
}
{/* Showing all blogs */}
      <Section>
        <SectionTitle>Blogs</SectionTitle>
      </Section>
     {
       blogs.length == 0 ?
       <Section >
          <div className="w-100 flex flex-column">
              <div className="bg-slate-500 animate-pulse h-10 w-50 rounded-full"></div>
              <div className="bg-slate-500 animate-pulse h-1 w-100 rounded-full mt-12"></div>
              <div className="bg-slate-500 animate-pulse h-7 w-40 rounded-full mt-3"></div>
              <div className="bg-slate-500 animate-pulse h-7 w-50 rounded-full mt-3"></div>
              <div className="bg-slate-500 animate-pulse h-10 w-90 rounded-full mt-20"></div>
              <div className="bg-slate-500 animate-pulse h-9 w-90 rounded-full mt-5"></div>
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