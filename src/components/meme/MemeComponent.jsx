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
    <Header />
    <Section>
        <SectionTitle className=''>
        Popular Memes╭(◔ ◡ ◔)/ 
        </SectionTitle>

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
                    <div><h6 className='text-slate-400'>Posted by <b className='text-slate-300'>{memes.author}</b></h6></div>
                    <div><h6 className='text-slate-400'>Likes <b className='text-slate-300'>{memes.ups}</b></h6></div>
                </div>: null
                   }

                        <div className='flex items-center justify-center flex-col'>
                        <div>
                            <h1>{memes.title}</h1>
                        </div>

                        <div>
                            <img src={memes.url} alt="" />
                        </div>
                        </div>
                   </div>
            </div> : null
        }
        <p className='text-center mt-10  text-slate-400'>Powered by Reddit</p>
    </Section>
    <Footer />
    </>
  )
}

export default MemeComponent