import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ColorBottleGameModule = buildModule("ColorBottleGameModule", (m) => {
    const colorBottleGame = m.contract("ColorBottleGame");

    return { colorBottleGame };
});

export default ColorBottleGameModule;
