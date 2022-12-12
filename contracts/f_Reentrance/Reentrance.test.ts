import { expect } from "chai";
import { ethers } from "hardhat";
import { Reentrance, AttackingReentrance } from "../../typechain-types";

let victim: Reentrance;
let attacker: AttackingReentrance;

describe("Attacking Reentrance", function () {
  beforeEach(async () => {
    const Victim = await ethers.getContractFactory("Reentrance");
    victim = await Victim.deploy({ value: 5 });
    const Attacker = await ethers.getContractFactory("AttackingReentrance");
    attacker = await Attacker.deploy(victim.address, { value: 1 });
  });

  // Get this to pass!
  it("Succesfully take all the ETH out of the contract", async () => {
    await attacker.hackContract();
    const balance = await victim.provider.getBalance(victim.address);
    expect(balance).to.equal(0);
  
    const attackerBalance = await attacker.provider.getBalance(attacker.address);
    expect(attackerBalance).to.equal(6);
  });

});
