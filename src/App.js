
import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Daily from './components/Daily';
import Rental from './components/Rental';
import Outstation from './components/Outstation';
import { useState } from 'react';
import Login from './components/Login';
import { UseSelector, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Ongoing from './components/Ongoing';
// import Login from './components/Login';

function App() {
 
  
  const {show} = useSelector(state=>state.info)
  
  return (<div>
    {show?(
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}>
    <Route index element={<Daily/>}></Route>
    <Route path='/rental' element={<Rental/>}></Route>
    <Route path='/outstation' element={<Outstation/>}></Route>
    <Route path='/ongoing' element={<Ongoing/>}></Route>
    </Route>
    </Routes>
   </BrowserRouter>
      
    </div>):(
      <div className='App'>
      <Login/>
      </div>
    )}
    </div> );
}

export default App;
