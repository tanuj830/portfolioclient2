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
  const months=[
    {
      id:"01",
      month:"Jan"
    },
    {
      id:"02",
      month:"Feb"
    },
    {
      id:"03",
      month:"Mar"
    },
    {
      id:"04",
      month:"Apr"
    },
    {
      id:"05",
      month:"May"
    },
    {
      id:"06",
      month:"Jun"
    },
    {
      id:"07",
      month:"Jul"
    },
    {
      id:"08",
      month:"Aug"
    },
    {
      id:"09",
      month:"Sept"
    },
    {
      id:"10",
      month:"Oct"
    },
    {
      id:"11",
      month:"Nov"
    },
    {
      id:"12",
      month:"Dec"
    },
  ]
  return (
    <> 
<div className='container'></div>
{/* showing searched data */}
<div className="flex justify-center items-center px-4 md:mt-20">
      <div className="   flex justify-center items-start">
       <div>
       <div className="relative w-[40%]">
        <input id="search"  onChange={e=>setTags(e.target.value)} className="focus:text-pink-500 focus:border-pink-500 outline-none peer md:px-3 md:py-4 px-2 py-3 border-b-2  text-black" />
        <label className={`
        absolute
        text-neutral-500
        ${tags === "" ? 'top-3.5': '-top-4'}
        left-0
        transition-all
        peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-400
        peer-placeholder-shown:top-2
        peer-focus:-top-3.5
        peer-focus:text-pink-600
        peer-focus:text-sm
   `} for="search">Search</label>
        </div>
      </div>
       </div>
      <div className="flex justify-start items-center ">
      <button className="border-1 border-slate-500 px-6 py-3 rounded-full  text-slate-900" onClick={handleSubmit}>Search</button>
      </div>
  </div>
{
  SearchedBlogs.length > 0 ?

<>
<section class="md:px-24 text-gray-600 body-font overflow-hidden">
  <div class="container md:px-5 py-24 mx-auto">
  {
     SearchedBlogs.reverse().map(blog=>(
       
       
       <div class="-my-10 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700 uppercase">Tech</span>
          <span class="mt-1 text-gray-500 text-sm">{blog.Date.slice(0,10)}</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{blog.title}</h2>
          <p class="leading-relaxed text-justify">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <a class="text-indigo-500 inline-flex items-center cursor-pointer mt-4" onClick={()=>handleClick(blog._id)}>Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        </div>
        <hr/>
    </div>
      )) 
          }
  </div>
</section></>: null
}
{/* showing all blogs */}
<section className="md:px-24 md:mt-10 text-gray-600 body-font">
  <div className="container md:px-5 md:py-24 py-12 mx-auto">
    <div className="flex flex-wrap -mx-4 -my-8">
    {
       blogs.length == 0 ?
       <div className="w-full grid md:grid-cols-3">
          <div className="w-full flex flex-column ">
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-56 rounded-full mt-12"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full mt-3"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[70%] rounded-full mt-3"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full mt-3"></div>
          </div>
          <div className="md:inline hidden">
          <div className="w-full flex flex-column ">
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-56 rounded-full mt-12"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full mt-3"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[70%] rounded-full mt-3"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full mt-3"></div>
          </div>
          </div>
          <div className="md:inline hidden">
          <div className="w-full flex flex-column ">
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-56 rounded-full mt-12"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full mt-3"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[70%] rounded-full mt-3"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full mt-3"></div>
          </div>
          </div>
       </div>
      :
      blogs.reverse().map(blog=>(
        <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            {
              <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{months[Math.floor( blog.Date.slice(5, 7))].month}</span>
              }
             <span className="font-medium text-lg text-gray-800 title-font leading-none">{blog.Date.slice(8, 10)}</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 uppercase">tech</h2>
            <h1 className="title-font text-3xl font-medium text-gray-900 mb-3">{blog.title}</h1>
            <div className="flex flex-col justify-around">
            <p className="leading-relaxed text-justify">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <a class="text-indigo-500 inline-flex items-center mt-4 cursor-pointer" onClick={()=>handleClick(blog._id)}>Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
              </div>
            <a className="inline-flex items-center mt-5">
              <img alt="blog" src="https://firebasestorage.googleapis.com/v0/b/accm-9ac3a.appspot.com/o/teams%2FPicsart_23-03-17_20-58-27-449.png?alt=media&token=40f8bac9-b1c2-4f62-a192-3a8e2e49e099" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                
                <span className="title-font font-medium text-gray-900">Tanuj Bhatt</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      ))
    }
    </div>
  </div>
</section>
      
    </>
  )
}

export default Blog