
# NFT Marketplace Project

## Overview
The NFT Marketplace project is a decentralized application (dApp) built on the blockchain. It allows users to mint, buy, sell, and trade non-fungible tokens (NFTs). The platform aims to provide a seamless and secure environment for users to interact with digital assets.

## Features
- **Mint NFTs**: Users can create their own NFTs by uploading digital content.
- **Buy/Sell NFTs**: Users can list their NFTs for sale or buy NFTs from other users.
- **Trade NFTs**: Direct peer-to-peer NFT trading without intermediaries.
- **Auction Mechanism**: Users can auction their NFTs with a bidding system.
- **Staking and Rewards**: Users can stake tokens to earn rewards.
- **Governance**: A DAO mechanism allowing users to vote on platform changes.
- **User Profiles**: Customizable user profiles showcasing owned and created NFTs.

## Technologies and Tools
- **Frontend**: Next.js, React, HTML, CSS, JavaScript
- **Backend**: Node.js, Express, Smart Contracts (Solidity)
- **Blockchain**: Ethereum, Fuel Network
- **Smart Contract Standards**: ERC-721, ERC-1155
- **Database**: IPFS for decentralized storage
- **Testing**: Jest, React Testing Library
- **Wallet Integration**: MetaMask

## Installation
1. Clone the repository:
   ```bash
   git clone 
   ```
2. Navigate to the project directory:
   ```bash
   cd nft-marketplace
   ```
3. Install dependencies for the frontend and backend:
   ```bash
   npm install
   ```
4. Compile and deploy smart contracts (ensure you have Truffle or Hardhat set up):
   ```bash
   truffle migrate --network development
   ```
5. Set up environment variables for connecting to the blockchain and IPFS in a `.env` file:
   ```
   INFURA_PROJECT_ID=your-infura-project-id
   PRIVATE_KEY=your-wallet-private-key
   ```
6. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
### Minting NFTs
1. Navigate to the **Mint NFT** page.
2. Upload your digital content (image, video, etc.).
3. Provide the necessary metadata (name, description, etc.).
4. Confirm the minting process via MetaMask.

### Buying/Selling NFTs
1. Browse the marketplace to view listed NFTs.
2. Select an NFT to view its details.
3. Click on **Buy** to purchase or **Sell** to list your NFT for sale.
4. Confirm transactions through MetaMask.

### Auctioning NFTs
1. Select an NFT you own to start an auction.
2. Set the starting bid and auction duration.
3. Bidders can place bids until the auction ends.

## API Routes and Descriptions
- **NFT API**:
  - `/api/nft/mint`: Mint a new NFT.
  - `/api/nft/list`: List an NFT for sale.
  - `/api/nft/buy`: Buy an NFT.
  - `/api/nft/auction`: Start an NFT auction.
- **User API**:
  - `/api/user/profile`: Fetch user profile.
  - `/api/user/update`: Update user profile.
- **Auction API**:
  - `/api/auction/start`: Start a new auction.
  - `/api/auction/bid`: Place a bid on an auction.
  - `/api/auction/close`: Close an auction.

## Frontend Pages and Descriptions
- **Home Page**: `/` - Displays featured NFTs and marketplace statistics.
- **Marketplace**: `/marketplace` - Explore and discover NFTs listed for sale.
- **Mint NFT**: `/mint` - Interface to create and mint new NFTs.
- **My NFTs**: `/my-nfts` - View and manage owned and created NFTs.
- **Auction**: `/auction` - Interface to auction NFTs and place bids.
- **Profile**: `/profile` - Manage user profile and settings.

## Security
- **Smart Contract Audits**: Ensure smart contracts are audited to prevent vulnerabilities.
- **Wallet Integration**: Use MetaMask for secure wallet interactions.
- **Data Integrity**: Store NFT metadata on IPFS for decentralized and immutable data storage.

## Contributing
Contributions are welcome! Please follow the steps below to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License.
