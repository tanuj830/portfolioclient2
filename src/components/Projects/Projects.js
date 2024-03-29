import React, {useState, useEffect} from 'react';
import axios from "axios"
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import Link from 'next/link'
import Header from '../Header/Header';
import { Container } from '../Header/HeaderStyles';
import {useRouter} from 'next/router'
import {AiOutlineHeart} from 'react-icons/ai'
import { icons } from 'react-icons/lib';
const Projects = () => {
  
  const [projects, setProjects] = useState([])
  const [homepage, setHomepage] = useState(false)
  
  const query = useRouter()
  
  useEffect(() => {
    console.log(query.pathname)
    query.pathname == '/' ? setHomepage(true): setHomepage(false)
    axios.get("https://portfolio-38ir.onrender.com/project").then(res=>setProjects(res.data)).catch(err=>console.log(err))
  }, [])
  
  return(
    <>
    {
      homepage == false ? <div className='container'></div> : null
    }
    <section id="projects" className="md:mb-0 mb-20 container text-gray-600 body-font">
  <div className=" md:px-5 py-24 mx-auto">
    <div className='flex items-center justify-center'>
      <h1 className='fontXl'>Projects</h1>
    </div>
    <div className="flex flex-wrap -m-4">
    {
      projects.length == 0 ? 
<div className='w-full px-10'>
<div className="w-100 flex flex-column px-4 py-10  animate-pulse" style={{border:"solid 2px gainsboro", borderRadius:15}}>
      <div className="bg-slate-200 animate-pulse h-40 w-90 rounded-xl"></div>
      <div className="bg-slate-200 animate-pulse h-7 w-40 rounded-full mt-4"></div>
      <div className="bg-slate-200 animate-pulse h-8 w-100 rounded-full mt-5"></div>
      <div className="bg-slate-200 animate-pulse h-8 w-50 rounded-full mt-8"></div>
      <div className="bg-slate-200 animate-pulse h-9 w-70 rounded-full mt-3"></div>
  </div>
</div>
      :
      <div className='Grid'>
        {
          projects.map((p)=>(
            <Link className="" href={"/project/" + p._id}>
              <div  className="   ">
                
              <div className="h-full  overflow-hidden  transition-all duration-700 cursor-pointer">
                <img className="lg:h-64 md:h-44 w-full  object-cover  rounded-3xl  " src={p.img} alt="blog"/>
                <div className="px-1 py-3">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1 uppercase">web devlopment</h2>
                  <h1 className="title-font text-3xl font-medium text-gray-900 mb-3">{p.title}</h1>
                  <p className="leading-relaxed mb-3">{p.disp.slice(0,125)}...</p>
                  <div className="flex items-center flex-wrap ">
                    <p className='text-xl text-gray-400'>2 minutes read</p>
                    <span className="text-gray-400 mr-3 inline-flex items-center border-r-2  lg:ml-auto md:ml-0 ml-auto leading-none text-xl pr-3 py-1 border-gray-300">
                      <svg className="w-8 h-8 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>{Math.floor(Math.random()*10)/2}K
                    </span>
                    {/* <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-8 h-8 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span> */}
                    <span className="text-gray-400 inline-flex items-center leading-none gap-1 text-xl">
                     <AiOutlineHeart size="2rem"/>{ Math.floor(Math.random()*10)/2 }K
                    </span>
                  </div>
                </div>
              </div>
              </div>
            </Link>
        ))
        }
      </div>
  }
    </div>
  </div>
  <div className='hidden md:absolute md:bottom-0 md:right-0'>
    <div className=''>
    <Link href="#stack" className="" ><p className='uppercase tracking-wider border rounded-full px-3 py-2 cursor-pointer flex items-center justify-center'><img className='w-12 rounded-full' src="https://firebasestorage.googleapis.com/v0/b/portfolio-e0b16.appspot.com/o/down-arrow.gif?alt=media&token=1e37f8c5-f455-44d0-b308-cf97c01c8388"/> next section</p></Link>
    </div>
  </div>
</section>
    </>
  )
  };

export default Projects;