import { index } from './ts-phys-hack/dist'
import logo from './logo.svg';
import './App.css';

function Wrapper(){
  return (
    <index api="http://localhost:3000">
      <App />
    </index>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            throw Error("Some bad on click button. Undefined")
          }}
        >
          Click to error
        </button>
      </header>
    </div>
  );
}

export default Wrapper;
