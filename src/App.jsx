import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home/Home'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import SinglePage from './components/about/SinglePage'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/:id' element={<SinglePage />}/>
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
