import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import { useEffect, useState } from 'react'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)

  const getPizzas = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/pizzas')
      const data = await res.json()
      setPizzas(data)
    } catch (error) {
      console.error('Error al obtener las pizzas:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPizzas()
  }, [])

  return (
    <>
      <Header />
      <div className='container p-3'>
        {loading
          ? (
            <div className='d-flex justify-content-center align-items-center' style={{ height: '50vh' }}>
              <div className='spinner-border text-primary' role='status' />
            </div>
            )
          : (
            <div className='d-flex justify-content-center gap-3 flex-wrap p-0 m-0'>
              {pizzas.map((pizza) => (
                <CardPizza
                  key={pizza.id}
                  id={pizza.id}
                  img={pizza.img}
                  ingredients={pizza.ingredients}
                  name={pizza.name}
                  price={pizza.price}
                />
              ))}
            </div>
            )}
      </div>
    </>
  )
}

export default Home
