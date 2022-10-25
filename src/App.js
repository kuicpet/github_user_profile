import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components'
import Home from './pages/Home'
import Repos from './pages/Repos'
import SingleRepo from './pages/SingleRepo'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='repositories' element={<Repos />}>
          <Route path=':repositoryId' element={<SingleRepo />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
