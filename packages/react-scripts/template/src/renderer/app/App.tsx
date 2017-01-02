import DevTools from "mobx-react-devtools";
import logo from "./logo.svg";
import * as React from "react";
import "./App.css";

// const logo = require("./logo.svg");

class App extends React.Component<null, null> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <DevTools />
      </div>
    );
  }
}

export default App;
