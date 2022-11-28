import React from 'react';
import './App.css';
import Logo from './components/Logo.js';
import Footer from './components/Footer.js';
import ButtonTop from './components/ButtonTop.js';
import Linocut from './Linocut.js';
import Illustrations from './Illustrations.js';
import Home from './Home.js';
import Contactform from './Contactform.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {   
  return ( 
    <Router> 
      <div> 
        <div className ="Head">
          <Logo />
        </div>

        <ButtonTop />
          <Routes>
          <Route exact path="/RPortfolio" element={<Home />} />
          <Route exact path="/" element={<Home />} />
            <Route exact path="/linocut" element={<Linocut />} />
            <Route exact path="/illustrations" element={<Illustrations /> } /> 
            <Route exact path="/contactform" element={<Contactform />} />
          </Routes> 

          <Footer />
        </div>    
      </Router>  
    );
  }
export default App;