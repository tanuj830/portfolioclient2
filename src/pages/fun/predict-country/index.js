import React from 'react'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import { Box, Boxes, BoxNum, BoxText } from '../../../components/Acomplishments/AcomplishmentsStyles'
import axios from 'axios'
import { useState } from 'react'
import { Section, SectionTitle, SecondaryBtn, SectionSubText, SectionText } from '../../../styles/GlobalComponents'

const index = () => {

    const [countryData, setCountryData] = useState({})
    const [name, setName] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.get(`https://api.nationalize.io?name=${name}`).then(res=>setCountryData(res.data)).catch(err=>console.log(err))
        // console.log(countryData)
    }

  return (
    <>
            <Section>
        <h2 className='fontXl text-center'>
            Predicting Country By Name
        </h2>
        <div className='w-100 mt-12 text-black'>
            <input type="text" placeholder='Enter Your First OR Last Name(avoid spaces)' onChange={e=>setName(e.target.value)} className='px-2 md:px-8 py-4 rounded-md w-100 outline-none border-b border-gray-700 text-black' />
            <SecondaryBtn className='' onClick={handleSubmit}>Search</SecondaryBtn>
        </div>

        <div className=''>
            {
                countryData ? <div>
                            {  countryData.country  ?   <SectionText>Hey, <h2 className='uppercase font-bold'>{countryData.name}</h2> Here are some top matching results</SectionText> : null}
                          <Boxes>
    {
        countryData.country ? countryData.country.map(con=>(
            <div className='text-black bg-slate-200 rounded-2xl p-7'>{console.log(con)}  
            <p>Country Code</p>
          <h6 className='fontXl'>{con.country_id}</h6>
          <h6>Matching {Math.round(con.probability * 10)} / 10</h6>
        </div> 
      )) : null
    }
  </Boxes>
                </div> : null 
                
            }
        </div>
    </Section>
    </>
  )
}

export default index