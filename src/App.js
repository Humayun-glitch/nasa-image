// App.js
import React, { useState } from 'react';
import SearchForm from './SearchForm.js';
import Results from './Results';
import { MoonLoader } from 'react-spinners';
import './App.css';

const App = () => {
  const [results, setResults] = useState([]);
  const [mediaType] = useState('image');
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    setDarkMode(!darkMode);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // You may want to fetch new results based on the new page
    // For simplicity, we'll leave it empty here.
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <h1 className="title">NASA Image and Video Library</h1>

      {/* Toggle button for dark/light mode */}
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        <span className="toggle-text">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        <div className="toggle-icon"></div>
      </button>

      <SearchForm
        setResults={setResults}
        mediaType={mediaType}
        setLoading={setLoading}
        setTotalPages={setTotalPages} // Pass setTotalPages to update the total pages
      />

      {loading ? (
        <div className="loading">
          <MoonLoader color={darkMode ? '#fff' : '#000'} size={50} />
        </div>
      ) : (
        <Results
          results={results}
          darkMode={darkMode}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default App;
