
import { useState } from 'react';

export default function Mint() {
  const [metadata, setMetadata] = useState('');

  const mintNFT = async () => {
    const response = await fetch('/api/mint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ metadata }),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <h2>Mint NFT</h2>
      <input
        type="text"
        value={metadata}
        onChange={(e) => setMetadata(e.target.value)}
        placeholder="Metadata URI"
      />
      <button onClick={mintNFT}>Mint</button>
    </div>
  );
}
