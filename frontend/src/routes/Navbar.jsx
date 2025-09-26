import { Link } from "react-router-dom"
import "../styles/navbar.css"
import { useState } from "react"

const Navbar = () => {
  const [isopen, setisopen] = useState(false);

  return (
    <>
      <div className={`${!isopen ? "navbar":""} `}>
       {!isopen && <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s" alt="" />
        </div>}
        <div className="navigation">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/service"}>Services</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        {!isopen && <div className="menu" onClick={() => setisopen(true)}>
          <i className="fa fa-bars"></i>
        </div>}
      </div>
      <div className={`mobilenav ${isopen ? "active":""}`}>
        <div className="close" onClick={() => setisopen(false)}
        ><i class="fa fa-close"></i>
        </div>
        <h1>Navbar</h1>
        <div className="line"></div>
        <div onClick={()=>setisopen(false)} className="mobilenavbar">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/service"}>Services</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/profile"}>Profile</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar