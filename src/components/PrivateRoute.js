import React from 'react'
import {Navigate} from 'react-router-dom';

export const PrivateRoute = ({login}) => {


  return (
    login===true? <div>Hi Welcome to Code PlayGround</div> : <Navigate to="/login"/>
  )
}
