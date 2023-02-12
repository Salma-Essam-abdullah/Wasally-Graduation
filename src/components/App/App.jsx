import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from '../Navbar/Navbar';
export default class App extends Component {
  render() {
    return (
      <>
          
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              </Routes>
        
      </>
    )
  }
}
