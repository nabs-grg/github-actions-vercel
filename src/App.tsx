import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Analytics } from '@vercel/analytics/react';

function App() {
  let number = 2;
  number = 32;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((result) => {
        // console.log(result.data);
        setPosts(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(posts);

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
