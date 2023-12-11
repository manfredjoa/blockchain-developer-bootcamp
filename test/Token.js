const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Token", () => {
  it("has a name", async () => {
    // Fetch Token from Blockchain
    const fetchedToken = await ethers.getContractFactory("Token");
    const token = await fetchedToken.deploy();

    // Read token name
    const name = await token.name();

    // Check that name is correct
    expect(name).to.equal("My Token");
  });
});
