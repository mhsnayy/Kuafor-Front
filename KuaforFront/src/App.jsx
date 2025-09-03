
import React ,{ useState,useEffect } from "react"
import Test from "./components/test"

function App() {

  const [name,setName]=useState("react")


  useEffect(()=>{
    setTimeout(() => {
    setName("react güncellendi")
    }, 3000);

  },[])

  return (
    <>
    {name}
    </>
  )
}

export default App
