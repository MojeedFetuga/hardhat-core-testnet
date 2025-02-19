// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract ColorBottleGame {
    uint256[5] private correctArrangement;
    uint256 public attempts;
    bool public gameActive;
    address public owner;

    event AttemptResult(uint256 correctPositions);
    event GameReset(uint256[5] newArrangement);

    constructor() {
        owner = msg.sender;
        _shuffleBottles();
    }

    function _shuffleBottles() private {
        for (uint256 i = 0; i < 5; i++) {
            correctArrangement[i] = (uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, i))) % 5) + 1;
        }
        attempts = 0;
        gameActive = true;
        emit GameReset(correctArrangement);
    }

    function attemptArrangement(uint256[5] memory playerArrangement) public {
        require(gameActive, "Game over. Start a new game.");
        require(attempts < 5, "No attempts left. Game will reset.");

        uint256 correctCount = 0;
        for (uint256 i = 0; i < 5; i++) {
            if (playerArrangement[i] == correctArrangement[i]) {
                correctCount++;
            }
        }
        
        attempts++;
        emit AttemptResult(correctCount);

        if (correctCount == 5) {
            gameActive = false;
        } else if (attempts == 5) {
            _shuffleBottles();
        }
    }

    function startNewGame() public {
        require(!gameActive, "Finish the current game first.");
        _shuffleBottles();
    }
}
