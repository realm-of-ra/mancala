// node_modules/.pnpm/@starknet-react+chains@0.1.7/node_modules/@starknet-react/chains/dist/index.js
var mainnet = {
  id: BigInt("0x534e5f4d41494e"),
  network: "mainnet",
  name: "Starknet",
  nativeCurrency: {
    address: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    alchemy: {
      http: ["https://starknet-mainnet.g.alchemy.com/v2"]
    },
    blast: {
      http: ["https://starknet-mainnet.blastapi.io"]
    },
    infura: {
      http: ["https://starknet-mainnet.infura.io/v3"]
    },
    lava: {
      http: ["https://g.w.lavanet.xyz:443/gateway/strk/rpc-http"]
    },
    nethermind: {
      http: ["https://rpc.nethermind.io/mainnet-juno"]
    },
    reddio: {
      http: ["https://starknet-mainnet.reddio.com"]
    },
    default: {
      http: []
    },
    public: {
      http: [
        "https://starknet-mainnet.public.blastapi.io/rpc/v0.5",
        "https://rpc.starknet.lava.build",
        "https://free-rpc.nethermind.io/mainnet-juno/v0_5"
      ]
    }
  },
  explorers: {
    starkCompass: ["https://www.starkcompass.com"],
    starkscan: ["https://starkscan.co"],
    viewblock: ["https://viewblock.io/starknet"],
    voyager: ["https://voyager.online"]
  }
};
var goerli = {
  id: BigInt("0x534e5f474f45524c49"),
  network: "goerli",
  name: "Starknet Goerli Testnet",
  nativeCurrency: {
    address: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  testnet: true,
  rpcUrls: {
    alchemy: {
      http: ["https://starknet-goerli.g.alchemy.com/v2"]
    },
    blast: {
      http: ["https://starknet-testnet.blastapi.io"]
    },
    infura: {
      http: ["https://starknet-goerli.infura.io/v3"]
    },
    lava: {
      http: ["https://g.w.lavanet.xyz:443/gateway/strkt/rpc-http"]
    },
    nethermind: {
      http: ["https://rpc.nethermind.io/goerli-juno"]
    },
    reddio: {
      http: ["https://starknet-goerli.reddio.com"]
    },
    default: {
      http: []
    },
    public: {
      http: [
        "https://starknet-testnet.public.blastapi.io/rpc/v0.5",
        "https://rpc.starknet-testnet.lava.build",
        "https://free-rpc.nethermind.io/goerli-juno/v0_5"
      ]
    }
  },
  explorers: {
    starkCompass: ["https://www.starkcompass.com/testnet"],
    starkscan: ["https://testnet.starkscan.co"],
    voyager: ["https://goerli.voyager.online"],
    viewblock: ["https://viewblock.io/starknet"]
  }
};
var sepolia = {
  id: BigInt("0x534e5f5345504f4c4941"),
  network: "sepolia",
  name: "Starknet Sepolia Testnet",
  nativeCurrency: {
    address: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  testnet: true,
  rpcUrls: {
    // alchemy: {
    //   http: [],
    // },
    blast: {
      http: ["https://starknet-sepolia.blastapi.io"]
    },
    infura: {
      http: ["https://starknet-sepolia.infura.io/v3"]
    },
    // lava: {
    //   http: [],
    // },
    nethermind: {
      http: ["https://rpc.nethermind.io/sepolia-juno"]
    },
    reddio: {
      http: ["https://starknet-sepolia.reddio.com"]
    },
    default: {
      http: []
    },
    public: {
      http: [
        "https://starknet-sepolia.public.blastapi.io",
        "https://free-rpc.nethermind.io/sepolia-juno"
      ]
    }
  },
  explorers: {
    starkscan: ["https://sepolia.starkscan.co"],
    voyager: ["https://sepolia.voyager.online"]
  }
};
var devnet = {
  id: BigInt("0x534e5f474f45524c49"),
  network: "devnet",
  name: "Starknet Devnet",
  nativeCurrency: {
    address: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  testnet: true,
  rpcUrls: {
    default: {
      http: []
    },
    public: {
      http: ["http://localhost:5050/rpc"]
    }
  }
};

export {
  mainnet,
  goerli,
  sepolia,
  devnet
};
//# sourceMappingURL=chunk-FGLWLMLJ.js.map
