import { AttackingCoinFlip, CoinFlip } from "../../typechain-types";

const helper = async (victim: CoinFlip, attacker: AttackingCoinFlip) => {
  // add code here that will help you pass the test
  for (let i = 0; i < 10; i++) {
    // get guess

    await attacker.hackContract();
  }
};

export default helper;
