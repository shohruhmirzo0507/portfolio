import React from 'react'
import './Side__home.css'
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { NavLink } from 'react-router-dom';

function Side__home() {
    return (
        <div>
            <div className="side__home">
                <div className="star"></div>
                <div className="star1"></div>
                <div className="text__home">
                    <h1 className='title__home'>Hi, I'm  <span>Shohruhmirzo No'monjonov</span> </h1>
                    <p>Welcome to my personal portfolio , I'm a frontend developer. I can build JavaScript , React Js and Next Js web applications from the ground up. I plan to develop skills of Angular and Vue in the near future. Build appealing websites throuhg CSS frameworks such as SCSS, BootStrap and Styled Components. During my studies , i have worked on several projects that you can on my github account</p>
                    <ul className='icon__home'>
                        <li className='icon__list'><NavLink to={"https://t.me/Shohruhmirzo03"}><TelegramIcon /></NavLink></li>
                        <li className='icon__list1'> <NavLink to={"https://github.com/shohruhmirzo0507 "}><GitHubIcon /></NavLink></li>
                        <li className='icon__list2'> <NavLink to={"https://github.com/shohruhmirzo0507 "}><YouTubeIcon /></NavLink> </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Side__home






