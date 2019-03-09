const NeoAdam = artifacts.require("NeoAdam");
const accountIndex = 0


module.exports = function(deployer, network, accounts) {
  deployer.deploy(
    NeoAdam,
    {
      "from": accounts[accountIndex]
    }
  );
};

