import { expect } from "chai";
import { BaseContract } from "ethers";
import { ethers } from "hardhat";
import { AttackingForce } from "../../typechain-types";

let victim: BaseContract;
let attacker: AttackingForce;

describe("Attacking Force", function () {
  beforeEach(async () => {
    const Victim = await ethers.getContractFactory("Force");
    victim = await Victim.deploy();
    const Attacker = await ethers.getContractFactory("AttackingForce");
    attacker = await Attacker.deploy(victim.address, { value: 100 });
  });

  // Get this to pass!
  it("Succesfully give the force contract some ETH", async () => {
    await attacker.hackContract();
    const balance = victim.provider.getBalance(victim.address);
    // const balance = await provider.getBalance(victim.address);
    expect(balance).to.be.above(0);
  });
});
