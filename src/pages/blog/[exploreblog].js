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
<ImpText >
<div className='flex justify-between items-center'>
<div className=''><small style={{color:"grey", marginBottom:30}} className='text-xl'>Published On: {blog.Date ? blog.Date.slice(0,10) : blog.Date}</small></div>
  <a className="inline-flex items-center ">
              <img alt="blog"  src="https://firebasestorage.googleapis.com/v0/b/accm-9ac3a.appspot.com/o/teams%2FPicsart_23-03-17_20-58-27-449.png?alt=media&token=40f8bac9-b1c2-4f62-a192-3a8e2e49e099" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                
                <span className="title-font text-xl font-medium text-gray-900">Tanuj Bhatt</span>
              </span>
            </a>
</div>
</ImpText>
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