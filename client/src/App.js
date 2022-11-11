import React from 'react';
import { Login } from './component/Login';
import { Register } from './component/Register';
import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dash } from './component/Dash';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/dashboard' element={<Dash/>}/>
          </Routes>
      </BrowserRouter>
    </div>



  );
}

export default App;