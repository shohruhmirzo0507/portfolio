import React from 'react'
import "./Resume.css"
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';


function Resume(props) {
  return (
    <div className='resume'>
      <div className="title__resume">
        <h1 className='original__resume'>RESUME</h1>
        <h1 className='shadov__resume'>RESUME</h1>
      </div>
    <div className="expriense">
      <div className="add__exp">
      <h1> <BusinessCenterIcon/></h1>
      <h1>Working Experience</h1>
      </div>
      <div className="show__company">
      <div className="year">
        <h2>2022 - 2023</h2>
      </div>
      <div className="company">
        <h1>Frontend</h1>
        <h2>No Campany</h2>
        <p>No Any Experience Yet , Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit</p>
      </div>
      </div>
      <br />
      <br />
      <div className="add__exp">
      <h1> <SchoolIcon/></h1>
      <h1>Working Experience</h1>
      </div>
      <div className="show__company">
      <div className="year">
        <h2>2022 - 2023</h2>
      </div>
      <div className="company">
        <h1>University</h1>
        <h2>Tashkent University of Information Technologies</h2>
        <p>Faculty of Information Security , Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit</p>
      </div>
      </div>
      <br />v
      <div className="show__company">
      <div className="year">
        <h2>2022 - 2023</h2>
      </div>
      <div className="company">
        <h1>Frontend development</h1>
        <h2>Algoritm IT center</h2>
        <p>Frontend development , Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Resume