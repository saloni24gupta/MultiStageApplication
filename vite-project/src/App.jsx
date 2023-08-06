

import './App.css'
import Contact from './components/Contact'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
function App() {
  return(
  <>

  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/about" element={<About/>}/>

  </Routes>
  <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
