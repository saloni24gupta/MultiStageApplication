

// import './App.css'
import Contact from './components/Contact'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './components/GlobalStyle'
function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      border: "rgb(90 243 6.5)",
      hr: "#fff",
      gradient: "linear-gradient(0deg, rgb(134 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0 0 0 1px",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px", 
    },
media: { mobile: "768", tab: "968px"},
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
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
