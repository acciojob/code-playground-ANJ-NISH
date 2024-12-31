import React from 'react'

export const Login = ({login , setLogin}) => {


  return (
    <div>
        <span style={{margin: '10px'}}>Login</span> <br/>
        <button onClick={()=> setLogin(!login)}>{login && 'Log Out'}{!login && 'Log In'}</button>
    </div>
  )
}
