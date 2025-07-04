import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("Learn React");

  const getEvents = () => {
    fetch("/messagge")
      .then((response) => {
        response.json();
        console.log("response: "+response)
      })
      .then((data) => console.log("data: " + data))
      .catch((err) => {
        console.log("Errore: " + err);
      });
  };

  return (
    <div className="App">
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
          You shoud {message}
        </a>
        <div>
          <button onClick={() => getEvents()}>Cliccami</button>
        </div>
      </header>
    </div>
  );
};

export default App;
