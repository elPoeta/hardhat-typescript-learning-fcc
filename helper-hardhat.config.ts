export interface networkConfigItem {
  ethUsdPriceFeed?: string;
  blockConfirmations?: number;
  chainId: number;
}

export interface networkConfigInfo {
  [key: string]: networkConfigItem;
}

export const networkConfig: networkConfigInfo = {
  localhost: {
    chainId: 31337,
  },
  hardhat: {
    chainId: 31337,
  },
  // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
  // Default one is ETH/USD contract on Kovan
  rinkeby: {
    ethUsdPriceFeed: "0x9326BFA02ADD2366b30bacB125260Af641031331",
    blockConfirmations: 6,
    chainId: 4,
  },
};

export const developmentChains = ["hardhat", "localhost"];
