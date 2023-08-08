import React from 'react'
import background from '../assets/web.jpg'
import styled from 'styled-components'
function BackGround() {
  return (
    <Picture className='myimg'>
      <img src={background} alt="" className='hero-img' />
    </Picture>
  )
}

export const Picture = styled.div`
img 
{
    height: 400px;
    width: 400px;
}
`
export default BackGround