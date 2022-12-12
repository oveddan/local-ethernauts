import { Vault } from "../../typechain-types";

const helper = async (victim: Vault) => {
  /* 
    Add code here that will help you pass the test
    Note: Unlock without using the string "A very strong password"
    Unlock the vault by somehow reading the private password from 
    Vault directly
  */
  // location 0: boolean
  // locoation 1: bytes32 password
  let val = await victim.provider.getStorageAt(victim.address, 1);

  await victim.unlock(val);
};

export default helper;
