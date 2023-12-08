const main = async () => {
  // Fetch contract to deploy
  const Token = await ethers.getContractFactory("Token");

  // Deploy contract
  const fetchedToken = await Token.deploy();

  await fetchedToken.deployed();

  console.log(`Token deployed to: ${fetchedToken.address}`);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
