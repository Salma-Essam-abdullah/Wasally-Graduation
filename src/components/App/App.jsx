import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import UserForm from '../UserForm/UserForm';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import Home from "../Home/Home";
import Navbar from '../Navbar/Navbar';
import StudentForm from '../StudentForm/StudentForm';
import DetailsOfShippmentUser from '../DetailsOfShippmentUser/DetailsOfShippmentUser';
export default class App extends Component {
  render() {
    return (
      <>
          
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/userform" element={<UserForm />} />
              <Route path="/studentform" element={<StudentForm />} />
              <Route path="/employeeform" element={<EmployeeForm />} />
              <Route path="/detailspfshippmentuser" element={<DetailsOfShippmentUser />} />

              </Routes>
        
      </>
    )
  }
}
