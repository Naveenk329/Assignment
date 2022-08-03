import './App.css';
import React, { useState,createContext } from 'react';
import Parent from './comp1';
export const UserContext = createContext();
function App() {
  const [counter, setCounter] = useState(0);
  return(
    <UserContext.Provider value={[counter,setCounter]}>
      <Parent/>
    </UserContext.Provider>
  );
}
export default App;