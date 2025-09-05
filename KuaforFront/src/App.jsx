
import React ,{ useState,useEffect } from "react"
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import PageContainer from "./containers/PageContainer"
import './App.css'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import Info from './pages/Info/Info'
import MuıButton from "./containers/deneme/MuıButton"
import MuıTextFiled from "./containers/deneme/MuıTextFiled";

function App() {

  const [id, setId]=useState(null)

  return (
    <>
    {
      /*
      <PageContainer>
       <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element ={<Admin/>}/>
        <Route path="info/:id" element={<Info />} />
      </Routes>
    </Router>
    </PageContainer>
      */
    }


    <PageContainer>
    <MuıButton/>
    <MuıTextFiled/>
    </PageContainer>


   
    </>
  )
}

export default App
