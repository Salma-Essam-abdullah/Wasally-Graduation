
import jwtDecode from 'jwt-decode';
import React from 'react'
import { Route ,Redirect} from 'react-router-dom'


export default function ProtectedRoute(props) {
    // const token = localStorage.getItem('userToken');
    // console.log( jwtDecode(token).role )
    // // const userRole = token ? jwtDecode(token).role : null; // decodeToken is a function that extracts the role from the token
    // // // if (props.allowedRoles.includes(userRole)) {
    // // //     console.log("salma")
    // // // }
   
if(localStorage.getItem('userToken')){
        return (
        <Route path={props.path}   > <props.component/> </Route>
        )
    }
    else{
        return (<Redirect to="/login"/>)
    }
    

    
  
}
