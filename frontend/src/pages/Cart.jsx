import { formateaNumero } from '../utils/utiles.js'

import { useContext } from 'react'
import { CartContext } from '../store/CartContext.jsx'

const Cart = () => {
  const { cartItems, total, handleSumar, handleRestar } = useContext(CartContext)

  return (
    <div className='container mt-2 mb-2 p-3 bg-muted border border-1 border-secondary' style={{ maxWidth: '30rem' }}>
      <h4>Detalle del pedido:</h4>

      {cartItems.length === 0
        ? (
          <p className='text-center mt-3'>Tu carrito está vacío.</p>
          )
        : (
          <div className='d-flex flex-column gap-2 mt-2 mb-2'>
            {cartItems.map(({ id, img, name, price, count }) => (
              <div key={id} className='d-flex align-items-center gap-2'>
                <img
                  className='border border-1 border-muted'
                  src={img}
                  alt={name}
                  style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                />

                <div className='d-flex justify-content-between flex-grow-1 m-2'>
                  <p className='fw-bold m-0'>{name}</p>
                  <p className='fw-bold m-0'>${formateaNumero(price)}</p>
                </div>

                <div className='d-flex align-items-center'>
                  <button
                    style={{ width: '30px', height: '30px', fontSize: '12px' }}
                    className='btn btn-outline-danger'
                    onClick={() => handleRestar(id)}
                  >
                    -
                  </button>

                  <span className='border-0 fw-bold text-center' style={{ width: '30px', fontSize: '14px' }}>
                    {count}
                  </span>

                  <button
                    style={{ width: '30px', height: '30px', fontSize: '12px' }}
                    className='btn btn-outline-primary'
                    onClick={() => handleSumar(id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          )}

      <h4 className='mt-4 mb-4'>Total: $ {formateaNumero(total)}</h4>
    </div>
  )
}

export default Cart
