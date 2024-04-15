import React from 'react'
import './Title.css'
// Instead of adding title to all the components we can pass it as props from App.jsx

const Title = ({subTitle, title}) => {
    return (
        <div className='title'>
            <p>{subTitle}</p>
            <h2>{title}</h2>
        </div>
    )
}

export default Title
