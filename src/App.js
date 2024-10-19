import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
   <>
   <BrowserRouter>
   
   <Routes>

    <Route path='/' element={ <Navbar/>} />
  
   </Routes>
  


   </BrowserRouter>
   </>
  );
}

export default App;
