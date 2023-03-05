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
   {!project ? <Section className='d-flex flex-row '>
    <div class="spinner-border text-light" role="status">
        <span class="visually-hidden"></span>
    </div>
    <div className='mx-3'>
    <h3 className=''>Loading...</h3>
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
        
        <a className='text-decoration-none' target="_blank"  href={project.project_url}><SecondaryBtn><i className='mx-3' style={{marginBottom:10}}><SiMinutemailer /></i>Visit Project</SecondaryBtn></a>
        <a target='_blank' href={project.code_url}><SecondaryBtn><i className='mx-2  align-item-center ' style={{marginBottom:10}}><AiOutlineGithub  /></i> Code Repositry</SecondaryBtn></a>
    </Section>
        
     }
     <Footer />
   </>
  )
}

export default project