import logo from './logo.svg';
import './App.css';
import { MiPrimerEstad } from './components/MiPrimerEstad';
import { EjercisioComponent } from './components/EjercisioComponent';

function App() {

const fecha = new Date();
const yearActual = fecha.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Hook useState con Maxi Torales</h1>

       <EjercisioComponent year={yearActual}></EjercisioComponent>
       <MiPrimerEstad></MiPrimerEstad>
      </header>
    </div>
  );
}

export default App;
