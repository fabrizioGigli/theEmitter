import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("Learn React");

  // const eventSource = new EventSource("https://fabrizioGigli.github.io");
  const eventSource = new EventSource("https://fabriziogigli.github.io/theEmitter/message");

  if (typeof eventSource != "undefined") {
    console.log("Yes");
  }

  eventSource.onmessage = (event) => {
    console.log("Raw data: "+event);
    const eventData = JSON.parse(event.data);
    console.log(eventData);

    return () => eventSource.close();
  };

  eventSource.onerror = error => {
    debugger;
    console.log("Errore: "+error);
  }

  const getEvents = () => {
    fetch("/messagge")
      .then((response) => {
        console.log("response: " + response);
        response.json();
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
