import './App.css';
import React from 'react';
import Cards from './components/cards.jsx';


const App = () => {
  return (
    <>
      <div className="Header">
        <h1>Top 10 Anime</h1>
      </div>
        <Cards />
      </>
  );
}

export default App;