# Next Steps to Get Hypersurface Adapter onto DeFi Llama

## Current Status

✅ Created adapter skeleton in forked repository (hypersurface-io/DefiLlama-Adapters)
✅ Created on branch: `copilot/add-defi-llama-adaptor`
⏳ Needs protocol-specific information to be completed
⏳ Needs to be submitted to official DeFi Llama repository

## Steps to Complete and Submit

### Step 1: Complete the Adapter with Real Data

Before submitting, you need to fill in the actual protocol details:

1. **Get Contract Addresses**
   - Find the deployed contract addresses for Hypersurface
   - Identify which blockchain(s) the protocol is deployed on
   - Update `HYPERSURFACE_CONTRACTS` in `index.js` with real addresses

2. **Identify Supported Tokens**
   - Determine which tokens the protocol accepts
   - Update `SUPPORTED_TOKENS` with actual token addresses
   - Use the correct addresses for each chain

3. **Update TVL Logic**
   - Adjust the TVL calculation based on how Hypersurface works
   - If it's a lending protocol, use aave helpers
   - If it's a DEX, use uniswap/unknown token helpers
   - If it's custom, implement the specific logic

4. **Test Locally**
   ```bash
   cd DefiLlama-Adapters
   node test.js projects/hypersurface/index.js
   ```

### Step 2: Prepare Submission Information

Gather all information required by the PR template:

- **Name**: Hypersurface (or official protocol name)
- **Twitter**: Official Twitter/X account
- **Website**: Official website URL
- **Logo**: High-resolution logo image
- **Current TVL**: Estimated or actual TVL
- **Chain(s)**: Which blockchain(s) - e.g., Ethereum, Arbitrum, etc.
- **Category**: Choose from https://defillama.com/categories
- **Short Description**: 1-2 sentence description
- **Methodology**: Explain how TVL is calculated
- **Audit Links**: If available
- **Token Address**: If protocol has a token

### Step 3: Submit to Official Repository

**IMPORTANT**: Do NOT submit a PR from this forked repo to DeFi Llama. Instead:

1. **Fork the Official Repo**
   - Go to https://github.com/DefiLlama/DefiLlama-Adapters
   - Click "Fork" to create your own fork
   - Or use the existing hypersurface-io fork if it's forked from DefiLlama

2. **Ensure Upstream is Correct**
   ```bash
   cd DefiLlama-Adapters
   git remote add upstream https://github.com/DefiLlama/DefiLlama-Adapters.git
   git fetch upstream
   ```

3. **Create Clean Branch from Upstream**
   ```bash
   # Create a new branch based on the official repo's main
   git checkout -b hypersurface-adapter upstream/main
   
   # Copy your adapter files
   cp -r projects/hypersurface projects/hypersurface-new
   mv projects/hypersurface-new projects/hypersurface
   
   # Commit the changes
   git add projects/hypersurface/
   git commit -m "Add Hypersurface adapter"
   ```

4. **Push to Your Fork**
   ```bash
   git push origin hypersurface-adapter
   ```

5. **Create Pull Request**
   - Go to https://github.com/DefiLlama/DefiLlama-Adapters
   - Click "Pull Requests" > "New Pull Request"
   - Select "compare across forks"
   - Base: `DefiLlama/DefiLlama-Adapters` (main)
   - Head: `hypersurface-io/DefiLlama-Adapters` (hypersurface-adapter)
   - **IMPORTANT**: Enable "Allow edits by maintainers" checkbox
   - Fill out the PR template completely
   - Submit!

### Step 4: Monitor and Respond

1. **Watch the PR**
   - DeFi Llama maintainers will review
   - They may request changes or ask questions
   - Respond promptly to feedback

2. **Be Patient**
   - Reviews can take several days
   - Don't ping on Discord unless it's been over a week
   - The team monitors all PRs

3. **After Merge**
   - It takes time (up to 24 hours) to appear on the UI
   - Monitor https://defillama.com/ for your protocol
   - If issues arise after 24 hours, reach out on Discord

## Important Notes

### Regarding Contributors

- The Co-authored-by tags in git commits are just metadata
- GitHub's contributor list is based on who commits/merges code
- Since this PR will be from hypersurface-io organization account, that's who will be listed as contributor
- Individual developer accounts (like dakramytic) won't be listed unless they directly commit

### Code Quality

- Keep the adapter as simple as possible
- Don't add any npm packages - use only what's in the repo
- Follow existing patterns from other adapters
- Make sure your code is well-commented
- Test thoroughly before submitting

### Common Issues to Avoid

- ❌ Don't edit `package-lock.json`
- ❌ Don't use fetch/API calls - calculate from blockchain data
- ❌ Don't add project-specific npm packages
- ❌ Don't forget to enable "Allow edits by maintainers"
- ✅ DO test your adapter locally first
- ✅ DO fill out the entire PR template
- ✅ DO use existing helper functions

## Resources

- **Documentation**: https://docs.llama.fi/submit-a-project
- **Discord**: https://discord.defillama.com/
- **Example Adapters**: Browse the `projects/` directory
- **Helper Functions**: Check `helper/` directory for utilities
- **Categories**: https://defillama.com/categories

## Questions?

If you need help:
1. Check existing adapters for similar protocols
2. Read the documentation linked above
3. Ask on Discord in the #dev-support channel
4. Don't hesitate to ask - the DeFi Llama team is helpful!
