import React from 'react';
import './App.css';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
