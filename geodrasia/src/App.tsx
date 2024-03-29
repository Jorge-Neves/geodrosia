import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Gedrosia</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <Button />
      </header>
    </div>
  );
}

export default App;
