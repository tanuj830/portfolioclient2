import React, {useState, useEffect} from 'react';
import axios from "axios"
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import Link from 'next/link'
import Header from '../Header/Header';
import { Container } from '../Header/HeaderStyles';
import {useRouter} from 'next/router'

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
      homepage == false ? <div className='container'><Header/></div> : null
    }
    <Section className=''  nopadding id='projects'>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
    {
      projects.length == 0 ? 
      <div className="w-100 flex flex-column px-4 py-10  animate-pulse" style={{border:"solid 2px gray", borderRadius:15}}>
      <div className="bg-slate-500 animate-pulse h-40 w-90 rounded-xl"></div>
      <div className="bg-slate-500 animate-pulse h-7 w-40 rounded-full mt-4"></div>
      <div className="bg-slate-500 animate-pulse h-8 w-100 rounded-full mt-5"></div>
      <div className="bg-slate-500 animate-pulse h-8 w-50 rounded-full mt-8"></div>
      <div className="bg-slate-500 animate-pulse h-9 w-70 rounded-full mt-3"></div>
  </div>
      :
      projects.map((blog)=>(
       <Link  href={"/project/" + blog._id}>
           <BlogCard className='border-1 border-slate-700'  style={{marginBottom:10, cursor:"pointer"}}>
          <Img className='p-[4px]' src={blog.img} style={{borderTopLeftRadius:10, borderTopRightRadius:10}} />
          <div className='p-5'>
          <TitleContent>
            <HeaderThree title>{blog.title}</HeaderThree>
          </TitleContent>
          <CardInfo className='px-4'>
            {blog.disp.slice(0,125)}.....
          </CardInfo>
          <div style={{marginTop:20}}>
            <TitleContent style={{color:"lightgray"}}>Technologies Used  
              </TitleContent>
            <TagList>
              <p> 
              {
                blog.tech ?  blog.tech.split(",").join(", ") : null
              }

              </p>
            </TagList>
          </div>
          </div>
          {/* <UtilityList>
            <ExternalLinks href={blog.visit}>Code</ExternalLinks>
            <ExternalLinks href={blog.source}>Source</ExternalLinks>
          </UtilityList> */}
        </BlogCard>
       </Link>
      ))
    }
    </GridContainer>
  </Section>
    </>
  )
  };

export default Projects;