import React from 'react'

export const Login = ({login , setLogin}) => {


  return (
    <div>
        <span style={{margin: '10px'}}>Login</span>
        <button onClick={()=> setLogin(!login)}>{login && 'Logout'}{!login && 'Login'}</button>
    </div>
  )
}
