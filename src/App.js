import React,{useState} from 'react';
import './App.css';
import { Child } from "./components/Child";
import { CurrentDate } from "./components/CurrentDate";
import {List  } from "./components/List";


function App() {
  const [message]=useState('Welcome to Techmojo!')

  return (
    <div className="App">
      <Child state="DEFAULT"></Child>
      <Child state="BAR"></Child>
      <Child state="FOO"></Child>
      <div>
        <h3>What date is it ?</h3>
        <CurrentDate  date = {Date()}/>
        <p>{message}</p>
      </div>
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List ele={["Walk","Cook","Bake"]}/>
        <h2>Tomorrow</h2>
        <List ele={["Sudy","Code","Eat"]}/>

      </div>
    </div>
    
  );
}

export default App;
