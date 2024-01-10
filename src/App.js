// App.js

import React, { useState } from 'react';
import SearchForm from './SearchForm';
import Results from './Results';
import './App.css';

const App = () => {
  const [results, setResults] = useState([]);
  const [mediaType, setMediaType] = useState('image');

  const handleToggle = (type) => {
    setMediaType(type);
  };

  return (
    <div className="container">
      <h1>NASA Image and Video Library</h1>
      <div className="toggle-container">
        <label>
          Images
          <input
            type="checkbox"
            checked={mediaType === 'image'}
            onChange={() => handleToggle('image')}
          />
        </label>
        <label>
          Videos
          <input
            type="checkbox"
            checked={mediaType === 'video'}
            onChange={() => handleToggle('video')}
          />
        </label>
      </div>
      <SearchForm setResults={setResults} mediaType={mediaType} />
      <Results results={results} />
    </div>
  );
};

export default App;
