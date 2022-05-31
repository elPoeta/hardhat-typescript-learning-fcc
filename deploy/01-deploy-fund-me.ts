import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction, DeployResult } from "hardhat-deploy/types";
import { networkConfig, developmentChains } from "../helper-hardhat.config";

const deployFundMe: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId: number = network.config.chainId!;
  const netName: string = network.name;
  const ethUsdPriceFeedAddress = networkConfig[netName]["ethUsdPriceFeed"];
  console.log(ethUsdPriceFeedAddress);
  //   const fundMe: DeployResult = await deploy("FundMe", {
  //     from: deployer,
  //     args: [],
  //     log: true,
  //   });
};
export default deployFundMe;
