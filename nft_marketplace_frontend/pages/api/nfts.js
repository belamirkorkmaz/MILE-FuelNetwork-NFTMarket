
import { ethers } from 'ethers';
import { NFT_CONTRACT_ADDRESS, NFT_ABI } from '../../config';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const nftContract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_ABI, provider);

    const totalSupply = await nftContract.totalSupply();
    const nfts = [];

    for (let i = 0; i < totalSupply; i++) {
      const tokenId = await nftContract.tokenByIndex(i);
      const owner = await nftContract.ownerOf(tokenId);
      const metadata = await nftContract.tokenURI(tokenId);
      nfts.push({ tokenId, owner, metadata });
    }

    res.status(200).json({ success: true, nfts });
  } catch (error) {
    console.error('Fetching NFTs Error:', error);
    res.status(500).json({ error: 'Failed to fetch NFTs' });
  }
}
