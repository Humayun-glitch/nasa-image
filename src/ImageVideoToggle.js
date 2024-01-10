// ImageVideoToggle.js

import React from 'react';

const ImageVideoToggle = ({ mediaType, handleToggle }) => {
  return (
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
  );
};

export default ImageVideoToggle;
