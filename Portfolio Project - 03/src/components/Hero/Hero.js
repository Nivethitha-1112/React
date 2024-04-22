import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt=""/>
        <h1><span>I'm Nivethitha, Frontend developer based in India.</span></h1>
        <p>As a frontend developer based in India, I'm likely passionate about 
            creating engaging and user-friendly experiences on the web. 
            My role involves crafting the visual elements of websites and 
            web applications, ensuring they not only look great but also 
            function smoothly across different devices and browsers.</p>
            <div className='hero-action'>
            <div className='hero-connect'>Connect with me</div>
            <div className='hero-resume'>My Resume</div>
            </div>
    </div>
  )
}

export default Hero