require("@nomiclabs/hardhat-waffle");
require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan");

//https://eth-ropsten.alchemyapi.io/v2/Wa93cQFfw7Gm1KqkFGPFzes6u6J3QPSB
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html


module.exports = {
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {
    },
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/Wa93cQFfw7Gm1KqkFGPFzes6u6J3QPSB",
      accounts: ['c4712ca74e134a010ef2d48259518ebd74216f01a00970db9e79a9da0d5cb741'],
      gasMultiplier:2
    }
  },
  etherscan: {
    apiKey: {
      ropsten: 'ETNSAAN2CA22Q1BMNTXVU2T2DKDI9JPECM'
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}