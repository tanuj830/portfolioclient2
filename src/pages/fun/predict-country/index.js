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
    <Header />
            <Section>
        <SectionTitle>
            Predicting Country By Name
        </SectionTitle>
        <div className='w-100'>
            <input type="text" placeholder='Enter Your First OR Last Name(avoid spaces)' onChange={e=>setName(e.target.value)} className='px-2 md:px-8 py-4 rounded-md w-100 text-black' />
            <SecondaryBtn className='' onClick={handleSubmit}>Search</SecondaryBtn>
        </div>

        <div className=''>
            {
                countryData ? <div>
                            {  countryData.country  ?   <SectionText>Hey, <h2 className='uppercase text-white'>{countryData.name}</h2> here are some top matching results</SectionText> : null}
                          <Boxes>
    {
        countryData.country ? countryData.country.map(con=>(
            <Box>{console.log(con)}  
            <p>Country Code</p>
          <BoxNum>{con.country_id}</BoxNum>
          <BoxText>Matching {Math.round(con.probability * 10)} / 10</BoxText>
        </Box> 
      )) : null
    }
  </Boxes>
                </div> : null 
                
            }
        </div>
    </Section>
    <Footer />
    </>
  )
}

export default index