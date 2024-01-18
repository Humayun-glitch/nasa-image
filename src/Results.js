// Results.js

import React from 'react';
import './SearchForm.js';

const Results = ({ results }) => {
  return (
    <div className="results-container">
      {results.map((result) => (
        <div key={result.data[0].nasa_id} className="result-item">
          {result.data[0].media_type === 'image' ? (
            <img
              src={result.links[0].href}
              alt={result.data[0].title}
              className="result-image"
            />
          ) : (
            <div>
              <video
                controls
                width="100%"
                height="100%"
                className="result-video"
                poster={result.links[0].href}
              >
                {/* Provide multiple source formats for better browser compatibility */}
                <source src={result.links[0].href} type="video/mp4" />
                <source src={result.links[0].href} type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <p>{result.data[0].title}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Results;
