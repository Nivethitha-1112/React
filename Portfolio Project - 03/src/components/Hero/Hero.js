import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import { FaDownload } from 'react-icons/fa' 
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt=""/>
        <h3><span>I'm John Doe, Frontend developer based in India.</span></h3>
        <p>As a frontend developer, I'm likely passionate about 
            creating engaging and user-friendly experiences on the web. 
            My role involves crafting the visual elements of websites and 
            web applications, ensuring they not only look great but also 
            function smoothly across different devices and browsers.</p>
            <div className='hero-action'>
        <Link to="https://www.linkedin.com/in/nivethithamano/" className='hero-connect' target="_blank">
          Connect With me
        </Link>
            <div className='hero-resume'>My Resume<FaDownload class="download-icon"/></div>
            </div>
    </div>
  )
}

export default Hero