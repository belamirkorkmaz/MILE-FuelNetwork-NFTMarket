
import { ethers } from 'ethers';
import { NFT_CONTRACT_ADDRESS, NFT_ABI } from '../../config';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, metadata } = req.body;

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const nftContract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);

    const tx = await nftContract.mint(to, metadata);
    await tx.wait();

    res.status(200).json({ success: true, transaction: tx });
  } catch (error) {
    console.error('Minting Error:', error);
    res.status(500).json({ error: 'Failed to mint NFT' });
  }
}
