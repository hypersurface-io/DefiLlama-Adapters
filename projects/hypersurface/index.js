/**
 * Hypersurface Protocol - DefiLlama Adapter
 *
 * Decentralized options protocol with automated market making and delta hedging.
 * Deployed on Hyperliquid EVM (Chain ID: 999) and Base (Chain ID: 8453)
 *
 * TVL = MarginPool (user collateral) + HedgedPool (LP capital)
 */

const ADDRESSES = require('../helper/coreAssets.json');
const { sumTokens2 } = require('../helper/unwrapLPs');

// ============================================
// HYPERLIQUID EVM (Chain ID: 999)
// ============================================
const HYPERLIQUID_CONFIG = {
  MARGIN_POOL: '0x7D2e4b4d7ba55C423F5CCe194ae8194eFD1C6e35',
  HEDGED_POOL: '0x0095aCDD705Cfcc11eAfFb6c19A28C0153ad196F',
  tokens: [
    ADDRESSES.hyperliquid.USDT0,  // USDC
    ADDRESSES.hyperliquid.WHYPE,  // WHYPE
    '0xbe6727b535545c67d5caa73dea54865b92cf7907',  // WETH
    '0x9fdbda0a5e284c32744d2f17ee5c74b284993463',  // WBTC
    '0x33Af3c2540Ba72054e044EFe504867B39aE421f5',  // XPL
    '0x27ec642013bcb3d80ca3706599d3cda04f6f4452',  // PUMP
    '0x068f321fa8fb9f0d135f290ef6a3e2813e1c8a29',  // SOL
    '0x58538e6a46e07434d7e7375bc268d3cb839c0133',  // ENA
    '0x000000000000780555bd0bca3791f89f9542c2d6',  // KNTQ
  ],
};

async function hyperliquidTvl(api) {
  // Sum tokens in both MarginPool (user collateral) and HedgedPool (LP capital)
  const owners = [
    HYPERLIQUID_CONFIG.MARGIN_POOL,
    HYPERLIQUID_CONFIG.HEDGED_POOL,
  ];

  return sumTokens2({
    api,
    owners,
    tokens: HYPERLIQUID_CONFIG.tokens,
  });
}

// ============================================
// BASE (Chain ID: 8453)
// ============================================
const BASE_CONFIG = {
  MARGIN_POOL: '0x9AbA7A212d479ed1678d903bA851778BC2Fb3103',
  HEDGED_POOL: '0x68893915f202e5DA2Ef01493463c50B2f68Df56d',
  tokens: [
    ADDRESSES.base.USDC,  // USDC
    ADDRESSES.base.WETH,  // WETH
    '0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf',  // cbBTC
    '0x1111111111166b7fe7bd91427724b487980afc69',  // ZORA
    '0x696f9436b67233384889472cd7cd58a6fb5df4f1',  // AVNT
    '0x7300b37dfdfab110d83290a29dfb31b1740219fe',  // MAMO
  ],
};

async function baseTvl(api) {
  // Sum tokens in both MarginPool (user collateral) and HedgedPool (LP capital)
  const owners = [
    BASE_CONFIG.MARGIN_POOL,
    BASE_CONFIG.HEDGED_POOL,
  ];

  return sumTokens2({
    api,
    owners,
    tokens: BASE_CONFIG.tokens,
  });
}

// ============================================
// EXPORTS
// ============================================
module.exports = {
  methodology: `
    TVL = MarginPool + HedgedPool token balances

    MarginPool: User collateral deposited for options trading
    HedgedPool: LP capital that underwrites options

    Both pools hold multiple tokens (USDC, ETH, BTC, HYPE, etc.) which are summed at current prices.
  `.trim(),
  hyperliquid: {
    tvl: hyperliquidTvl,
  },
  base: {
    tvl: baseTvl,
  },
  hallmarks: [
    [1757980800, 'Protocol Launch on HyperEVM'],  // 2025-09-16
    [1760054400, 'Launch on Base'],               // 2025-10-10
  ],
};
