import React, {useState} from 'react'
import './Home.css'
import image from '../../assets/image2.png'
import { NavLink } from 'react-router-dom'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

function Home({ children }) {
const [sidebar, setSidebar] = useState(false)
const showSidebar = () => setSidebar(!sidebar)


  const menuItem = [
    {
      path: "/",
      name: "HOME",
    },
    {
      path: "/about",
      name: "ABOUT",
    },
    {
      path: "/resume",
      name: "RESUME",
    },
    {
      path: "/portfolios",
      name: "PORTFOLIOS",
    },
    {
      path: "/blogs",
      name: "BLOGS",
    },
    {
      path: "/contact",
      name: "CONTACT",
    }
  ]
  return (
    <div className='container'>
      <div className={sidebar ? 'side-menu active' : 'side-menu'} >
        <div className="sidebar__img">
          <div className="img__box">
            <img width={220} src={image} alt="" />
          </div>
        </div>
        <div className="menu">
          <ul className='collection'>
            {
              menuItem.map((item, index) => (
                <NavLink to={item.path} key={index} className="list" >
                  {item.name}
                </NavLink>
              ))
            }
          </ul>
        </div>
        <div className="sidebar__bottom">
          <h3>&#169;2023Shohruhmirzo</h3>
        </div>
      </div>
      <button className='close'><DensityMediumIcon onClick={showSidebar}/></button>

      
      <main>{children}</main>
    </div>
  )
}

export default Home