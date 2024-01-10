// SearchForm.js

import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ setResults }) => {
  const [query, setQuery] = useState('');
  const [showImages, setShowImages] = useState(true);
  const [showVideos, setShowVideos] = useState(true);

  const handleSearch = async () => {
    const mediaType = [];
    if (showImages) mediaType.push('image');
    if (showVideos) mediaType.push('video');

    try {
      const response = await axios.get('https://images-api.nasa.gov/search', {
        params: {
          q: query,
          media_type: mediaType.join(','),
        },
      });
      setResults(response.data.collection.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search query"
      />
      <label>
        Images
        <input
          type="checkbox"
          checked={showImages}
          onChange={() => setShowImages(!showImages)}
        />
      </label>
      <label>
        Videos
        <input
          type="checkbox"
          checked={showVideos}
          onChange={() => setShowVideos(!showVideos)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;