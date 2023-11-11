import React from 'react'
import './About.css'
import InsightsIcon from '@mui/icons-material/Insights';
import img from '../../assets/img.jpg'

function About() {

  return (
    <div className="about">
      <div className="title__about">
        <h1 className='original'>ABOUT ME</h1>
        <h1 className='shadov'>ABOUT ME</h1>
      </div>

      <div className="about__data">
        <div className="img">
          <img className='img__width' src={img} alt="" />
        </div>
        <div className="data__type">
          <h2 className='data__type__title'>I am <span>No'monjonov Shohruhmirzo</span></h2>
          <p>I'm also very interested in conferences and meetups, often participating in forums, discussions in the Telegram chat rooms and Stack Overflow. In my spare time, I study browser principles, page rendering, DOM model, etc </p>
          <div className="balance">
            <div className="show__data">
              <p><b>Full Name</b></p>
              <p><b>Age</b> </p>
              <p><b>Nationalty</b> </p>
              <p><b>Languages</b> </p>
              <p><b>Location</b> </p>
              <p><b>Service</b> </p>
            </div>
            <div className="show__data__add">
              <p>:Shohruhmirzo No'monjonov</p>
              <p>:18</p>
              <p>:Uzbek </p>
              <p>:Uzbek, English(Intermediate)</p>
              <p>:Tashkent, Yashnobod region </p>
              <p>:Frontend </p>
            </div>
          </div>
          <button className='download'>DOWNLOAD CV</button>

        </div>
      </div>

      <div className="title__about">
        <h1 className='original'>SERVICES</h1>
        <h1 className='shadov'>SERVICES</h1>
      </div>

      <div className="about__services">
        <span className='services__icon'><InsightsIcon /></span>
        <br />
        <br />
        <h1>Web Frontend</h1>
        <br />
        <br />
        <p>Making the Frontend part of the many kinds of websites or web programs</p>






      </div>

      <div className="title__about">
        <h1 className='original'>REVIEWS</h1>
        <h1 className='shadov'>REVIEWS</h1>
      </div>

      <div className="about__message">
        <div className="message__1">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas id erepellendus?</p>
        </div>
        <div className="message__1">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quidem! Similique, doloremque quidem quas! </p>
        </div>
      </div>
    </div>
  )
}

export default About