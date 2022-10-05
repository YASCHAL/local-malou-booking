import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/home/Home";
import React from "react";
import './App.css'
import Login from "./pages/Login/Login";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
      <Route path="/login" element={<Login/>}/>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
