require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
require('@nomiclabs/hardhat-etherscan')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // forking: {
      //   url: process.env.FORKING_URL_ARBITRUM
      // },
      // mining: {
      //   auto: true,
      //   interval: [10000, 20000]
      // }
    },
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.RINKEBY_PKEY]
    },
    mainnet: {
      url: 'https://mainnet.optimism.io',
      accounts: [process.env.OPTIMISM_KEY]
    },
    arbitrum_rinkeby: {
      url: 'https://rinkeby.arbitrum.io/rpc',
      accounts: [process.env.RINKEBY_PKEY]
    },
    arbitrum: {
      url: 'https://arb1.arbitrum.io/rpc',
      accounts: [process.env.ARBITRUM_PKEY]
    },
    optimism_kovan: {
      url: 'https://kovan.optimism.io',
      accounts: [process.env.OPTIMISM_KEY]
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      chainId: 43113,
      accounts: [process.env.FUJI_PKEY],
    },
    zksync: {
      url: 'https://zksync2-testnet.zksync.dev',
      chainId: 280,
      accounts: [process.env.ZKSYNC_PKEY],
    },
  },
  solidity: {
    compilers: [{
      version: "0.8.7",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }]
  },
  etherscan: {
    apiKey: process.env.OP_KEY
  }
};