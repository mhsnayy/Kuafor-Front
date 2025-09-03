
import React ,{ useState,useEffect } from "react"
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import PageContainer from "./containers/PageContainer"
import Header from './pages/Admin/components/Header'

function App() {

  return (
    <>
    <PageContainer>
      <Header/>
    </PageContainer>
    </>
  )
}

export default App
