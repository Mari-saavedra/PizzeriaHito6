import { toast } from 'react-toastify'
import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export const useCartState = () => {
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  const calcularTotal = (nuevoCarrito) => {
    const nuevoTotal = nuevoCarrito.reduce((tot, item) => tot + item.count * item.price, 0)
    setTotal(nuevoTotal)
  }

  const handleAgregar = (pizza) => {
    console.log(pizza)

    setCartItems((prevCart) => {
      // Verifica si la pizza ya existe en el carrito

      const existe = prevCart.find((item) => item.id === pizza.id)

      console.log('existe?')
      console.log(existe)

      let nuevoCarrito
      if (existe) {
        // Si la pizza ya está en el carrito, aumenta su cantidad
        nuevoCarrito = prevCart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        )
      } else {
        // Si la pizza no está en el carrito, la agrega con count = 1
        nuevoCarrito = [...prevCart, { ...pizza, count: 1 }]
      }

      calcularTotal(nuevoCarrito)
      toast('Se agregó la pizza !')
      return nuevoCarrito
    })
  }

  const handleSumar = (id) => {
    setCartItems((prevCart) => {
      const nuevoCarrito = prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
      calcularTotal(nuevoCarrito)
      return nuevoCarrito
    })
  }

  const handleRestar = (id) => {
    setCartItems((prevCart) => {
      const nuevoCarrito = prevCart
        .map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item))
        .filter((item) => item.count > 0)

      calcularTotal(nuevoCarrito)
      return nuevoCarrito
    })
  }

  return { cartItems, total, handleAgregar, handleSumar, handleRestar }
}
