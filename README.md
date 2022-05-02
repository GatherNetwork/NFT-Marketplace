# NFT Marketplace

## Requirements For Initial Setup

- Install [NodeJS](https://nodejs.org/en/), should work with any node version below 16.5.0
- Install [Hardhat](https://hardhat.org/)

## Setting Up

### 1. Clone/Download the Repository

### 2. Install Dependencies:

```bash
$ cd nft_marketplace
$ npm install
```

### 3. Boot up local development blockchain

```bash
$ cd nft_marketplace
$ npx hardhat node
```

### 4. Connect development blockchain accounts to Metamask

- Copy private key of the addresses and import to Metamask
- Connect your metamask to gather testnet blockchain.


### 5. Migrate Smart Contracts

```bash
npx hardhat run src/backend/scripts/deploy.js --network gather_testnet
```

### 6. Run Tests

```bash
$ npx hardhat test
```

### 7. Launch Frontend

```bash
$ npm run start
```