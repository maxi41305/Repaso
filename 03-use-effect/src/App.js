import logo from './logo.svg';
import './App.css';
import { Pruebascomponents } from './components/Pruebascomponents';
import { AjaxComponnts } from './components/AjaxComponnts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   <Pruebascomponents>
   </Pruebascomponents>

   <AjaxComponnts></AjaxComponnts>
      </header>
    </div>
  );
}

export default App;
