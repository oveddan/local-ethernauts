import { expect } from "chai";
import { ethers } from "hardhat";
import helper from "./CoinFlipHelper";
import { AttackingCoinFlip, CoinFlip, CoinFlip__factory} from '../../typechain-types'

let victim: CoinFlip 
let attacker: AttackingCoinFlip;

describe("Attacking CoinFlip", function () {
  beforeEach(async () => {
    const Victim = (await ethers.getContractFactory("CoinFlip")) as CoinFlip__factory;
    victim = await Victim.deploy();
    const Attacker = await ethers.getContractFactory("AttackingCoinFlip");
    attacker = await Attacker.deploy(victim.address);
  });

  // Get this to pass!
  it("Succesfully guessess the correct outcome 10 times in a row", async () => {
    await helper(victim, attacker);
    const consecutiveWins = await victim.consecutiveWins();
    expect(consecutiveWins).to.be.equal(10);
  });
});
