
import React from 'react'
import { Route ,Redirect} from 'react-router-dom'
import Home from '../Home/Home'

export default function ProtectedRoute(props) {

   
if(localStorage.getItem('userToken') ){
        return (
        <Route path={props.path}   > <props.component/> </Route>
        )
    }
    else{
        return (<Redirect to="/login"/>)
    }
    

    
  
}
