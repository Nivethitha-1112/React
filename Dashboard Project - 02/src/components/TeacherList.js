import React from 'react'
import '../styles/teacherlist.css'
import Image1 from '../assets/Image1.jpg'
import Image2 from '../assets/Image2.jpg'
import Image3 from '../assets/Image3.jpg'
import Image4 from '../assets/Image4.jpg'
import Image5 from '../assets/Image5.jpg'
import Image6 from '../assets/Image6.jpg'

const teachers = [
    {
        image: Image1,
        name: 'Prof. Joey Tribbiani',
        duration: '20 hours lesson',
        cost: '100',
    },
    {
        image: Image2,
        name: 'Prof. Chandler Bing',
        duration: '20 hours lesson',
        cost: '100',
    },
    {
        image: Image3,
        name: 'Prof. Monica Geller',
        duration: '20 hours lesson',
        cost: '100',
    },
    {
        image: Image4,
        name: 'Prof. Rachel Karen',
        duration: '20 hours lesson',
        cost: '100',
    },
    {
        image: Image5,
        name: 'Prof. Phoebe Buffay',
        duration: '20 hours lesson',
        cost: '100',
    },
    {
        image: Image6,
        name: 'Prof. Ross Geller',
        duration: '20 hours lesson',
        cost: '100',
    }
]

const TeacherList = () => {
    return (
        <div className='teacher-list'>
            <div className='list-header'>
                <h2>Teachers</h2>
                <select>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                </select>
            </div>
            <div className='list-container'>
                {teachers.map(teacher => <div className='list'>
                    <div className='teacher-detail'>
                        <img src={teacher.image} alt={teacher.name} />
                        <h2>{teacher.name}</h2>
                    </div>
                    <span>{teacher.duration}</span>
                    <span>${teacher.cost}/hr</span>
                    <span className='teacher-todo'></span>
                </div>)}
            </div>
        </div>
    )
}

export default TeacherList