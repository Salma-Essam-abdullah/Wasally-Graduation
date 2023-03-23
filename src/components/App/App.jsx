import React, { useEffect, useState } from 'react'
import { Route ,Switch, useHistory} from "react-router-dom";

import UserForm from '../UserForm/UserForm';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import Home from "../Home/Home";
import Navbar from '../Navbar/Navbar';
import StudentForm from '../StudentForm/StudentForm';
import DetailsOfShippmentUser from '../DetailsOfShippmentUser/DetailsOfShippmentUser';
import DetailsOfShipmentOfUser1 from '../DetailsOfShipmentOfUser1/DetailsOfShipmentOfUser1';
import DetailsOfShippmentUser2 from '../DetailsOfShippmentUser2/DetailsOfShippmentUser2';
import DetailsOfShipmentOfUser3 from '../DetailsOfShipmentOfUser3/DetailsOfShipmentOfUser3';
import UserDetails1 from '../UserDetails1/UserDetails1';
import DetailsOfShippmentUser4 from '../DetailsOfShipmentOfUser4/DetailsOfShipmentOfUser4';
import UserDetails2 from '../UserDetails2/UserDetails2';
import TripDetails from '../TripDetails/TripDetails';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Chat from '../Chat/Chat';
import Slider from '../Slider/Slider';
import Request from '../Requests/Request'
import Request2 from '../Requests/Request2'
import Profile from '../Profile/Profile';
import Profile2 from '../Profile2/Profile2';
import Work from '../Work/Work';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import TravelerForm from '../TravelerForm/TravelerForm';
import Trip from '../Trip/Trip';



export default function App() {
  let history = useHistory();
  let [loginUser , setLoginUser] = useState(null);

  function getUserInfo(){
    let encodedToken = localStorage.getItem('userToken');
   let userData =  jwtDecode(encodedToken);
   setLoginUser(userData);
  }


  useEffect(()=>{
    if(localStorage.getItem('userToken')){
      getUserInfo();
    }
  },[])


function logOut(){
  localStorage.removeItem('userToken');
  setLoginUser(null);
  history.push('/login');

}

    return (
      <>
      <Navbar loginUser={loginUser} logOut={logOut}/>
    
   
              <Switch>
              <ProtectedRoute path='/userform' component={UserForm}/>
              <ProtectedRoute path='/employeeform' component={EmployeeForm}/>
              <ProtectedRoute path='/studentform' component={StudentForm}/>
              <ProtectedRoute path='/detailspfshippmentuser' component={DetailsOfShippmentUser}/>
              <ProtectedRoute path='/detailspfshippmentuser1' component={DetailsOfShipmentOfUser1}/>
              <ProtectedRoute path='/detailspfshippmentuser2' component={DetailsOfShippmentUser2}/>
              <ProtectedRoute path='/detailspfshippmentuser3' component={DetailsOfShipmentOfUser3}/>
              <ProtectedRoute path='/detailspfshippmentuser4' component={DetailsOfShippmentUser4}/>
              <ProtectedRoute path='/userdetails1' component={UserDetails1}/>
              <ProtectedRoute path='/userdetails2' component={UserDetails2}/>
              <ProtectedRoute path='/tripdetails' component={TripDetails}/>
              <ProtectedRoute path='/chat' component={Chat}/>
              <ProtectedRoute path='/slider' component={Slider}/>
              <ProtectedRoute path='/request' component={Request}/>
              <ProtectedRoute path='/request2' component={Request2}/>
              <ProtectedRoute path='/profile' component={Profile}/>
              <ProtectedRoute path='/profile2' component={Profile2}/>
              <ProtectedRoute path='/work' component={Work}/>
              <ProtectedRoute path='/travelerForm' component={TravelerForm}/>
              <ProtectedRoute path='/trip' component={Trip}/>
              <Route path="/home" ><Home/> </Route>
              <Route path="/Register" render={(props)=> <Register{...props}/>}  />
              <Route path="/login"  render={(props)=><Login{...props} getUserInfo={getUserInfo}/>}/>
              <Route path="/" ><Home/> </Route>
              </Switch>
        
      </>
    )
  }
 
