import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <div className="miMarca">
          <a href="../public/index.html" className="miMarca"><img src={logo} className="logoNavBar" alt="logo" />Pepe Markets</a>
        </div>
        <div className="pages">
          <ul className="ulNavBar">
            <li>
              <a href="telefonos.html">Telefonos</a>
            </li>
            <li>
              <a href="computadoras.html">Computadoras</a>
            </li>
            <li>
              <a href="componentes.html">Componentes</a>
            </li>
          </ul>
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;