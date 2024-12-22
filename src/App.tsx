import './App.css';
import Homepage from './Views/Home';
import Login from './Views/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () =>  (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Homepage />} />
    </Routes>
  </BrowserRouter>
);

export default App
