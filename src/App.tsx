import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import logo from './logo.svg';
import './App.css';

function App() {
  let number = 2;
  number = 32;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vercel with github actions</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React?
        </a>
      </header>
      <img src="https://www.w3schools.com/images/w3schools_green.jpg" />
      <Analytics />
    </div>
  );
}

export default App;
