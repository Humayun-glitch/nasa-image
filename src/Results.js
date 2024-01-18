import React from 'react';

const Results = ({ results }) => {
  return (
    <div className="results-container">
      {results.map((result) => (
        <div key={result.data[0].nasa_id} className="result-item">
          {result.data[0].media_type === 'image' ? (
            <a
              href={result.links[0].href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={result.links[0].href}
                alt={result.data[0].title}
                className="result-image"
              />
            </a>
          ) : (
            <video
              controls
              width="100%"
              height="100%"
              className="result-video"
              poster={result.links[0].href}
              onClick={() => window.open(result.links[0].href, '_blank')}
            >
              <source src={result.links[0].href} type={result.links[0].href.split('.').pop() === 'webm' ? "webm" : "mp4"} />
              Your browser does not support the video tag.
            </video>
          )}
          <p>{result.data[0].title}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
