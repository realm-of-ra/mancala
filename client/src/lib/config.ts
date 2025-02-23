export const IS_MAINNET = import.meta.env.VITE_BLOCKCHAIN_TYPE === "mainnet"
const MANCALA_ADDRESS = IS_MAINNET ? import.meta.env.VITE_MAINNET_MANCALA_ADDRESS : import.meta.env.VITE_SEPOLIA_MANCALA_ADDRESS
const RPC_URL = IS_MAINNET ? import.meta.env.VITE_MAINNET_RPC_URL : import.meta.env.VITE_SEPOLIA_RPC_URL
const TORII_URL = IS_MAINNET ? import.meta.env.VITE_MAINNET_TORII_URL : import.meta.env.VITE_SEPOLIA_TORII_URL
const PROFILE_ADDRESS = IS_MAINNET ? import.meta.env.VITE_MAINNET_PROFILE_ADDRESS : import.meta.env.VITE_SEPOLIA_PROFILE_ADDRESS

const CONFIG = {
  GRAPHQL_ENDPOINT: `${TORII_URL}/graphql`,
  SLOT_RPC_URL: RPC_URL,
  SLOT: import.meta.env.VITE_SLOT,
  RPC_URL,
  TORII_URL,
  MASTER_ADDRESS: IS_MAINNET ? import.meta.env.VITE_MAINNET_MASTER_ADDRESS : import.meta.env.VITE_SEPOLIA_MASTER_ADDRESS,
  MASTER_PRIVATE_KEY: IS_MAINNET ? import.meta.env.VITE_MAINNET_MASTER_PRIVATE_KEY : import.meta.env.VITE_SEPOLIA_MASTER_PRIVATE_KEY,
  MANCALA_ADDRESS,
  PROFILE_ADDRESS,
  NAMESPACE: import.meta.env.VITE_NAMESPACE,
  CONTRACT_NAME: import.meta.env.VITE_CONTRACT_NAME,
  POLICIES: [
    {
      target: MANCALA_ADDRESS,
      method: "new_game",
    },
    {
      target: MANCALA_ADDRESS,
      method: "join_game",
    },
    {
      target: MANCALA_ADDRESS,
      method: "timeout",
    },
    {
      target: MANCALA_ADDRESS,
      method: "create_private_game",
    },
    {
      target: MANCALA_ADDRESS,
      method: "move",
    },
    {
      target: MANCALA_ADDRESS,
      method: "forfeited",
    },
    {
      target: MANCALA_ADDRESS,
      method: "request_restart_game",
    },
    {
      target: MANCALA_ADDRESS,
      method: "restart_current_game",
    },
    {
      target: PROFILE_ADDRESS,
      method: "create_player_profile",
    },
    {
      target: PROFILE_ADDRESS,
      method: "update_player_profile",
    },
  ]
};

export default CONFIG;