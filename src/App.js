import React from 'react';
import './App.css';
import About from './components/About/About';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
