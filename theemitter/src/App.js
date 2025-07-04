import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [message, setMessage] = useState('Learn React');

  useEffect(() => {
    fetch('/events').then(
      response  => response.json()
    ).then(data => setMessage(data.message))

    const eventSource = new EventSource('https://fabriziogigli.github.io/theEmitter:3000/events');

    if(typeof eventSource !== "undefined") {
      console.log("OK");
    }
    else {
      console.log("KO");
    }

    eventSource.onmessage = event => {
      const eventData = JSON.parse(event.data);
      setMessage(eventData.message);
    }

    return () => eventSource.close();
  }, [])

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
      </header>
    </div>
  );
}

export default App;
