import React from "react";
import "./App.css";
import Home from "./Home1/Home";
import Courses from "./Courses/Course";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Componets/Signup";
import Contact from "./Componets/Contact";
import { useAuth } from "./Context/Authprovider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Courses"
          element={authUser ? <Courses /> : <Navigate to="/Signup" />}
        />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
