export interface networkConfigItem {
  ethUsdPriceFeed?: string;
  blockConfirmations?: number;
}

export interface networkConfigInfo {
  [key: number]: networkConfigItem;
}

export const networkConfig: networkConfigInfo = {
  // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
  // Default one is ETH/USD contract on Kovan
  4: {
    ethUsdPriceFeed: "0x9326BFA02ADD2366b30bacB125260Af641031331",
    blockConfirmations: 6,
  },
};

export const developmentChains = ["hardhat", "localhost"];
