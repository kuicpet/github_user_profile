import React from 'react'
import { Route,Routes } from 'react-router-dom'
import {Footer, Header} from './components'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App