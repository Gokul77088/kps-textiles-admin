import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetails'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import BenefitsStrip from './components/BenefitsStrip'
import ShopByCategory from './components/ShopByCategory'
import BrandVideo from './components/BrandVideo'
import FeaturedCollection from './components/FeaturedCollection'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <AnnouncementBar/>
      <Navbar/>
      <HeroCarousel/>
      <BenefitsStrip/>
      <ShopByCategory/>
      <BrandVideo/>
      <FeaturedCollection/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
