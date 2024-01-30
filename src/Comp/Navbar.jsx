import React, { useState } from 'react'
import "./navbar.css"
import logoo from './complogo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const [toggle,setToggle]=useState(false);
  const navigate =useNavigate();
   
  
const handleToggle =()=>{
  setToggle(!toggle);
  
}
const  handlelogo = () =>{
 navigate("/home");
}

  return (
    <div className='NavContainer'>
      <div className='LeftLogo'><img src={logoo} onClick={handlelogo}/></div>
      <div className='RightNavContainer'>
        <ul className='MenuConatiner'>
            <Link to="/home" className='NavCommonStyle'><li style={{ color: "white" }}>Home</li></Link>
            <Link to="/internsip" className='NavCommonStyle'><li>Internsip</li></Link>
            <Link to="/contactUs" className='NavCommonStyle'><li>ConatctUs</li></Link>
            <Link to="/services" className='NavCommonStyle'><li>Services</li></Link>
            <Link to="/registerbtn"><li><button id="rgtbtn">Register</button></li></Link>
         
        </ul>
        <div  className='hamber' onClick={handleToggle}>
          <GiHamburgerMenu />  
          {
            toggle===true?<ul className='DropMenuConatiner'>
            <Link to="/home" className='NavCommonStyle'><li style={{ color: "white" }}>Home</li></Link>   
            <Link to="/internsip" className='NavCommonStyle'><li>Internsip</li></Link>
            <Link to="/contactUs" className='NavCommonStyle'><li>ConatctUs</li></Link>
            <Link to="/services" className='NavCommonStyle'><li>Services</li></Link>
            <Link to="/registerbtn"><li style={{listStyle:"none",backgroundImage:"linear-gradient(45deg, rgb(87, 118, 185), rgb(161, 12, 129))"}}><button>Register</button></li></Link>
          
        </ul>:""
          }
        </div>

      </div>
    </div>
  )
}

export default Navbar


