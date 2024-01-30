import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationForm from './Comp/RegistrationForm';
import Navbar from './Comp/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Comp/Home';
import ContactUs from './Comp/ContactUs';
import Intenship from './Comp/Intenship';
import Services from './Comp/Services';
function App() {
  return (
    <div className="AppContainer">
      <div className='NavContainer'><Navbar /></div>
      <div className='MainContainer'>
      <Routes>
      
      <Route  path='/home' element= {<Home/>}/>
      <Route  path='/contactUs' element={<RegistrationForm/> }/>
      <Route  path='/intenship' element={<Intenship/>}/>
      <Route  path='/services' element={<Services/>}/> 
      <Route  path='/registerbtn' element={<RegistrationForm/>}/>  
       
    </Routes>  
      </div>


     


   </div>
  );
}

export default App;
