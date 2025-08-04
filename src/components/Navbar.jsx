import React from 'react'

const Navbar = ({test,showSidebar, setShowSidebar}) => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <img src="" alt="Lunix" />
        </div>
        <div className='nav-list'>
          <a href="#Home" onClick={()=>setShowSidebar(false)}>Home</a>
          <a href="#Group" onClick={()=>test("25vh")}>Group</a>
          <a href="#Prices" onClick={()=>test("60vh")}>Prices</a>
          <a href="#AboutUs" onClick={()=>test("7vh")}>About Us</a>
          <a href="#Services" onClick={()=>test("42.5vh")}>Services</a>
          <a href="#ContactUs" onClick={()=>test("77.7vh")}>Contact Us</a>
        </div>
        <div className='nav-lang'>
          <select name="" id="">
            <option value="">
              O'zbekcha
            </option>
            <option value="">
              Узбекча
            </option>
            <option value="">
              Русский
            </option>
          </select>
        </div>
    </div>
  )
}

export default Navbar