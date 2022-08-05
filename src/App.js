
import './App.css';
import { BlogHome } from './Components/BlogHome'
import { Createblog } from './Components/Createblog'
import { ViewDetail } from "./Components/ViewDetail";
import {Update} from './Components/Update'
import { useSelector} from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const more = useSelector((state)=> state.Blog)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<BlogHome />}></Route>
        <Route path='/createBlog' element={<Createblog />}></Route>
        <Route path='/view' element={< ViewDetail blog={more}/>}></Route>
        <Route path='/update' element={< Update />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
