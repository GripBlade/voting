require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@chainlink/env-enc").config()



const SEPOLIA_URL = process.env.SEPOLIA_SEPOLIA_URLURL;

const PRIVATE_KEY = process.env.PRI_KEY;
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.27",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
