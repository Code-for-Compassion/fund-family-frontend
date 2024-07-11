import { useState } from 'react'
import './App.scss';
import { Container, Navbar, Nav, NavbarBrand, NavDropdown } from 'react-bootstrap';
import './App.css'
import InterestForm from './components/Interest-form';
// import DonationLink from './Donation-link';
import MainNav  from './components/Main-Nav';
import "./i18n";
import { useTranslation } from "react-i18next";
import { Routes, Route } from 'react-router-dom';
import DonationLink from './components/Donation-link';
import About from './About-Us';
import Resources from './components/Resources'


function App() {
  const { t } = useTranslation();

  return (
  <div className="App">
  <h1>{t("header")}</h1>
      <img src="https://media.discordapp.net/attachments/1237848613325901868/1244318779534610452/family-removebg-preview.png?ex=666133eb&is=665fe26b&hm=3853716c79075cdc300573a28452e44d35072d5aa279655de53446a8c65d01e7&=&format=webp&quality=lossless&width=200&height=200" alt="arms hug heart"/>
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
