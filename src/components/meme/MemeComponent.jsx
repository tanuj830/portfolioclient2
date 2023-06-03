import React from 'react'
import Header from '../Header/Header'
import {Section,ImpText2, SectionTitle, SectionSubText, SecondaryBtn} from '../../styles/GlobalComponents/index'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'

const MemeComponent = () => {

    const [memes, setMemes] = useState({})
    
    const handleClick = () =>{
        axios.get("https://meme-api.com/gimme").then(res=>setMemes(res.data)).catch(err=>console.log(err))
    }

  return (
    <>
    
    <Section>
        <h2 className='fontXl text-center'>
        Popular Memes╭(◔ ◡ ◔)/ 
        </h2>

        <div className='flex items-center justify-between'>
            <div>
            <SectionSubText className='uppercase text-xl'>Just Explore...!</SectionSubText>
            </div>
            <div>
                {
                    memes.preview ? <SecondaryBtn onClick={handleClick} >Generate Next Meme</SecondaryBtn> : <SecondaryBtn onClick={handleClick} >Show Meme</SecondaryBtn>
                }
            </div>
        </div>

    </Section>
    <Section>
        {
            memes ? <div className='flex items-center justify-center'>
                   <div className='w-100 md:w-50'>

                   {
                    memes.preview  ?  <div className='flex justify-between items-center'>
                    <div><h6 className='text-black'>Posted by <b className='text-black'>{memes.author}</b></h6></div>
                    <div><h6 className='text-black'>Likes <b className='text-black'>{memes.ups}</b></h6></div>
                </div>: null
                   }

                        <div className='flex items-center justify-center flex-col'>
                        <div>
                            <h1 className='text-black'>Title: {memes.title}</h1>
                        </div>

                        <div>
                            <img src={memes.url} alt="" />
                        </div>
                        </div>
                   </div>
            </div> : null
        }
        <p className='text-center mt-10  text-black'>Powered by Reddit</p>
    </Section>
    
    </>
  )
}

export default MemeComponent