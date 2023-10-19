import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Student from './Studetn';
import CreateStudent from './CreateStudent';
import React from 'react';
import UpdateStudent from './UpdateStudent';
import Login from './Login';
import Signup from './Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>      
        <Routes>
          <Route path='/home' element={<Student />}></Route>
          <Route path='/create' element={<CreateStudent />}></Route>
          <Route path='/update/:id' element={<UpdateStudent />}></Route>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  