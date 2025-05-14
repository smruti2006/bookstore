import React from 'react';
import './App.css';
import Home from './Home1/Home';
import Courses from './Courses/Course';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Componets/Signup';
import Contact from './Componets/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Signup'element={<Signup/>}/>
        <Route path='/Contact'element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
