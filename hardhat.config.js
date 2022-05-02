require("@nomiclabs/hardhat-waffle");
const dotenv = require('dotenv').config();
const gatherPrivateKey = process.env.gatherPrivateKey;
module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
      accounts: []
    },
    gather_testnet: {
     url: "https://testnet.gather.network",
     accounts: [process.env.gatherPrivateKey],
     port: 80,
     network_id: "*",
      // gas: 4700000,
      // skipDryRun: true
    },
  },
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};
