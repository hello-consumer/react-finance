import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './Template';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World
          </p>
<ul>
{[1, 2, 3, 4, 5, 6].map(function(e){ return <li>{e}</li>})}
</ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Template></Template>
        </header>
      </div>
    );
  }
}

export default App;
