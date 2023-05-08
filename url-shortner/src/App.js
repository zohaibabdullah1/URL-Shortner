import React from "react";
import NavBar from "./NavBar"
import Home from "./Home";
import History from './History';
import Error from './Error';
import Login from "./Login";
import Protected from './Protected';
import ContactUs from './ContactUs';
import AboutUs from "./AboutUs";
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="Main-Div">
      <>
      <NavBar/>
      <ToastContainer />
    <Routes>
      <Route path='/' element={<Protected Component={Home}/>}/>
      <Route path='/history' element={<Protected Component={History}/>}/>
      <Route path='/about' element={<Protected Component={AboutUs}/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
      </>
    </div>
  );
}

export default App;
