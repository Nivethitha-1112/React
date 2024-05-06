import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import Collections from '../components/New Collections/Collections'
import Newsletter from '../components/NewsLetter/Newsletter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <Collections />
        <Newsletter/>
    </div>
  )
}

export default Shop