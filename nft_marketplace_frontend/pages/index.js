
import { useState, useEffect } from 'react';
import { getNFTs, buyNFT } from '../services/nft';

export default function Home() {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    async function fetchNFTs() {
      const allNFTs = await getNFTs();
      setNFTs(allNFTs);
    }
    fetchNFTs();
  }, []);

  return (
    <div className="nft-list">
      {nfts.map(nft => (
        <div key={nft.tokenId} className="nft-card">
          <img src={nft.metadata} alt={nft.name} />
          <h3>{nft.name}</h3>
          <p>Price: {nft.price} ETH</p>
          <button onClick={() => buyNFT(nft.tokenId)}>Buy</button>
        </div>
      ))}
      <style jsx>{`
        .nft-list {
          display: flex;
          flex-wrap: wrap;
        }
        .nft-card {
          width: 250px;
          border: 1px solid #ccc;
          margin: 10px;
          padding: 10px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
