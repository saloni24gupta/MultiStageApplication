import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../style/Button'

import BackGround from './Image'
function HeroSection() {
  return (
    <Wrapper>
<div className="container grid grid-two-column">
    <div className="section-hero-data">
        <p className='section-TOP-data'>THIS IS ME</p>
        <h1 className='hero-HEADING'>SALONI GUPTA</h1>
        <p className='hero-para'>
            I am Saloni Gupta. A full stack Developer,
            I am Saloni Gupta. A full stack Developer 
        </p>
        <Button className="btn-hireme-btn">
        <NavLink to="/contact">Hire me</NavLink>
    </Button>
    </div>
   
    <div className="section-hero-image">
        <BackGround/> 
    </div>
</div>
    </Wrapper>
  )
}
export default HeroSection
const Wrapper = styled.section`

padding: 9rem 0;
.section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.btn {
    max-width: 16rem;
}

.hero-top-data{
    text-transform: uppsercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({theme}) => {theme.colors.helper}}
}

.hero-heading {
   text-transform: uppercase;
   font-size: 6.4rem;
}

.hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
}

.section-hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

Picture {
    text-align: center;
}

.hero-img{
    max-width: 80%;
}
`

const Picture = styled.div`
img {
    height: 400px;
    width: 400px;
}
`

