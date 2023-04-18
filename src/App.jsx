
import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

function App () {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting='hola' />

    </>
  )
}

export default App
