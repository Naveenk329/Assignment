//import logo from './logo.svg';
import './App.css';
import { User } from "./components/User";
import { User2 } from "./components/User2";
import { Products } from "./components/Products";
import { FilterProduct,OnClickEvent } from "./components/FilterProduct";

function App() {
  return (
    <div className="App">
      <User />
      <User2 />
      <div>
        <Products />
      </div>
      <div>
        <FilterProduct/>
      </div>



     
    </div>
  );
}

export default App;
