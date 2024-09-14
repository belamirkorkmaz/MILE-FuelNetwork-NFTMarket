
contract NFT {
    storage {
        total_supply: u64,
        balances: b256 => u64,
        owners: b256 => b256,
        metadata: b256 => String,
    }

    abi INFT {
        fn mint(to: b256, metadata: String) -> b256;
        fn owner_of(token_id: b256) -> b256;
        fn transfer(from: b256, to: b256, token_id: b256);
    }

    impl INFT for Contract {
        fn mint(to: b256, metadata: String) -> b256 {
            let token_id = hash_of(metadata);
            self.total_supply += 1;
            self.balances[to] += 1;
            self.owners[token_id] = to;
            self.metadata[token_id] = metadata;
            emit Mint(to, token_id);
            token_id
        }

        fn owner_of(token_id: b256) -> b256 {
            self.owners[token_id]
        }

        fn transfer(from: b256, to: b256, token_id: b256) {
            let owner = self.owner_of(token_id);
            assert(owner == from, "Not the owner");
            self.balances[from] -= 1;
            self.balances[to] += 1;
            self.owners[token_id] = to;
            emit Transfer(from, to, token_id);
        }
    }
}
