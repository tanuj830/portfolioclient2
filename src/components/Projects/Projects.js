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
    <Section  nopadding id='projects'>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
    {
      projects.length == 0 ? 
     <div className='d-flex flex-row '>
    <div class="spinner-border text-light" role="status">
        <span class="visually-hidden"></span>
    </div>
    <div className='mx-3'>
    <h3 className=''>Fetching Projects...</h3>
    </div>
    </div>
      :
      projects.map((blog)=>(
       <Link  href={"/project/" + blog._id}>
           <BlogCard  style={{marginBottom:10, cursor:"pointer"}}>
          <Img src={blog.img} />
          <TitleContent>
            <HeaderThree title>{blog.title}</HeaderThree>
          </TitleContent>
          <CardInfo>
            {blog.disp.slice(0,105)}<p className='text-primary'>read more</p>
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