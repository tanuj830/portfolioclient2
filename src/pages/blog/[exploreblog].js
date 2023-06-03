import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import { Section, SectionText, SectionTitle, ImpText, SecondaryBtn, SectionDivider } from '../../styles/GlobalComponents';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import RelatedBlogs from '../../components/blog/RelatedBlogs';


const exploreblog = () => {
    
  const [blog, setBlog] = React.useState({})
  const route = useRouter()

  useEffect(() => {
axios.get(`https://portfolio-38ir.onrender.com/blog/${route.query.exploreblog}`).then(res=>setBlog(res.data)).catch(err=>console.log(err)) 
}, )

  return (
      <>
<div className=''></div>
 {
  !blog.disp ?
  <Section>
      <div className=" w-100 flex flex-column">
<div className="bg-slate-500 animate-pulse h-10 w-50 rounded-full"></div>
<div className="bg-slate-500 animate-pulse h-6 w-40 rounded-full mt-4"></div>
<div className="bg-slate-500 animate-pulse h-80 w-90 rounded-xl mt-16"></div>
</div>
  </Section>
  :
  <div className='container mt-20'>
  <h2 className='fontXl'>
    {blog.title} 
  </h2>
  <small style={{color:"grey", marginBottom:30}}>Published On: {blog.Date ? blog.Date.slice(0,10) : blog.Date}</small>
  <ImpText className='text-justify' dangerouslySetInnerHTML={{ __html : blog.disp}}>
  </ImpText>
</div>
 }

 <RelatedBlogs tag= {blog.tag}/>
  </>
  )
}


// //server side rendring
// export async function getServerSideProps(ctx) {
//   const res = await fetch
//   const data = await res.json()
  
//   return {
//     props: {data }, 
//   }
// }


export default exploreblog