import { Outlet } from "react-router-dom"

import AnnouncementBar from "../components/AnnouncementBar"
import Navbar from "../components/Navbar"
import HeroCarousel from "../components/HeroCarousel"
import BenefitsStrip from "../components/BenefitsStrip"
import ShopByCategory from "../components/ShopByCategory"
import BrandVideo from "../components/BrandVideo"
import FeaturedCollection from "../components/FeaturedCollection"
import Collections from "../components/Collections"

function StoreLayout() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <HeroCarousel />
      <BenefitsStrip />
      <ShopByCategory />
      <BrandVideo />
      <FeaturedCollection />
      <Collections />

      <Outlet/>
    </>
  )
}

export default StoreLayout
