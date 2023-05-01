import React,{useEffect} from 'react'
import { SecondaryBtn, Section, SectionSubText, SectionTitle } from '../../styles/GlobalComponents'
import axios from 'axios'
import Header from '../../components/Header/Header'
import {AiOutlineGithub} from 'react-icons/ai'
import {SiMinutemailer} from 'react-icons/si'
import Footer from "../../components/Footer/Footer"
import { Container, Div3, SocialIcons } from '../../components/Header/HeaderStyles'
import {useRouter} from 'next/router'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';


const project = () => {

    const [project, setProject] = React.useState({})

    const router = useRouter()
    const id = router.query
    
    useEffect(() => {
        console.log(id)
    axios.get(`https://portfolio-38ir.onrender.com/project/${id.project}`).then(res=>setProject(res.data)).catch(err=>console.log(err))
    }, [id])
    

    return (
   <>
<div className='container'><Header/></div>
   {!project.disp ?
   <Section>
           <div className="w-100 flex flex-column">
              <div className="bg-slate-500 animate-pulse h-10 w-50 rounded-full"></div>
              <div className="bg-slate-500 animate-pulse h-40 w-90 rounded-xl mt-4"></div>
              <div className="bg-slate-500 animate-pulse h-9 w-100 rounded-full mt-10"></div>
              <div className="bg-slate-500 animate-pulse h-9 w-50 rounded-full mt-2"></div>
              <div className="bg-slate-500 animate-pulse h-10 w-90 rounded-full mt-12"></div>
              <div className="bg-slate-500 animate-pulse h-9 w-50 rounded-full mt-3"></div>
              <div className="bg-slate-500 animate-pulse h-9 w-50 rounded-full mt-3"></div>
          </div>
   </Section>
    :
    <section class="container text-gray-600 body-font">
  <div class="px-5 md:py-24 mx-auto flex flex-col">
    <div className='flex items-center justify-center'><h1 className='text-fontXl'>{project.title}</h1></div>
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg  overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src={project.img}/>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center overflow-hidden bg-gray-200 text-gray-400">
            <img className='object-contain overflow-hidden' src="https://firebasestorage.googleapis.com/v0/b/accm-9ac3a.appspot.com/o/teams%2FPicsart_23-03-17_20-58-27-449.png?alt=media&token=40f8bac9-b1c2-4f62-a192-3a8e2e49e099"/>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-fontLg">Admin: Tanuj Bhatt</h2>
            <div class="w-12 flex items-center h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            {/* <p class="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p> */}
            <Div3>
            <SocialIcons className='hover:bg-neutral-200' href="https://github.com/tanuj830">
          <AiFillGithub />
        </SocialIcons>
        <SocialIcons className='hover:bg-neutral-200' href="https://www.linkedin.com/in/tanuj-bhatt-85a2511b5/">
          <AiFillLinkedin />
        </SocialIcons>
        <SocialIcons className='hover:bg-neutral-200' href="https://leetcode.com/tanujdotcpp/">
          <SiLeetcode />
        </SocialIcons>
        <SocialIcons className='hover:bg-neutral-200' href="https://www.instagram.com/aka_tanuj/">
          <AiFillInstagram />
        </SocialIcons>
            </Div3>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-fontLg mb-4">{project.disp}</p>
          <a href={project.project_url} class="text-indigo-500 inline-flex items-center">Show Project
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>}
     <Footer />
   </>
  )
}

export default project
              