

// import './App.css'
import Contact from './components/Contact'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
function App() {
  const theme = {
    colors: {
      heading: "rgb(24, 24, 29)",
      text: "rgb(24, 24, 29)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249, 249,255",
      footer_bg: "#0a1435",
      border: "rgb(90, 243,6.5)",
      h1: "#fff",
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
