import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './legacy-pages/Home'
import About from './legacy-pages/About'
import Fleet from './legacy-pages/Fleet'
import Services from './legacy-pages/Services'
import ServiceDetail from './legacy-pages/ServiceDetail'
import HeathrowAirportTransfers from './legacy-pages/services/HeathrowAirportTransfers'
import GatwickAirportTransfers from './legacy-pages/services/GatwickAirportTransfers'
import LutonAirportTransfers from './legacy-pages/services/LutonAirportTransfers'
import StanstedAirportTransfers from './legacy-pages/services/StanstedAirportTransfers'
import CorporateExecutiveTravel from './legacy-pages/services/CorporateExecutiveTravel'
import WeddingEventCars from './legacy-pages/services/WeddingEventCars'
import LocalLongDistanceTaxi from './legacy-pages/services/LocalLongDistanceTaxi'
import StationTransfers from './legacy-pages/services/StationTransfers'
import SchoolRunService from './legacy-pages/services/SchoolRunService'
import CourierParcelDelivery from './legacy-pages/services/CourierParcelDelivery'
import WheelchairAccessibleVehicles from './legacy-pages/services/WheelchairAccessibleVehicles'
import Faq from './legacy-pages/Faq'
import Areas from './legacy-pages/Areas'
import Blogs from './legacy-pages/Blogs'
import Contact from './legacy-pages/Contact'
import Booking from './legacy-pages/Booking'
import Login from './legacy-pages/Login'
import Admin from './legacy-pages/Admin'
import ErrorBouncing from './legacy-pages/ErrorBouncing'
import CategoryPage from './legacy-pages/CategoryPage'
import ScrollToTop from './components/ScrollToTop'

function AppRoutes() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/error-bouncing" element={<ErrorBouncing />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-fleet" element={<Fleet />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/heathrow-airport-transfers" element={<HeathrowAirportTransfers />} />
          <Route path="/services/gatwick-airport-transfers" element={<GatwickAirportTransfers />} />
          <Route path="/services/luton-airport-transfers" element={<LutonAirportTransfers />} />
          <Route path="/services/stansted-airport-transfers" element={<StanstedAirportTransfers />} />
          <Route path="/services/corporate-executive-travel" element={<CorporateExecutiveTravel />} />
          <Route path="/services/wedding-event-cars" element={<WeddingEventCars />} />
          <Route path="/services/local-long-distance-taxi" element={<LocalLongDistanceTaxi />} />
          <Route path="/services/station-transfers" element={<StationTransfers />} />
          <Route path="/services/school-run-service" element={<SchoolRunService />} />
          <Route path="/services/courier-parcel-delivery" element={<CourierParcelDelivery />} />
          <Route path="/services/wheelchair-accessible-vehicles" element={<WheelchairAccessibleVehicles />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/areas-we-cover" element={<Areas />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/:category/:slug" element={<CategoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
