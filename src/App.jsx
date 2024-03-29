import 'bootstrap/dist/css/bootstrap.css'
import NavbarComponent from './components/Navbar'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Store from './pages/Store'
import Cancel from './pages/Cancel'
import Paid from './pages/Paid'
import CartProvider from './CardContext'




function App() {

  return (
    <div className="App">
      <CartProvider>
      <Container>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
        <Routes>
           <Route index element={<Store />}/>
           <Route path='/paid' element={<Paid />}/>
           <Route path='/cancel' element={<Cancel />}/>
        </Routes>
      </BrowserRouter>
      </Container>
      </CartProvider>  
    </div>
  )
}

export default App


// this our App.jsx we just set our routes as usual we import { BrowserRouter, Routes, Route } from 'react-router-dom'
// <Container></Container> is used to create marging between navbar and the sides of the page 
// <CartProvider></CartProvider> is set into CardContext it is the react create context wich is the best way of setting functions that can be used for the all app
