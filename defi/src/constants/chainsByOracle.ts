const chainsByOracle: Record<string, Array<string>> = {
  "Supra": [
    "Aptos",
    "Aurora",
    "Arbitrum",
    "Arbitrum Nova",
    "Avalanche",
    "Base",
    "Beam",
    "BSC",
    "Canto",
    "Celo",
    "CORE",
    "Cronos",
    "DefiChain",
    "DFK",
    "Dogechain",
    "Evmos",
    "Ethereum",
    "Fantom",
    "FunctionX",
    "Fuse",
    "Hedera",
    "ShimmerEVM",
    "IoTeX",
    "JBC",
    "Kava",
    "Klaytn",
    "Kroma",
    "Linea",
    "Mantle",
    "Meld",
    "Metis",
    "Milkomeda C1",
    "Mode",
    "Moonbeam",
    "Nordek",
    "opBNB",
    "OP Mainnet",
    "Polygon",
    "Rollux",
    "Sui",
    "Syscoin",
    "Telos",
    "Tron",
    "Manta",
  ],
  "Stork": [
    "Arbitrum",
    "Aurora",
    "Avalanche",
    "Base",
    "BSC",
    "Ethereum",
    "Mantle",
    "opBNB",
    "Polygon zkEVM",
    "Starknet",
    "Tron",
    "Sui",
    "ZKsync Era",
    "Plume Mainnet",
    "Abstract",
    "ApeChain",
    "Berachain",
    "Bevm",
    "Bitlayer",
    "Botanix",
    "Bsquared",
    "Camp",
    "Citrea",
    "Clink",
    "Core",
    "Cronos zkEVM",
    "CrossFi",
    "Cytonic",
    "Expchain",
    "Filecoin",
    "Flow EVM",
    "Glue",
    "Goat",
    "Gravity",
    "Hemi",
    "HyperEVM",
    "Ink",
    "Lightlink",
    "Lisk",
    "Lorenzo",
    "Manta",
    "MegaETH",
    "Merlin",
    "Mezo",
    "Minions",
    "Mitosis",
    "Molten",
    "Monad",
    "Movement",
    "Omni",
    "Open Campus",
    "Ozean",
    "Perennial",
    "RISE",
    "Rootstock",
    "SKALE",
    "Scroll",
    "Soneium",
    "Sonic",
    "Sophon",
    "Story",
    "Superseed",
    "Tac",
    "Taraxa",
    "Unichain",
    "Volmex",
    "XLayer",
    "Zetachain",
    "Solana",
    "Aptos",
  ],
  "Pyth": [
    "ApeChain",
    "Arbitrum",
    "Astar zkEVM",
    "Aurora",
    "Avalanche",
    "Blast",
    "BSC",
    "Bittorrent",
    "Base",
    "Boba",
    "Canto",
    "Celo",
    "Chiliz",
    "Conflux",
    "CORE",
    "Cronos",
    "Cronos zkEVM",
    "EOS",
    "Evmos",
    "Ethereum",
    "Etherlink",
    "Fantom",
    "Filecoin",
    "Flow",
    "Fuel",
    "Gnosis",
    "Gravity",
    "Hedera",
    "Horizen EON",
    'IDEX',
    "inEVM",
    "IOTA EVM",
    "Kaia",
    "Kava",
    "KCC",
    "Klatyn",
    "LightLink",
    "Linea",
    "Manta",
    "Mantle",
    "Merlin",
    "Meter",
    "Mode",
    "Morph",
    "Neon",
    "opBNB",
    "OP Mainnet",
    "Parallel",
    "Polygon",
    "Polygon zkEVM",
    "Polynomial",
    "Ronin",
    "Sanko",
    "Scroll",
    "ShimmerEVM",
    "Taiko",
    "TON",
    "Viction",
    "WEMIX3.0",
    "Zkfair",
    "ZKsync Era",
    "Zetachain",
    "Solana",
    "Starknet",
    "Aptos",
    "Sui",
    "CosmosHub",
    "Injective",
    "Osmosis",
    "Neutron",
    "Sei",
    "Juno",
    "Near",
    "Story",
    "Eclipse",
    "Sonic",
    "Berachain",
    "Abstract",
    "Hyperliquid"
  ],
  "Chainlink": [
    "Ethereum",
    "BSC",
    "Polygon",
    "Gnosis",
    "Avalanche",
    "Fantom",
    "Arbitrum",
    "OP Mainnet",
    "Moonriver",
    "Moonbeam",
    "Metis",
    "Base",
    "Celo",
    "Scroll",
    "Linea",
    "ZKsync Era",
    "Polygon zkEVM",
    "Starknet",
    "Solana",
    "Soneium",
  ],
  "Switchboard": ["Solana", "Ethereum", "CORE", "Arbitrum", "OP Mainnet", "Base", "Aurora", "Aptos", "Sui"],
  "RedStone": [
    "Ethereum",
    "Arbitrum",
    "OP Mainnet",
    "Blast",
    "Mantle",
    "BSC",
    "Manta",
    "opBNB",
    "Merlin",
    "Mode",
    "Avalanche",
    "Kava",
    "Base",
    "Linea",
    "ZKsync Era",
    "Polygon",
    "Polygon zkEVM",
    "TON",
    "Celo",
    "Scroll",
    "Canto",
    "Gnosis",
    "Fantom",
    "Starknet",
    "Telos",
    "Boba",
    "Chiliz",
    "Conflux",
    "Cronos",
    "EOS",
    "Hedera",
    "Horizen EON",
    "Stacks",
    "Moonriver",
    "Moonbeam",
    "Rootstock",
    "ShimmerEVM",
    "Zetachain",
    "CosmosHub",
    "Injective",
    "Near",
    "Tron",
    "Klaytn",
    "Evmos",
    "Aurora",
    "Metis",
    "Astar zkEVM",
    "Syscoin",
    "Arbitrum Nova",
    "Meld",
    "Harmony",
    "Polkadot",
    "Beam",
    "Milkomeda C1",
    "Dogechain",
    "Sei",
    "Etherlink",
    "Fuel",
    "Taiko",
    "Morph",
    "Sui",
    "X Layer",
    "Zircuit",
    "Fraxtal",
    "BOB",
    "Hyperliquid",
    "BSquared",
    "Sonic",
    "Radix",
    "Reya Network",
    "zkLink Nova",
    "Swellchain",
    "Lisk",
    "Corn",
    "CORE",
    "Cronos zkEVM",
    "Kaia",
    "Polynomial"
  ],
  "UMA": ["Ethereum", "Polygon", "Boba", "OP Mainnet", "Arbitrum", "Gnosis", "Avalanche"],
  "Api3": [
    "Arbitrum",
    "Avalanche",
    "Base",
    "BSC",
    "Ethereum",
    "Fantom",
    "Gnosis",
    "Kava",
    "Linea",
    "Mantle",
    "Moonbeam",
    "Moonriver",
    "OP Mainnet",
    "Polygon",
    "Polygon zkEVM",
    "Sei",
    "Mode",
    "Astar zkEVM",
    "Bitlayer",
    "Blast",
    "BOB",
    "Core",
    "Fraxtal",
    "inEVM",
    "Kroma",
    "Lightlink",
    "Lukso",
    "Manta",
    "Merlin",
    "Metis",
    "Metal",
    "Rari",
    "Scroll",
    "opBNB",
    "Taiko",
    "X Layer",
    "Zircuit",
    "Lumia"
  ],
  "Band": [
    "CLV",
    "Fantom",
    "Secret",
    "Godwoken",
    "Sora",
    "Avalanche",
    "Ethereum",
    "Horizen",
    "Astar",
    "Bitgert",
    "Bittorrent",
    "Findora",
    "Icon",
    "Meter",
    "Oasis",
    "Celo",
    "Harmony",
    "Moonriver",
    "OKTChain",
    "Platon",
    "BSC",
    "OP Mainnet",
    "Cronos",
  ],
  "DIA": [
    "Ethereum",
    "Polygon",
    "BSC",
    "OP Mainnet",
    "Avalanche",
    "Fantom",
    "Arbitrum",
    "Solana",
    "Near",
    "Polkadot",
    "Kusama",
    "CosmosHub",
    "Celo",
    "Moonbeam",
    "ZKsync Era",
    "Metis",
    "Gnosis",
    "Injective",
    "Acala",
    "Astar",
    "Aurora",
    "Base",
    "Boba",
    "CLV",
    "Conflux",
    "Evmos",
    "Fuse",
    "Neon",
    "Nervos",
    "OKTChain",
    "Polygon zkEVM",
    "Pontem",
    "Shiden",
    "Shibuya",
    "Telos",
    "Vara",
    "Velas",
    "Wanchain",
  ],
  "Witnet": [
    "Arbitrum",
    "Avalanche",
    "Boba",
    "Celo",
    "Conflux",
    "Cronos",
    "Cube",
    "Dogechain",
    "Elastos",
    "Ethereum",
    "Fuse",
    "Gnosis",
    "Harmony",
    "Hoo",
    "Kava",
    "KCC",
    "Klaytn",
    "Meter",
    "Metis",
    "Moonbeam",
    "OKTChain",
    "OP Mainnet",
    "Polygon",
    "Reef",
    "Scroll",
    "smartBCH",
    "Syscoin",
    "Ultron",
  ],
  "WINkLink": ["Tron"],
  "Scope": ["Solana"],
  "Acurast": [
    "Tezos",
    "Arbitrum",
    "Astar",
    "Base",
    "BSC",
    "Ethereum",
    "Moonbeam",
    "OP Mainnet",
    "Pendulum",
    "Polygon",
    "Aeternity",
  ],
  "Ojo Oracle": ["Archway", "Comdex", "Injective", "Juno", "Neutron", "Osmosis", "Secret", "Stargaze"],
  "Pragma": ["Starknet"],
  "Harbinger": ["Tezos"],
  "SEDA": ["Aurora", "Evmos", "OP Mainnet"],
  "Nest": ["Ethereum", "BSC", "Aurora", "KCC", "CLV", "Polygon"],
  "Chronicle": [
    "Ethereum",
    "Polygon",
    "OP Mainnet",
    "Arbitrum",
    "ZKsync Era",
    "Gnosis",
    "Base",
    "Polygon zkEVM",
    "Mantle",
    "Scroll",
    "Berachain",
    "Plume",
    "Corn"
  ],
  "eOracle": [
    "Base",
    "Blast",
    "Linea",
    "Mode",
    "Morph",
    "Polygon zkEVM",
    "Scroll",
    "Taiko",
    "zkLink Nova"
  ],
};

export { chainsByOracle };
