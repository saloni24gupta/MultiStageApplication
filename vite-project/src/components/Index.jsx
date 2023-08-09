import React from 'react'

function Index() {
    let name = "this is me Saloni Gupta, Full Stack Web Developer";   
  const HandleClick = () => {
     name = "SALONI GUPTA"
     console.log(name)
  }
    return (

    <div>
        <p>{name}</p>
        <button onClick={HandleClick}>Click me</button>
    </div>
  )
}

export default Index