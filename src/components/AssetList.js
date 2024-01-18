import React from 'react';
import { Link } from 'react-router-dom';

function AssetList({ assets }) {
  return (
    <div className="asset-list">
      {assets.map((asset) => (
        <Link to={`/asset/${asset.data[0].nasa_id}`} key={asset.data[0].nasa_id}>
          <div className="asset-card">
            <img src={asset.links[0].href} alt={asset.data[0].title} />
            <p>{asset.data[0].title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AssetList;
