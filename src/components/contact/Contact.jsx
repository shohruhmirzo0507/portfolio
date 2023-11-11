import React from 'react'
import './Contact.css'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

function Contact() {
  return (
    <div>
      <div className="contact">
        <div className="title__contact">
          <h1 className='original__contact'>CONTACT</h1>
          <h1 className='shadov__contact'>CONTACT</h1>
        </div>

        <div className="div__contact">
          <div className="email__contact">
            <h1>Get In Touch</h1>
            <form>
              <label className='input__box'>
                <input required type="text" />
                <span>Enter your name*</span>
              </label>
              <label className='input__box' >
                <input required type="email" name="" id="" />
                <span>Enter your email*</span>
              </label>
              <label className='input__box' >
                <input required type="text" />
                <span>Enter your subject</span>
              </label>
                <textarea className='text__area' rows="4" cols="50">
                  Enter Your Message*
                </textarea>
              <button className='submit' type='submit'>SEND EMAIL</button>
            </form>
          </div>
          <div className="phone__contact">
            <div className="number__phone">
              <div className="tell__icon"><PhoneIcon/></div>
              <div className="num">
                <h2>Phone</h2>
                <p>+998 94 828 52 28</p>
                <p>+998 94 828 52 28</p>
              </div>
            </div>
            <div className="number__phone">
              <div className="tell__icon"><EmailIcon/></div>
              <div className="num">
                <h2>Email</h2>
                <p>shohruhxon5228@gmail.com</p>
                <p>shohruhxon5228@gmail.com</p>
              </div>
            </div>
            <div className="number__phone">
              <div className="tell__icon"><PlaceIcon/></div>
              <div className="num">
                <h2>Adress</h2>
                <p>Tashkent, Yashnobod region</p>
                <p>Izzat Street</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact