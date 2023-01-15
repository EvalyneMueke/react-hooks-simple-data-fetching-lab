// create your App component here



import React,{ useEffect,useState } from 'react'

function App() {
    const [loading,setLoading]=useState(true)
    const[image, setImage]=useState([]);

useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((resp)=>resp.json())
    .then((data)=>{setImage(data.message)
    //console.log("data" +data.message)
    setLoading(false)
    })
},[])

  return (
    <div>
        {
     loading?"Loading..." :<img src={image} alt="A Random Dog"></img>
}</div>
  )
}

export default App