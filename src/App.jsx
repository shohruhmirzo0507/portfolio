import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Portfolies from './components/portfolies/Portfolies'
import Blogs from './components/blogs/Blogs'
import Contact from './components/contact/Contact'
import Side__home from './components/Side__home/Side__home'

function App() {

  return (
    <div>
        <BrowserRouter>
          <Home>
            <Routes>
              <Route path='/' element={<Side__home />} />
              <Route path='/about' element={<About />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/portfolios' element={<Portfolies />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </Home>
        </BrowserRouter>
    </div>
  )
}

export default App
