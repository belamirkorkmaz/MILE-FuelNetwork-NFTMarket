
import { ethers } from 'ethers';
import { MARKETPLACE_CONTRACT_ADDRESS, MARKETPLACE_ABI } from '../../config';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { tokenId, price } = req.body;

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const marketplaceContract = new ethers.Contract(MARKETPLACE_CONTRACT_ADDRESS, MARKETPLACE_ABI, signer);

    const tx = await marketplaceContract.list(tokenId, ethers.utils.parseEther(price.toString()));
    await tx.wait();

    res.status(200).json({ success: true, transaction: tx });
  } catch (error) {
    console.error('Listing Error:', error);
    res.status(500).json({ error: 'Failed to list NFT' });
  }
}
