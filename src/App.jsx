
import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import CartList from './components/CartList/CartList'
import { OrderProvider } from './context/OrderContext'
import { OrderList } from './components/OrderList/OrderList'

function App () {
  return (

    <CartProvider>
      <OrderProvider>

        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/categoria/:category' element={<ItemListContainer />} />
            <Route path='/carrito' element={<CartList />} />
            <Route path='/mis-ordenes' element={<OrderList />} />

          </Routes>

        </BrowserRouter>
      </OrderProvider>
    </CartProvider>

  )
}

export default App
