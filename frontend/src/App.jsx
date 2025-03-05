import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MiNavbar, Footer } from './components/index'
import { Home, Register, Login, Cart, Pizza, Profile, NotFound, Logout } from './pages/index'
import { CartContext, useCartState } from './store/CartContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const cartState = useCartState()

  return (
    <>
      <BrowserRouter>
        <CartContext.Provider value={cartState}>
          <MiNavbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/p001' element={<Pizza />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </CartContext.Provider>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
