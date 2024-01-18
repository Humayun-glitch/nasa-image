// SearchForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './SearchForm.css';

const SearchForm = ({ setResults, setLoading }) => {
  const [query, setQuery] = useState('');
  const [showImages, setShowImages] = useState(true);
  const [showVideos, setShowVideos] = useState(true);

  const handleSearch = async () => {
    const mediaType = [];
    if (showImages) mediaType.push('image');
    if (showVideos) mediaType.push('video');

    try {
      setLoading(true);
      const response = await axios.get('https://images-api.nasa.gov/search', {
        params: {
          q: query,
          media_type: mediaType.join(','),
        },
      });
      setResults(response.data.collection.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-form">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search query"
        className="search-input"
      />
      <div className="filter-container">
        <label className="filter-label">
          Images
          <input
            type="checkbox"
            checked={showImages}
            onChange={() => setShowImages(!showImages)}
            className="filter-checkbox"
          />
        </label>
        <label className="filter-label">
          Videos
          <input
            type="checkbox"
            checked={showVideos}
            onChange={() => setShowVideos(!showVideos)}
            className="filter-checkbox"
          />
        </label>
      </div>
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchForm;

