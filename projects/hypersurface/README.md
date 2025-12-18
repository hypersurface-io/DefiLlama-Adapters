# Hypersurface DeFi Llama Adapter

## Status: IN PROGRESS - Needs Protocol Details

This adapter is a skeleton that needs to be filled with actual Hypersurface protocol information.

## Required Information

To complete this adapter, the following information is needed:

### 1. Blockchain/Network
- Which blockchain is Hypersurface deployed on? (Ethereum, BSC, Polygon, Arbitrum, etc.)
- Are there deployments on multiple chains?

### 2. Contract Addresses
- Main vault/pool contract address(es)
- Staking contract address(es) if applicable
- Any other relevant protocol contracts

### 3. Supported Assets
- What tokens/assets does the protocol support?
- Are there specific LP tokens or pool tokens?

### 4. TVL Methodology
- How should TVL be calculated for this protocol?
- Are there any locked tokens that should be excluded?
- Should staked tokens be included in TVL or tracked separately?

### 5. Protocol Type
- Is this a lending protocol, DEX, yield aggregator, staking protocol, or something else?
- Does it have pool2 or staking components?

## How to Complete

1. Replace placeholder addresses in `index.js` with actual contract addresses
2. Update the chain configuration (currently set to `ethereum`)
3. Add the correct token addresses to `SUPPORTED_TOKENS`
4. Update the TVL calculation logic based on the protocol's specific mechanics
5. Add additional chains if the protocol is multi-chain
6. Test the adapter: `node test.js projects/hypersurface/index.js`

## Testing

Once the addresses are filled in, test the adapter:

```bash
# Test the adapter
node test.js projects/hypersurface/index.js

# Test at a specific historical timestamp
node test.js projects/hypersurface/index.js 1729080692
```

## Next Steps

After completing the adapter:

1. Test locally to ensure it works correctly
2. Fill out the PR template with all required information
3. Submit a PR to the main DefiLlama-Adapters repository (not this fork)
4. Monitor the PR for any feedback from DeFi Llama maintainers

## Resources

- [DeFi Llama Adapter Guide](https://docs.llama.fi/submit-a-project)
- [DeFi Llama Discord](https://discord.defillama.com/)
- [Main DeFi Llama Adapters Repo](https://github.com/DefiLlama/DefiLlama-Adapters)
