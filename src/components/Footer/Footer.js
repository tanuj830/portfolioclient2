import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import {Section} from "../../styles/GlobalComponents"
import axios from "axios"
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import dynamic from "next/dynamic";


const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
  ssr: false,
  loading: () => <p>Loading ...</p>,
  })
  
// const modules = {
// toolbar: [
//   [{ header: '1' }, { header: '2' }, { font: [] }],
//   [{ size: [] }],
//   ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//   [
//     { list: 'ordered' },
//     { list: 'bullet' },
//     { indent: '-1' },
//     { indent: '+1' },
//   ],
//   ['link', 'image', 'video'],
//   ['clean'],
// ],
// clipboard: {
//   // toggle to add extra line breaks when pasting HTML:
//   matchVisual: false,
// },
// }
// /*
// * Quill editor formats
// * See https://quilljs.com/docs/formats/
// */
// const formats = [
// 'header',
// 'font',
// 'size',
// 'bold',
// 'italic',
// 'underline',
// 'strike',
// 'blockquote',
// 'list',
// 'bullet',
// 'indent',
// 'link',
// 'image',
// 'video',
// ]
const Footer = () => {



  const [key, setKey] = React.useState("")
  const [text, setText] = React.useState("")
  const [projectText, setProjectText] = React.useState("")
  const [title, setTitle] = React.useState({})
  const [tag, setTag] = React.useState({})
  const [projectData, setProjectData] = React.useState({})
  
  const handleClick = () =>{
    console.log(text)
    const data={
      disp: text
    }
    const mergedObj = {
   
      ...title, ...tag, ...data
    }
    axios.post("https://portfolio-38ir.onrender.com/blog", mergedObj).then(res=>console.log(res)).catch(err=>console.log(err))
  }
  
  const handleProject = (e) =>{

      const name = e.target.name
      const value = e.target.value

      setProjectData({...projectData, [name]: value})
  }
  const submitProject = () =>{

    const data={
      disp: projectText
    }
    const mergedObj = {
      ...projectData, ...data
    }
    axios.post("https://portfolio-38ir.onrender.com/project", mergedObj).then(res=>console.log(res)).catch(err=>console.log(err))
  }
 
  return (
    <FooterWrapper className='brightness-200'>
      <hr />
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:766-808-8539">766-808-8539</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-Mail</LinkTitle>
          <LinkItem href="mailto:tanujbhatt644@gmail.com">tanujbhatt644@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Admin Pannel</LinkTitle>
          <input  style={{padding:"3px 10px"}} onChange={(e)=>setKey(e.target.value)} type='text' placeholder='Enter Key' />
          {
              key==="mai321" ? 
              <>
               <Section>
                    <input type='text' placeholder='Title Here' onChange={e=>setTitle({title: e.target.value})}/>
                    <input type='text' placeholder='Tag Here' onChange={e=>setTag({tag: e.target.value})}/>
                    <QuillNoSSRWrapper value={text} onChange={setText} theme="snow" />
                    <button onClick={handleClick} style={{padding:"3px 10px",marginTop:100}}>Push Code</button>
               </Section>
             
             <Section>
                    <input type='text' name='title' placeholder='title' onChange={handleProject}/>
                    <input type='text' name='tech' placeholder='technologies used' onChange={handleProject}/>
                    <input type='text' name='project_url' placeholder='website link' onChange={handleProject}/>
                    <input type='text' name='code_url' placeholder='github code url' onChange={handleProject}/>
                    <QuillNoSSRWrapper  value={projectText} onChange={setProjectText} theme="snow" />
                    <button onClick={submitProject} style={{padding:"3px 10px",marginTop:100}}>Push Code</button>
               </Section>
                    </>
               : null
          }
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Are you finding me ?</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons className='mx-1' href="https://github.com/tanuj830">
          <AiFillGithub  className='fs-1 '/>
        </SocialIcons>
        <SocialIcons className='mx-1' href="https://www.linkedin.com/in/tanuj-bhatt-85a2511b5/">
          <AiFillLinkedin  className='fs-1 '/>
        </SocialIcons>
        <SocialIcons className='mx-1' href="https://leetcode.com/tanujdotcpp/">
          <SiLeetcode className='fs-1 ' />
        </SocialIcons>
        <SocialIcons className='mx-1' href="https://www.instagram.com/aka_tanuj/">
          <AiFillInstagram className='fs-1 ' />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      <div style={{color:"grey", display:"flex", alignItemsCenter:"center", justifyContent:"center"}}>Copyright © 2022 Tanuj Bhatt | All rights reserved</div>
    </FooterWrapper>
  );
};

export default Footer;
