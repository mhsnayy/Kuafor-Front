import React from 'react'
import Header from './components/Header'
import KuaforList from './components/KuaforList'
import Body from "./components/Body"

function Home() {
  return (

    <>
    <div>
        <Header/>
    </div>
    <div>
      <KuaforList/>
    </div>

    </>
  )
}

export default Home