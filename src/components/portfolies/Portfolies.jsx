import React, { useState, useEffect } from 'react'
import './Portfolies.css'
import ipad from '../../assets/ipad.png'
import uzum from '../../assets/uzum.png'
import youtube from '../../assets/youtube.png'
import weather from '../../assets/weather.png'
import bellissimo from '../../assets/bellisimo.png'
import todo from '../../assets/todo.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { NavLink } from 'react-router-dom'

function Portfolies() {

  const projects = [
    {
      id: 1,
      image: ipad,
      title: 'A simple web page',
      comment: 'My first project with "HTML , CSS , JavaScript',
      github: 'https://github.com/shohruhmirzo0507',
      pinter: 'https://applei-pad.vercel.app/ipad',
      name: 'Css'
    },
    {
      id: 2,
      image: uzum,
      title: 'Online shopping',
      comment: 'I used ReactJs in this site',
      github: 'https://github.com/shohruhmirzo0507',
      pinter: 'https://shohruhmirzo-sayt.vercel.app/',
      name: 'ReactJs'
    },
    {
      id: 3,
      image: youtube,
      title: ' Use youtube ',
      comment: 'Video search website via Youtube Api',
      github: 'https://github.com/shohruhmirzo0507',
      pinter: 'https://youtube-two-red.vercel.app/',
      name: 'ReactJs'
    },
    {
      id: 4,
      image: weather,
      title: 'My weather website',
      comment: 'I have also used Api on this website',
      github: 'https://github.com/shohruhmirzo0507',
      pinter: 'https://weather-app-eight-ivory.vercel.app/',
      name: 'JavaScript'
    },
    {
      id: 5,
      image: bellissimo,
      title: 'Bellissimo',
      comment: 'Using ractjs and redux made website',
      github: 'https://github.com/shohruhmirzo0507',
      pinter: 'https://shohruhmirzo-bellisimo.vercel.app/',
      name: 'ReactJs'
    },
    {
      id: 6,
      image: todo,
      title: 'Todo ',
      comment: 'Todolist can be deleted to create a new list',
      github: 'https://github.com/shohruhmirzo0507',
      pinter: 'https://todolist-smoky-xi-23.vercel.app/',
      name: 'JavaScript'
    },

  ]

  const [selectedName, setSelectedName] = useState('All')

  const handleNameSelect = (name) => {
    setSelectedName(name);
  }


  return (
    <div className='portfolies'>
      <div className="title__portfolioes">
        <h1 className='original__portfolioes'>PORTFOLIOS</h1>
        <h1 className='shadov__portfolioes'>PORTFOLIOS</h1>
      </div>

      <div className="portfolios__btn">
        <button className='button__port' onClick={() => handleNameSelect('All')}>All</button>
        <button className='button__port1' onClick={() => handleNameSelect('Css')}>Css</button>
        <button className='button__port2' onClick={() => handleNameSelect('JavaScript')}>JavaScript</button>
        <button className='button__port3' onClick={() => handleNameSelect('ReactJs')}>ReactJs</button>
      </div>

      <div className="portfolios__box">
        {
          projects
            .filter((project) => selectedName === 'All' || project.name === selectedName)
            .map((project) => (
              <div key={project.id} className="portfolios__cart">
                <div className="web__img">
                  <img src={project.image} alt="" />
                  <div className="img__caption">
                    <NavLink to={project.github}><h1><GitHubIcon /></h1></NavLink>
                    <NavLink to={project.pinter}><h1><PinterestIcon /></h1></NavLink>
                  </div>
                </div>
                <h1>{project.title}</h1>
                <p>{project.comment}</p>
              </div>
            ))
        }

      </div>

    </div>
  )
}

export default Portfolies

