// Results.js
import React from 'react';

const Results = ({ results, darkMode, currentPage, totalPages, onPageChange }) => {
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedResults = results.slice(startIndex, endIndex);

  return (
    <div className="results-container">
      {displayedResults.map((result) => (
        <div key={result.data[0].nasa_id} className="result-item">
          <a
            href={result.links[0].href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {result.data[0].media_type === 'video' ? (
              <video
                controls
                width="100%"
                height="100%"
                className="result-video"
                poster={result.links[0].href}
              >
                <source src={result.links[0].href} type="video/mp4" />
                <p>Your browser does not support the video tag.</p>
              </video>
            ) : (
              <img
                src={result.links[0].href}
                alt={result.data[0].title}
                className="result-image"
              />
            )}
          </a>
          <p>{result.data[0].title}</p>
        </div>
      ))}
      
      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Results;
