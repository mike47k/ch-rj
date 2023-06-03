import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const agregarAlCarrito = (producto, cant) => {
    const productoIndex = cart.findIndex(p => p.item.id === producto.id)

    if (productoIndex !== -1) {
      const cartCopia = [...cart]
      cartCopia[productoIndex] = {
        ...cartCopia[productoIndex],
        cantidad: cartCopia[productoIndex].cantidad + cant
      }
      setCart(cartCopia)
    } else {
      const i = { item: producto, cantidad: cant }
      setCart([...cart, i])
    }

    console.log(cart
    )
  }

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.item.id !== id))
  }

  const isInCart = (id) => {
    return cart.some((item) => item.item.id === id)
  }
  const getItem = (id) => {
    return cart.find((item) => item.item.id === id)
  }

  const emptyCart = () => {
    setCart([])
  }

  const totalCantidad = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

  const totalItems = () => {
    return cart.length
  }

  const totalCompra = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.item.price, 0)
  }

  return (
    <CartContext.Provider value={{
      cart,
      agregarAlCarrito,
      isInCart,
      emptyCart,
      totalCantidad,
      totalCompra,
      removeItem,
      totalItems,
      getItem
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
