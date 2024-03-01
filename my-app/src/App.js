import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Homepage/Home.jsx';
import DisplayBasket from './Components/Basket/DisplayBasket.jsx';
import DisplayItem from './Components/Item/DisplayItem.jsx';
import Logo from './Business.png';
import React from 'react';
import { useState } from "react";
import Modal from './Components/Homepage/Modal.jsx';

function App() {
  return (
    <Router>
      <Modal />
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid fixed-top ">
        <Link to="/">
            <img src={Logo} alt='Logo Icon' className="navbar-brand" width="75px" />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link" to='/'>Home</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to='/items'>Items</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to='/basket'>Basket</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/items' element={<DisplayItem />} />
          <Route path='/basket' element={<DisplayBasket />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;