import { createContext, useState } from 'react'

export const OrederContext = createContext()

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([])

  const addOrder = (cart) => {
    const or = {
      id: 'asdasdsd',
      items: cart,
      date: new Date(),
      status: 'generado',
      buyer: 'juan'

    }
    setOrder([...order, or])
    console.log(order)
  }
  return (
    <OrederContext.Provider value={{
      order,
      addOrder
    }}
    >
      {children}
    </OrederContext.Provider>
  )
}
