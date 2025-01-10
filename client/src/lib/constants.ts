import eniola from "../assets/eniola.png";
import israel from "../assets/israel.png";
import { gql } from "@apollo/client";

export const colors = [
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#FF33A1",
  "#33FFF3",
  "#FF8C33",
  "#338CFF",
  "#8CFF33",
  "#FF33E5",
  "#33FFD1",
  "#B833FF",
  "#FFB833",
  "#33FFB8",
  "#FF338C",
  "#8C33FF",
  "#338FFF",
  "#FF3333",
  "#33FF33",
  "#3333FF",
  "#FF8333",
  "#8333FF",
  "#FF3383",
  "#33FF83",
  "#FF8357",
  "#8357FF",
  "#57FF83",
  "#8357FF",
  "#57FF33",
  "#FF3357",
  "#33FF57",
  "#FF57FF",
  "#FF5733",
  "#3357FF",
  "#5733FF",
  "#33FF33",
  "#FF57A1",
  "#57FFA1",
  "#A157FF",
  "#FF57E5",
  "#57FFE5",
  "#FF3333",
  "#33FF57",
  "#5733FF",
  "#FF5733",
  "#33A1FF",
  "#57FF33",
  "#33FF57",
  "#5733FF",
  "#FF3357",
  "#57FF33",
];

export const chat = [
  {
    user: "isreal",
    avatar: israel,
    message: "I will take it easy on you Eniola, but show me what you've got.",
    date: "01:21pm",
  },
  {
    user: "eniola",
    avatar: eniola,
    message: "I will take it easy on you Eniola, but show me what you've got.",
    date: "01:21pm",
  },
  {
    user: "isreal",
    avatar: israel,
    message: "I will take it easy on you Eniola, but show me what you've got.",
    date: "01:21pm",
  },
  {
    user: "eniola",
    avatar: eniola,
    message: "I will take it easy on you Eniola, but show me what you've got.",
    date: "01:21pm",
  },
  {
    user: "isreal",
    avatar: israel,
    message: "I will take it easy on you Eniola, but show me what you've got.",
    date: "01:21pm",
  },
  {
    user: "eniola",
    avatar: eniola,
    message: "I will take it easy on you Eniola, but show me what you've got.",
    date: "01:21pm",
  },
  {
    user: "isreal",
    avatar: israel,
    message: "I will take it easy on you Eniola, but show me what you've got.",
    date: "01:21pm",
  },
  {
    user: "eniola",
    avatar: eniola,
    message: "I will take it easy on you Eniola, but show me what you've got.",
    date: "01:21pm",
  },
];

export const table_head = ["Player", "Level", "Score"];

export const player_header = [
  {
    id: 1,
    name: "Player",
  },
  {
    id: 2,
    name: "Level",
  },
  {
    id: 3,
    name: "Score",
  },
  {
    id: 4,
    name: "Duels",
  },
  {
    id: 5,
    name: "Games Won",
  },
  {
    id: 6,
    name: "Games Lost",
  },
];

export const player_stats = [
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
];

export const duels_header = [
  {
    id: 1,
    name: "Challenger",
  },
  {
    id: 2,
    name: "Challenged",
  },
  {
    id: 3,
    name: "Winner",
  },
  {
    id: 4,
    name: "Status",
  },
];

export const duels_stats = [
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    winner: "Eniola",
    date: "14 - 05 - 2024",
  },
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    winner: "Eniola",
    date: "14 - 05 - 2024",
  },
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    winner: "Eniola",
    date: "14 - 05 - 2024",
  },
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    winner: "Eniola",
    date: "14 - 05 - 2024",
  },
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    winner: "Eniola",
    date: "14 - 05 - 2024",
  },
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    winner: "Eniola",
    date: "14 - 05 - 2024",
  },
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    winner: "Eniola",
    date: "14 - 05 - 2024",
  },
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    winner: "Eniola",
    date: "14 - 05 - 2024",
  },
];

export const live_duels_header = [
  {
    id: 1,
    name: "Challenger",
  },
  {
    id: 2,
    name: "Challenged",
  },
  {
    id: 3,
    name: "Date",
  },
  {
    id: 4,
    name: "Status",
  },
];

export const live_duels_stats = [
  {
    id: 0,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    date: "14 - 05 - 2024, 12:13PM",
    status: "Join Game",
  },
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: null,
    date: "14 - 05 - 2024, 12:13PM",
    status: "Joined",
  },
  {
    id: 2,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    date: "14 - 05 - 2024, 12:13PM",
    status: "Join Game",
  },
  {
    id: 3,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: null,
    date: "14 - 05 - 2024, 12:13PM",
    status: "Joined",
  },
  {
    id: 4,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    date: "14 - 05 - 2024, 12:13PM",
    status: "Join Game",
  },
  {
    id: 5,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: null,
    date: "14 - 05 - 2024, 12:13PM",
    status: "Joined",
  },
  {
    id: 6,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    date: "14 - 05 - 2024, 12:13PM",
    status: "Join Game",
  },
  {
    id: 7,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: null,
    date: "14 - 05 - 2024, 12:13PM",
    status: "Joined",
  },
];

