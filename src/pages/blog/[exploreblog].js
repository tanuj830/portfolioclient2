import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import { Section, SectionText, SectionTitle, SectionSubText, SecondaryBtn, SectionDivider } from '../../styles/GlobalComponents';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'


const exploreblog = () => {

const route = useRouter()
const id = route.query.exploreblog

const [blog, setBlog] = React.useState({})

useEffect(() => {
  if(id)
axios.get(`https://portfolio-38ir.onrender.com/blog/${id}`).then(res=>setBlog(res.data)).catch(err=>console.log(err))
}, [id])

  return (
    <>
<div className='container'><Header/></div>
    <Section>
      <SectionTitle>
        {blog.title} 
      </SectionTitle>
      <small style={{color:"grey", marginBottom:30}}>Published On: {blog.Date ? blog.Date.slice(0,10) : blog.Date}</small>
      <SectionText dangerouslySetInnerHTML={{ __html : blog.disp}}>
      </SectionText>
    </Section>
    <Footer/>
  </>
  )
}

export default exploreblog