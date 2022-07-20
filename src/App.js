import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { Counter } from "./components/Counter";
import {UserData} from "./components/UserData"
import { CounterContextProvider } from "./context/Context";
import {Todo} from './components/Todo'
function App() {
  return (
    <div className='App'>
      <CounterContextProvider>
        <Counter />
        <UserData/>
        <Todo/>

      </CounterContextProvider>
    </div>
  );
}

export default App;
