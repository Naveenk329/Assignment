//import logo from './logo.svg';
import './App.css';
//import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      
    </Routes>
   </Router>
  );
}

export default App;
