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
import TravelerTrip from '../TravelerTrip/TravelerTrip';

import userShipment from '../UserShipments/UserShipments'
import userShipment2 from '../UserShipments2/UserShipments2'
import UpdateDetailsOfShipments from '../UpdateDetailsOfShipments/UpdateDetailsOfShipments';
import UpdateDetailsOfTrips from '../UpdateDetailsOfTrips/UpdateDetailsOfTrips';
import ShipmentSendTrip from '../ShipmentSendTrip/ShipmentSendTrip';
import RequestSendBuy from '../RequestSendBuy/RequestSendBuy';
import RequestSendDeliver from '../RequestSendDeliver/RequestSendDeliver';
import AcceptOrDeclineShipment from '../AcceptOrDeclineShipment/AcceptOrDeclineShipment';

import QrCode from '../QrCode/QrCode';
import QrcodeRedirect from '../qrcodeRedirect/QrcodeRedirect';
import UserRequests from '../UserRequests/UserRequests';
import UserRequestsDeliver from '../UserRequestsDeliver/UserRequestsDeliver';
import AcceptOrDeclineTrip from '../AcceptOrDeclineTrip/AcceptOrDeclineTrip';
import AcceptedRequests from '../AcceptedRequests/AcceptedRequests';
import AcceptedrequestsDeliver from '../AcceptedRequestsDeliver/AcceptedRequestsDeliver';
import ViewRequestAfterAcceptance from '../ViewRequestAfterAcceptance/ViewRequestAfterAcceptance';
import ViewRequestAfterAcceptanceBuy from '../ViewRequestAfterAcceptanceBuy/ViewRequestAfterAcceptanceBuy.jsx';


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
              <ProtectedRoute path='/detailspfshippmentuser/:tripId' component={DetailsOfShippmentUser}/>
              <ProtectedRoute path='/detailspfshippmentuser1/:requestId' component={DetailsOfShipmentOfUser1}/>
              
              <ProtectedRoute path='/acceptOrDeclineShipment/:requestId' component={AcceptOrDeclineShipment}/>


              <ProtectedRoute path='/userRequests' component={UserRequests}/>
              <ProtectedRoute path='/userRequestsDeliver' component={UserRequestsDeliver}/>
              <ProtectedRoute path='/acceptedrequests' component={AcceptedRequests}/>
              <ProtectedRoute path='/acceptedrequestsDeliver' component={AcceptedrequestsDeliver}/>
              <ProtectedRoute path='/viewRequestAfterAcceptance/:requestId' component={ViewRequestAfterAcceptance}/>
              <ProtectedRoute path='/ViewRequestAfterAcceptanceBuy/:requestId' component={ViewRequestAfterAcceptanceBuy}/>

              <ProtectedRoute path='/UpdateDetailsOfShipments/:requestId' component={UpdateDetailsOfShipments}/>
              <ProtectedRoute path='/acceptOrDeclineTrip/:tripId' component={AcceptOrDeclineTrip}/>
              <ProtectedRoute path='/detailspfshippmentuser2' component={DetailsOfShippmentUser2}/>
              <ProtectedRoute path='/detailspfshippmentuser3' component={DetailsOfShipmentOfUser3}/>
              <ProtectedRoute path='/detailspfshippmentuser4' component={DetailsOfShippmentUser4} />
              <ProtectedRoute path='/shipmentSendTrip/:tripId' component={ShipmentSendTrip} />
              <ProtectedRoute path='/userShipment' component={userShipment}/>
              <ProtectedRoute path='/userShipment2' component={userShipment2}/>
              <ProtectedRoute path='/updateDetailsOfTrips/:tripId' component={UpdateDetailsOfTrips}/>
              <ProtectedRoute path='/userdetails2' component={UserDetails2}/>
              <ProtectedRoute path='/tripdetails' component={TripDetails}/>
              <ProtectedRoute path='/chat' component={Chat}/>
              <ProtectedRoute path='/slider' component={Slider}/>
              <ProtectedRoute path='/request' component={Request}/>
              <ProtectedRoute path='/request2' component={Request2}/>
              <ProtectedRoute path='/profile' component={Profile}/>
              <ProtectedRoute path='/profile2'  component={Profile2}/>
              <ProtectedRoute path='/work' component={Work}/>
              <ProtectedRoute path='/travelerForm' component={TravelerForm}/>
              <ProtectedRoute path='/trip' component={Trip}/>
              <ProtectedRoute path='/travelertrips' component={TravelerTrip}/>
              <ProtectedRoute path='/requestSendBuy' component={RequestSendBuy}/>
              <ProtectedRoute path='/requestSendDeliver' component={RequestSendDeliver}/>
              <ProtectedRoute path='/qrcode' component={QrCode}/>
              <ProtectedRoute path='/qrcodeRedirect' component={QrcodeRedirect}/>

              <Route path="/home" ><Home/> </Route>
              <Route path="/Register" render={(props)=> <Register{...props}/>}  />
              <Route path="/login"  render={(props)=><Login{...props} getUserInfo={getUserInfo}/>}/>
              <Route path="/" ><Home/> </Route>
              </Switch>
        
      </>
    )
  }
 
