import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    const ColorBottleGame = await ethers.getContractFactory("ColorBottleGame");
    const colorBottleGame = await ColorBottleGame.deploy();

    // await colorBottleGame.deployed();
    // console.log("ColorBottleGame deployed to:", colorBottleGame.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
