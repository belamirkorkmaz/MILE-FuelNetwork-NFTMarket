
contract Marketplace {
    storage {
        listings: b256 => Listing,
    }

    struct Listing {
        seller: b256,
        price: u64,
        token_id: b256,
        active: bool,
    }

    abi IMarketplace {
        fn list(token_id: b256, price: u64);
        fn buy(token_id: b256);
        fn get_listing(token_id: b256) -> Listing;
    }

    impl IMarketplace for Contract {
        fn list(token_id: b256, price: u64) {
            let seller = msg_sender();
            let nft_contract = abi(INFT, NFT_CONTRACT_ADDRESS);
            assert(nft_contract.owner_of(token_id) == seller, "Not the owner");

            self.listings[token_id] = Listing {
                seller,
                price,
                token_id,
                active: true,
            };
            emit Listed(seller, token_id, price);
        }

        fn buy(token_id: b256) {
            let buyer = msg_sender();
            let listing = self.listings[token_id];
            assert(listing.active, "Listing not active");

            // Transfer the payment to the seller
            transfer(listing.seller, listing.price);

            // Transfer the NFT ownership
            let nft_contract = abi(INFT, NFT_CONTRACT_ADDRESS);
            nft_contract.transfer(listing.seller, buyer, token_id);

            // Mark listing as inactive
            listing.active = false;
            emit Bought(buyer, token_id, listing.price);
        }

        fn get_listing(token_id: b256) -> Listing {
            self.listings[token_id]
        }
    }
}