export const players = ["Eniola", "Israel"];

export const animate = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

export const gameStarted = (games_data_one: any, games_data_two: any) =>
  !(
    games_data_one?.pit1 == 4 &&
    games_data_one?.pit2 == 4 &&
    games_data_one?.pit3 == 4 &&
    games_data_one?.pit4 == 4 &&
    games_data_one?.pit5 == 4 &&
    games_data_one?.pit6 == 4 &&
    games_data_two?.pit1 == 4 &&
    games_data_two?.pit2 == 4 &&
    games_data_two?.pit3 == 4 &&
    games_data_two?.pit4 == 4 &&
    games_data_two?.pit5 == 4 &&
    games_data_two?.pit6 == 4
  );

export const SLOT_RPC_URL = "https://api.cartridge.gg/x/starknet/sepolia";

const ACTION_ADDRESS = "0x073d5f249b9519777bcca407e74b7230c935abded8b1f21717f75a5a8ce962a5";

export const POLICIES = [
  {
    target: ACTION_ADDRESS,
    method: "initialize_game_counter",
  },
  {
    target: ACTION_ADDRESS,
    method: "new_game",
  },
  {
    target: ACTION_ADDRESS,
    method: "create_private_game",
  },
  {
    target: ACTION_ADDRESS,
    method: "join_game",
  },
  {
    target: ACTION_ADDRESS,
    method: "move",
  },
  {
    target: ACTION_ADDRESS,
    method: "request_restart_game",
  },
  {
    target: ACTION_ADDRESS,
    method: "restart_current_game",
  },
  {
    target: ACTION_ADDRESS,
    method: "forfeited",
  },
  {
    target: ACTION_ADDRESS,
    method: "timeout",
  },
  {
    target: "0x2bb1a728ffba3aa23001a8566a6044f8bcb0062743dc777dc35f782613bb5e1",
    method: "create_player_profile",
  },
  {
    target: "0x2bb1a728ffba3aa23001a8566a6044f8bcb0062743dc777dc35f782613bb5e1",
    method: "update_player_uri",
  },
  {
    target: "0x2bb1a728ffba3aa23001a8566a6044f8bcb0062743dc777dc35f782613bb5e1",
    method: "rename_player",
  },
  {
    target: "0x2bb1a728ffba3aa23001a8566a6044f8bcb0062743dc777dc35f782613bb5e1",
    method: "update_player_profile",
  },
  {
    target: "0x2bb1a728ffba3aa23001a8566a6044f8bcb0062743dc777dc35f782613bb5e1",
    method: "new_profile",
  },
];

export const MancalaBoardModelsQuery = gql`
  query mancalaAlphaMancalaBoardModels {
    mancalaAlphaMancalaBoardModels {
      edges {
        node {
          game_id
          player_one
          player_two
          current_player
          winner
          status
          is_private
          entity {
            executedAt
          }
        }
      }
    }
  }
`;

export const MancalaBoardModelQuery = gql`
  query mancalaAlphaMancalaBoardModel($gameId: u128) {
    mancalaAlphaMancalaBoardModels(
      where: { game_id: $gameId }
      limit: 1000000000
    ) {
      edges {
        node {
          game_id
          player_one
          player_two
          current_player
          winner
          status
          is_private
          max_block_between_move
          entity {
            executedAt
          }
        }
      }
    }
  }
`;

export const MancalaPlayQuery = gql`
  query mancalaAlphaPlayerModels($gameId: u128) {
    mancalaAlphaPlayerModels(where: { game_id: $gameId }, limit: 1000000000) {
      edges {
        node {
          address
          game_id
          len_pits
          restart_requested
        }
      }
    }
    mancalaAlphaPitModels(where: { game_id: $gameId }, limit: 1000000000) {
      edges {
        node {
          game_id
          player
          seed_count
          pit_number
        }
      }
    }
  }
`;

export const MancalaSeedQuery = gql`
  query mancalaAlphaSeedModels($gameId: u128) {
    mancalaAlphaSeedModels(where: { game_id: $gameId }, limit: 1000000000) {
      edges {
        node {
          game_id
          pit_number
          player
          seed_number
          color
          seed_id
          entity {
            updatedAt
          }
        }
      }
    }
  }
`;

export const MancalaHeaderQuery = gql`
  query FetchModelsForHeader {
    mancalaAlphaGameModels {
      edges {
        node {
          game_id
          player_one
          player_two
          current_player
          winner
          status
          is_private
        }
      }
    }
  }
`;

export const MancalaPlayerNames = gql`
  query mancalaAlphaPlayerNames {
    mancalaAlphaProfileModels {
      edges {
        node {
          name
          address
          profile_uri
        }
      }
    }
  }
`;

export const MancalaCaptureQuery = gql`
  query mancalaAlphaCaptureModels($gameId: u128) {
    mancalaAlphaCaptureModels(where: { game_id: $gameId }, limit: 1000000000) {
      edges {
        node {
          game_id
          player
          seed_count
          pit_number
        }
      }
    }
  }
`;

