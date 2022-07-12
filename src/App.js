
import './App.css';
import { Parent } from "./components/parent";
import { TypeOfFood } from "./components/Food/TypeOfFood";

function App() {
  return (
    <div>
      <h1>Techmojo Solution Pvt Ltd.</h1>
      <p>TechMojo is an outsourced product development and technology services company, specialising in building massively scalable web and mobile based products.</p>
      <ul>
        <li>Payment Processing</li>
        <li>Marketing Automation</li>
        <li>IT Automation</li>
      </ul>
      <Parent />
      <TypeOfFood />

    </div>
  );
}

export default App;
