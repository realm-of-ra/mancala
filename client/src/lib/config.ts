export const IS_MAINNET = import.meta.env.VITE_BLOCKCHAIN_TYPE === "mainnet"
const MANCALA_ADDRESS = IS_MAINNET ? "" : "0x5920638dd022083587d85417b642e85a16dc08bfe9ce8a536e17462cb332fd3"
const RPC_URL = IS_MAINNET ? "" : "https://api.cartridge.gg/x/starknet/sepolia"
const TORII_URL = IS_MAINNET ? "" : "https://api.cartridge.gg/x/mancala-b/torii"

const CONFIG = {
  GRAPHQL_ENDPOINT: `${TORII_URL}/graphql`,
  SLOT_RPC_URL: RPC_URL,
  RPC_URL,
  TORII_URL,
  MASTER_ADDRESS: IS_MAINNET ? "" : "0x02A54eFf65D55a2e7D2fC7E23eF0F0e6030dB0313b16c8F0eaD0b4a83807f6d6",
  MASTER_PRIVATE_KEY: IS_MAINNET ? "" : "0x0396533b7a1182ef03da483eca82e9dd2b17bee9c7fec07ac6cbbeb8bfd573cb",
  MANCALA_ADDRESS,
  PROFILE_ADDRESS: IS_MAINNET ? "" : "0x3714f8b523e83a41c722a8c6f21da9b6d9aee178bc7ed3daeeb2d4649ebf4bd",
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
      target: MANCALA_ADDRESS,
      method: "create_player_profile",
    },
    {
      target: MANCALA_ADDRESS,
      method: "update_player_profile",
    },
  ]
};

export default CONFIG;