export const MancalaExtraTurnQuery = gql`
  query mancalaAlphaPlayerExtraTurnModels($gameId: u128) {
    mancalaAlphaPlayerExtraTurnModels(where: { game_id: $gameId }, limit: 1000000000) {
      edges {
        node {
          player
        }
      }
    }
  }
`;

export const positions = (type: "player" | "opponent" | undefined) => Array.from({ length: 7 }, (_, playerIndex) => {
  // Base x-offset for this player/opponent pair
  const xOffset = type === "player" ? playerIndex * 120 : 600 - playerIndex * 120;
  const yOffset = type === "player" ? 0 : -110;
  
  // Base coordinates from player 1
  const baseCoords = [
    { x: 270, y: 110 }, { x: 287, y: 110 }, { x: 270, y: 127 }, { x: 287, y: 127 },
    { x: 270, y: 144 }, { x: 287, y: 144 }, { x: 270, y: 93 }, { x: 287, y: 93 },
    { x: 253, y: 100 }, { x: 253, y: 117 }, { x: 253, y: 134 }, { x: 304, y: 100 },
    { x: 304, y: 117 }, { x: 304, y: 134 }, { x: 260, y: 100 }, { x: 260, y: 117 },
    { x: 260, y: 134 }, { x: 278, y: 93 }, { x: 278, y: 110 }, { x: 278, y: 127 },
    { x: 278, y: 143 }, { x: 296, y: 100 }, { x: 296, y: 117 }, { x: 296, y: 134 },
    { x: 314, y: 110 }, { x: 314, y: 128 }, { x: 247, y: 110 }, { x: 247, y: 127 },
    { x: 267, y: 95 }, { x: 267, y: 112 }, { x: 267, y: 129 }, { x: 255, y: 135 },
    { x: 267, y: 146 }, { x: 278, y: 97 }, { x: 278, y: 114 }, { x: 278, y: 131 },
    { x: 278, y: 148 }, { x: 289, y: 97 }, { x: 289, y: 114 }, { x: 289, y: 131 },
    { x: 289, y: 148 }, { x: 300, y: 93 }, { x: 300, y: 110 }, { x: 300, y: 127 },
    { x: 300, y: 144 }, { x: 312, y: 100 }, { x: 312, y: 117 }, { x: 312, y: 134 }
  ];

  const coords = [
    {
      x: 185, y: -10
    },
    {
      x: 185, y: 7
    },
    {
      x: 185, y: 22
    },
    {
      x: 185, y: 37
    },
    {
      x: 185, y: 52
    },
    {
      x: 185, y: 67
    },
    {
      x: 185, y: 82
    },
    {
      x: 185, y: 97
    },
    {
      x: 185, y: 112
    },
    {
      x: 185, y: 127
    },
    {
      x: 185, y: 142
    },
    {
      x: 168, y: -10
    },
    {
      x: 168, y: 7
    },
    {
      x: 168, y: 22
    },
    {
      x: 168, y: 37
    },
    {
      x: 168, y: 52
    },
    {
      x: 168, y: 67
    },
    {
      x: 168, y: 82
    },
    {
      x: 168, y: 97
    },
    {
      x: 168, y: 112
    },
    {
      x: 168, y: 127
    },
    {
      x: 168, y: 142
    },
    {
      x: 157, y: -5
    },
    {
      x: 151, y: 7
    },
    {
      x: 151, y: 22
    },
    {
      x: 151, y: 37
    },
    {
      x: 151, y: 52
    },
    {
      x: 151, y: 67
    },
    {
      x: 151, y: 82
    },
    {
      x: 151, y: 97
    },
    {
      x: 151, y: 112
    },
    {
      x: 151, y: 127
    },
    {
      x: 158, y: 139
    },
    {
      x: 160, y: 129
    },
    {
      x: 160, y: 112
    },
    {
      x: 160, y: 95
    },
    {
      x: 160, y: 78
    },
    {
      x: 160, y: 61
    },
    {
      x: 160, y: 44
    },
    {
      x: 160, y: 27
    },
    {
      x: 160, y: 10
    },
    {
      x: 160, y: -5
    },
    {
      x: 170, y: -15
    },
    {
      x: 170, y: 1
    },
    {
      x: 170, y: 17
    },
    {
      x: 170, y: 33
    },
    {
      x: 170, y: 49
    },
    {
      x: 170, y: 65
    }
  ]

  // Create offset coordinates for this player/opponent pair
  const offsetCoords = baseCoords.map(coord => ({
    x: coord.x + xOffset,
    y: coord.y + yOffset
  }));

  if (playerIndex < 6) {
    return {
      player: {
        native: offsetCoords,
        non_native: offsetCoords
      },
      opponent: {
        native: offsetCoords,
        non_native: offsetCoords
      }
    };
  }
  else {
    return {
      player: {
        native: [{ x: 0, y: 0 }],
        non_native: [{ x: 0, y: 0 }]
      },
      opponent: {
        native: coords,
        non_native: coords
      }
    }
  }
});