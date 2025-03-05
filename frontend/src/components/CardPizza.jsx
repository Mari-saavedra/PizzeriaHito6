import { formateaNumero } from '../utils/utiles.js'
import { useContext } from 'react'
import { CartContext } from '../store/CartContext.jsx'

const CardPizza = ({ id, img, ingredients, name, price }) => {
  const { handleAgregar } = useContext(CartContext)

  return (
    <div className='card shadow-lg border border-muted' style={{ width: '22rem', borderRadius: '10px' }}>
      <img
        src={img}
        className='card-img-top'
        alt={name}
        style={{ borderRadius: '10px 10px 0 0', height: '200px', objectFit: 'cover' }}
      />

      <div className='card-body text-center p-3'>
        <h5 className='card-title fw-bold text-start'>{`Pizza ${name}`}</h5>
        <hr className='w-100 mx-auto' />

        <p className='text-start text-muted fw-semibold'>Ingredientes:</p>
        <ul className='text-start text-muted fw-semibold ps-3'>
          {ingredients.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>

        <hr className='w-100 mx-auto' />
        <h5 className='fw-bold text-dark'>Precio: ${formateaNumero(price)}</h5>

        <div className='d-flex justify-content-between mt-3'>
          <button className='btn btn-outline-dark btn-sm'>Ver Más 👀</button>
          <button className='btn btn-dark btn-sm' onClick={() => handleAgregar({ id, name, img, price })}>
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
