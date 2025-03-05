import { useCart } from '../store/CartContext.jsx'
import { formateaNumero } from '../utils/utiles.js'

const Cart = () => {
  const { cartItems, total, handleSumar, handleRestar } = useCart()

  return (
    <div className='container mt-2 mb-2 p-3 bg-muted border border-1 border-secondary' style={{ width: '30rem' }}>
      <div className='d-flex flex-column'>
        <h4>Detalle del pedido:</h4>
        <div className='d-flex flex-column gap-2 mt-2 mb-2'>
          {cartItems.map((cart) => (
            <div key={cart.id} className='d-flex flex-row align-items-center gap-2'>
              <img
                className='border border-1 border-muted'
                src={cart.img}
                alt={cart.name}
                style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
              />

              <div className='d-flex justify-content-between flex-grow-1 m-2'>
                <p className='fw-bold m-0'>{cart.name}</p>
                <p className='fw-bold m-0'>${formateaNumero(cart.price)}</p>
              </div>

              <div className='d-flex'>
                <button
                  style={{ width: '30px', height: '30px', fontSize: '10px' }}
                  className='btn btn-outline-danger'
                  onClick={() => handleRestar(cart.id)}
                >-
                </button>

                <input
                  type='text'
                  value={cart.count}
                  readOnly
                  className='border-0 fw-bold text-center'
                  style={{ width: '30px', height: '30px', fontSize: '13px' }}
                />

                <button
                  style={{ width: '30px', height: '30px', fontSize: '10px' }}
                  className='btn btn-outline-primary'
                  onClick={() => handleSumar(cart.id)}
                >+
                </button>
              </div>
            </div>
          ))}
        </div>

        <h4 className='mt-4 mb-4'>Total: $ {formateaNumero(total)}</h4>
      </div>
    </div>
  )
}

export default Cart
