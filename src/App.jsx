
import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App () {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/categoria/:category' element={<ItemListContainer />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
