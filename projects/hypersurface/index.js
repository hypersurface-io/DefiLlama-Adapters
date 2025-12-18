const ADDRESSES = require('../helper/coreAssets.json');
const { sumTokens } = require('../helper/unwrapLPs');

// Hypersurface Protocol Adapter
// TODO: Replace these placeholder addresses with actual deployed contract addresses
const HYPERSURFACE_CONTRACTS = {
  ethereum: {
    // Main protocol contract address
    vault: '0x0000000000000000000000000000000000000000', // TODO: Add actual vault address
  },
  // Add other chains as needed
};

// TODO: Add actual token addresses that the protocol supports
const SUPPORTED_TOKENS = {
  ethereum: [
    ADDRESSES.ethereum.USDC,
    ADDRESSES.ethereum.USDT,
    ADDRESSES.ethereum.DAI,
    ADDRESSES.ethereum.WETH,
  ],
};

async function ethereumTvl(api) {
  const vault = HYPERSURFACE_CONTRACTS.ethereum.vault;
  const tokens = SUPPORTED_TOKENS.ethereum;
  
  // Sum all tokens held by the vault contract
  return sumTokens({ api, owner: vault, tokens });
}

module.exports = {
  methodology: 'Counts all tokens deposited in Hypersurface protocol contracts',
  ethereum: {
    tvl: ethereumTvl,
  },
  // Add other chains as the protocol expands
};

// Test command:
// node test.js projects/hypersurface/index.js
