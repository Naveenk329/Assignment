import logo from './logo.svg';
import './App.css';
import {createContext, useState} from 'react'
import Dashboard from './Dashboard';
const usercontext = createContext("");
function App() {
  const [title] = useState("work");
  const [username] = useState("Naveen");
  const [activeprofiles] = useState("s1");
  return (
    <usercontext.Provider value={[title,username,activeprofiles]}>
      <h1>App</h1>
      <h4>Title:   {title}<br/>Username:   {username}<br/>Activeprofiles:   {activeprofiles}</h4>
      <Dashboard/>
    </usercontext.Provider>
  );
}

export default App;
export {usercontext};
