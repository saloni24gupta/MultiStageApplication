import React, {useState} from 'react'

function Index() {
const [Data, setData] = useState("This is me Saloni Gupta")
  // let name = "this is me Saloni Gupta, Full Stack Web Developer";
  const HandleClick = () => {
    setData("Saloni Gupta Wb developer")
 let val = Data; 
    if (val === "This is me Saloni Gupta") {
      setData("SALONI GUPTA")
    }
    else {
       setData("This is me Saloni Gupta")
    }
  }
  return (

    <div>
      <p id="demo">{Data}</p>
      <button onClick={HandleClick}>Click me</button>
    </div>
  )
}

export default Index