import React from 'react'
import HeroSection from './HeroSection'
function About() {
const data = {
  name: "Saloni Gupta",
  image: ""
}

  return (
    <div>
      <HeroSection {...data}/>
    </div>
  )
}

export default About