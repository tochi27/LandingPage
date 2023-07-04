import React from "react";
import { Routes, Route } from 'react-router-dom'
import Landingpage from "./pages/landingpage/Landingpage";


const App = () => {
  return(

    <Routes>
      <Route path="/" element={<Landingpage />}/>
    </Routes>
  )
}

export default App