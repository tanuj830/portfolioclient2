import React from 'react'
import Header from '../Header/Header'
import {Section,ImpText2, SectionTitle, SectionSubText, SecondaryBtn} from '../../styles/GlobalComponents/index'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'

const MemeComponent = () => {

    const [memes, setMemes] = useState([])

    useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes").then(res=>setMemes(res.data.data.memes)).catch(err=>console.log(err))
    }, [])
    
  return (
    <>
    <Header />
    <Section>
        <SectionTitle className=''>
        Popular Memes Templates╭(◔ ◡ ◔)/ 
        </SectionTitle>
        <SectionSubText className='uppercase text-xl'>Just Explore...!</SectionSubText>
    </Section>
    <Section>
        {
            memes.length > 0 ? <>
                    <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
                {
                         memes.map(meme=>(
                            <div className='border-1 relative  border-slate-600 rounded-md' key={meme.id}>
                                <img  width={meme.width} height={meme.height} src={meme.url} alt="" />
                                <div className='bottom-0 w-100 bg-black absolute'>
                                <ImpText2 className=' text-slate-100 px-2 py-1 text-'>{meme.name}</ImpText2>
                                </div>
                            </div>
                        ))
                }
                    </div>
            </> : null
        }
    </Section>
    <Footer />
    </>
  )
}

export default MemeComponent