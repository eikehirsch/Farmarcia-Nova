import React from 'react'
import Header from '../../components/header/Header'
import Body from '../../components/body/Body'
import Footer from '../../components/footer/Footer'

import "./Home.css"

function Home() {
  return (
    <div className='home-container'>
        <Header />
        <Body />
        <Footer />
    </div>
  )
}

export default Home