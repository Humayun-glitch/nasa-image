import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AssetPage({ match }) {
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    const fetchAsset = async () => {
      try {
        const response = await axios.get(
          `https://images-api.nasa.gov/search?nasa_id=${match.params.id}`
        );
        setAsset(response.data.collection.items[0]);
      } catch (error) {
        console.error('Error fetching asset:', error);
      }
    };

    fetchAsset();
  }, [match.params.id]);

  return (
    <div className="asset-page">
      {asset && (
        <>
          <h2>{asset.data[0].title}</h2>
          <img src={asset.links[0].href} alt={asset.data[0].title} />
          <p>{asset.data[0].description}</p>
        </>
      )}
    </div>
  );
}

export default AssetPage;
