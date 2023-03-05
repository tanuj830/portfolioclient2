import React,{useEffect} from 'react'
import { SecondaryBtn, Section, SectionSubText, SectionTitle } from '../../styles/GlobalComponents'
import axios from 'axios'
import Header from '../../components/Header/Header'
import {AiOutlineGithub} from 'react-icons/ai'
import {SiMinutemailer} from 'react-icons/si'
import Footer from "../../components/Footer/Footer"
import { Container } from '../../components/Header/HeaderStyles'
import {useRouter} from 'next/router'

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
                <Section>
        <SectionTitle>
                {project.title}
        </SectionTitle>
        {/* <small className='mt-4 text-secondary'>Published On: {project.Date ? project.Date.slice(0,10): null}</small> */}
        <img className='mt-2 img-fluid' alt = "Image" src={project.img}/>
        <p className='mt-4 text-muted'>Technologies Used: {project.tech}</p>
        <SectionSubText className='mt-2'>
            {project.disp}
        </SectionSubText>
        
        <a className='text-decoration-none ' target="_blank"  href={project.project_url}><SecondaryBtn className='flex items-center justify-center'>
            <span className='mr-4'>
            <i className='fs-3' style={{marginBottom:10}}><SiMinutemailer /></i>
            </span>
            <p>Visit Project</p></SecondaryBtn>
        </a>
        <a className='text-decoration-none ' target="_blank"  href={project.code_url}><SecondaryBtn className='flex items-center justify-center'>
            <span className='mr-4'>
            <i className='fs-3' style={{marginBottom:10}}><AiOutlineGithub /></i>
            </span>
            <p>Source Code</p></SecondaryBtn>
        </a>
</Section>
        
     }
     <Footer />
   </>
  )
}

export default project