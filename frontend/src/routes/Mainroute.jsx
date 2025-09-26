import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "../components/home"
import About from "../components/about"
import Contact from "../components/contact"
import Service from "../components/service"

const Mainroute = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Mainroute