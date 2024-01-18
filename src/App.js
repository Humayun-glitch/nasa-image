// App.js

import React, { useState } from 'react';
import SearchForm from './SearchForm';
import Results from './Results';
import './App.css';

const App = () => {
  const [results, setResults] = useState([]);
  const [mediaType] = useState('image');



  return (
    <div className="container">
      <h1>NASA Image and Video Library</h1>
      <div className="toggle-container">
      </div>
      <SearchForm setResults={setResults} mediaType={mediaType} />
      <Results results={results} />
    </div>
  );
};

export default App;