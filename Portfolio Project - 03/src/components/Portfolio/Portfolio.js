import React from 'react';
import './Portfolio.css';
import mywork_data from '../../assets/mywork_data';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Portfolio = () => {
  return (
    <div className='my-work'>
      <div className='mywork-title'>
        <h1>My Latest Work</h1>
      </div>
      <div className='mywork-container'>
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className='mywork-showmore'>
        <div className="showmore-container">
          <p>Show More</p>
          <FontAwesomeIcon icon={faArrowRight} style={{ color: "#86654b" }} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
