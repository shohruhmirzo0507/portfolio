import React from 'react'
import './Blogs.css'
import json from '../../assets/json.png'

function Blogs() {
  return (
    <div className='blog'>
      <div className="title__blog">
        <h1 className='original__blog'>BLOGS</h1>
        <h1 className='shadov__blog'>BLOGS</h1>
      </div>
      <div className="blog__box">
        <div className="cart__blog">
          <div className="over__img">
          <img className='cart__img' src={json} alt="" />
          </div>
          <p>Interesting situations in the process of portfolio preparation</p>
        </div>
        <div className="cart__blog">
          <div className="over__img">
          <img className='cart__img' src={json} alt="" />
          </div>
          <p>Interesting situations in the process of portfolio preparation</p>
        </div>
        <div className="cart__blog">
          <div className="over__img">
          <img className='cart__img' src={json} alt="" />
          </div>
          <p>Interesting situations in the process of portfolio preparation</p>
        </div>
        <div className="cart__blog">
          <div className="over__img">
          <img className='cart__img' src={json} alt="" />
          </div>
          <p>Interesting situations in the process of portfolio preparation</p>
        </div>
        <div className="cart__blog">
          <div className="over__img">
          <img className='cart__img' src={json} alt="" />
          </div>
          <p>Interesting situations in the process of portfolio preparation</p>
        </div>
        <div className="cart__blog">
          <div className="over__img">
          <img className='cart__img' src={json} alt="" />
          </div>
          <p>Interesting situations in the process of portfolio preparation</p>
        </div>
      </div>
    </div>
  )
}

export default Blogs