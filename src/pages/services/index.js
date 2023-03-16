import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Services from '../../components/services/Services'
import { Section } from '../../styles/GlobalComponents'

const index = () => {
  return (
    <>
    <Header />
    
    <Section>
        <Services />
    </Section>

    <Footer />   
    </>
  )
}

export default index