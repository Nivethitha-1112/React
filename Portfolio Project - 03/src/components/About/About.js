import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={profile_img} alt="" />
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>I'm a dedicated front-end developer with a keen eye for detail and a love for crafting seamless user experiences. </p>
            <p>With a solid foundation in HTML, CSS, JavaScript and React JS, I specialize in bringing designs to life and optimizing user interfaces for maximum engagement. My journey in web development has been marked by a constant hunger for learning and growth, as I continually explore new technologies and techniques to stay ahead of industry trends.</p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'><p>HTML & CSS</p><hr style={{ width: "80%" }}></hr></div>
            <div className='about-skill'><p>JavaScript</p><hr style={{ width: "70%" }}></hr></div>
            <div className='about-skill'><p>Bootstrap</p><hr style={{ width: "60%" }}></hr></div>
            <div className='about-skill'><p>React JS</p><hr style={{ width: "70%" }}></hr></div>
          </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className='about-achievement'>
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className='about-achievement'>
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About