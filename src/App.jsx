import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetails'
import StoreLayout from './layouts/StoreLayout'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StoreLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
