import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const { PRIVATE_KEY, COREBLOCKCHAINTESTNET } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    hardhat: {},  // Keep hardhat network default
    coreTestnet: {
      url: COREBLOCKCHAINTESTNET,
      accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : [],
    }
  }
};

export default config;
