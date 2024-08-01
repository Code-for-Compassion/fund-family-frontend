import { useState } from 'react'
import './App.scss';
import { Container, Navbar, Nav, NavbarBrand, NavDropdown } from 'react-bootstrap';
import './App.css'
import './index.css'
import InterestForm from './components/Interest-form';
// import DonationLink from './Donation-link';
import MainNav  from './components/Main-Nav';
import "./i18n";
import watermelon from './assets/watermelon.svg';
// import triSlice from './assets/triSlice.svg';
import { useTranslation } from "react-i18next";
import { Routes, Route } from 'react-router-dom';
import DonationLink from './components/Donation-link';
import About from './About-Us';
import Resources from './components/Resources'
import LanguageToggle from './components/Language-toggle';


function App() {
  const { t } = useTranslation();

  return (
    
  <div className="App">
  
  <h1>{t("header")}</h1>
      <img id="logo" src={watermelon} alt="slice"/>
      <LanguageToggle/> 
      {/* <img src={triSlice} alt="slice"/> */}

      <MainNav/>
      <Routes>
        <Route path="/" element={<DonationLink/>}/>
        <Route path="/" element={<DonationLink/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      </div>  
  )
}

export default App
