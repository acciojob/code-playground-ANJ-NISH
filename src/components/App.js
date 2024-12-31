
import React, { useState } from "react";
import './../styles/App.css';
import { Login } from "./Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

const App = () => {

  const [login, setLogin]=useState(false);

  return (
    <div className="main-container">
    
    {!login && <p style={{margin: '15px'}}>You are not authenticated, Please login first</p>}
    {login && <p style={{margin: '15px'}}>Logged in, Now you can enter Playground</p>}
        
        
        <BrowserRouter>
        <ul>
          <li><Link to="/playground">PlayGround</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
            <Routes>
              <Route path="/login" element={<Login login={login} setLogin={setLogin}/>}/>
              <Route path="/playground" element={<PrivateRoute login={login}/>}/>
              <Route path="/*" element={<p>Error Page not found</p>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
