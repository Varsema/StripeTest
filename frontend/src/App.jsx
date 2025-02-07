import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Checkout from './components/Checkout'
import SuccessPage from './components/SuccessPage'
import CancelPage from './components/CancelPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path='checkout/' index element={<Checkout />} />
          <Route path='/success' element={<SuccessPage />}/>
          <Route path='/cancel' element={<CancelPage />}/>
        </Routes>
      </Router>
    </>
  )

}

export default App
