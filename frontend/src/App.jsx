import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Collections from "./pages/Collections"
import Login from "./pages/Login"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"
import Navbar from "./components/Navbar"


function App() {

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/place-orders" element={<PlaceOrder/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/collection" element={<Collections/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product/:productId" element={<Product/>} />
      </Routes>
    </div>
  )
}

export default App
