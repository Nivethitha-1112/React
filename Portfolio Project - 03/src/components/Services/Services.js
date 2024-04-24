import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data'
// import arrow_icon from '../../assets/arrow_icon.svg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
  return (
    <div className='services'>
      <div className='services-title'>
        <h1>My Services</h1>
      </div>
      <div className='services-container'>
        {Services_Data.map((service, index) => {
          return <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className='services-readmore'>
              <p>Read More</p>
              <FontAwesomeIcon icon={faArrowRight} style={{ color: "#86654b" }} />
            </div>

          </div>
        })}
      </div>
    </div>
  )
}

export default Services