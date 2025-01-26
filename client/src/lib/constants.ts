import { TutorialStep } from "@/types";
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
    name: "Date",
  },
  {
    id: 5,
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

const MANCALA_ADDRESS =
  "0x5920638dd022083587d85417b642e85a16dc08bfe9ce8a536e17462cb332fd3";

const PROFILE_ADDRESS =
  "0x3714f8b523e83a41c722a8c6f21da9b6d9aee178bc7ed3daeeb2d4649ebf4bd";

export const POLICIES = [
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
    mancalaAlphaPlayerExtraTurnModels(
      where: { game_id: $gameId }
      limit: 1000000000
    ) {
      edges {
        node {
          player
        }
      }
    }
  }
`;

export const positions = (type: "player" | "opponent" | undefined) =>
  Array.from({ length: 7 }, (_, playerIndex) => {
    // Base x-offset for this player/opponent pair
    const xOffset =
      type === "player" ? playerIndex * 120 : 600 - playerIndex * 120;
    const yOffset = type === "player" ? 0 : -110;

    // Base coordinates from player 1
    const baseCoords = [
      { x: 270, y: 110 },
      { x: 287, y: 110 },
      { x: 270, y: 127 },
      { x: 287, y: 127 },
      { x: 270, y: 144 },
      { x: 287, y: 144 },
      { x: 270, y: 93 },
      { x: 287, y: 93 },
      { x: 253, y: 100 },
      { x: 253, y: 117 },
      { x: 253, y: 134 },
      { x: 304, y: 100 },
      { x: 304, y: 117 },
      { x: 304, y: 134 },
      { x: 260, y: 100 },
      { x: 260, y: 117 },
      { x: 260, y: 134 },
      { x: 278, y: 93 },
      { x: 278, y: 110 },
      { x: 278, y: 127 },
      { x: 278, y: 143 },
      { x: 296, y: 100 },
      { x: 296, y: 117 },
      { x: 296, y: 134 },
      { x: 314, y: 110 },
      { x: 314, y: 128 },
      { x: 247, y: 110 },
      { x: 247, y: 127 },
      { x: 267, y: 95 },
      { x: 267, y: 112 },
      { x: 267, y: 129 },
      { x: 255, y: 135 },
      { x: 267, y: 146 },
      { x: 278, y: 97 },
      { x: 278, y: 114 },
      { x: 278, y: 131 },
      { x: 278, y: 148 },
      { x: 289, y: 97 },
      { x: 289, y: 114 },
      { x: 289, y: 131 },
      { x: 289, y: 148 },
      { x: 300, y: 93 },
      { x: 300, y: 110 },
      { x: 300, y: 127 },
      { x: 300, y: 144 },
      { x: 312, y: 100 },
      { x: 312, y: 117 },
      { x: 312, y: 134 },
    ];

    const coords = [
      {
        x: 185,
        y: -10,
      },
      {
        x: 185,
        y: 7,
      },
      {
        x: 185,
        y: 22,
      },
      {
        x: 185,
        y: 37,
      },
      {
        x: 185,
        y: 52,
      },
      {
        x: 185,
        y: 67,
      },
      {
        x: 185,
        y: 82,
      },
      {
        x: 185,
        y: 97,
      },
      {
        x: 185,
        y: 112,
      },
      {
        x: 185,
        y: 127,
      },
      {
        x: 185,
        y: 142,
      },
      {
        x: 168,
        y: -10,
      },
      {
        x: 168,
        y: 7,
      },
      {
        x: 168,
        y: 22,
      },
      {
        x: 168,
        y: 37,
      },
      {
        x: 168,
        y: 52,
      },
      {
        x: 168,
        y: 67,
      },
      {
        x: 168,
        y: 82,
      },
      {
        x: 168,
        y: 97,
      },
      {
        x: 168,
        y: 112,
      },
      {
        x: 168,
        y: 127,
      },
      {
        x: 168,
        y: 142,
      },
      {
        x: 157,
        y: -5,
      },
      {
        x: 151,
        y: 7,
      },
      {
        x: 151,
        y: 22,
      },
      {
        x: 151,
        y: 37,
      },
      {
        x: 151,
        y: 52,
      },
      {
        x: 151,
        y: 67,
      },
      {
        x: 151,
        y: 82,
      },
      {
        x: 151,
        y: 97,
      },
      {
        x: 151,
        y: 112,
      },
      {
        x: 151,
        y: 127,
      },
      {
        x: 158,
        y: 139,
      },
      {
        x: 160,
        y: 129,
      },
      {
        x: 160,
        y: 112,
      },
      {
        x: 160,
        y: 95,
      },
      {
        x: 160,
        y: 78,
      },
      {
        x: 160,
        y: 61,
      },
      {
        x: 160,
        y: 44,
      },
      {
        x: 160,
        y: 27,
      },
      {
        x: 160,
        y: 10,
      },
      {
        x: 160,
        y: -5,
      },
      {
        x: 170,
        y: -15,
      },
      {
        x: 170,
        y: 1,
      },
      {
        x: 170,
        y: 17,
      },
      {
        x: 170,
        y: 33,
      },
      {
        x: 170,
        y: 49,
      },
      {
        x: 170,
        y: 65,
      },
    ];

    const offsetCoords = baseCoords.map((coord) => ({
      x: coord.x + xOffset,
      y: coord.y + yOffset,
    }));

    const coordsOffest = coords.map((coord) => ({
      x: type === "player" ? 782.5 + (185 - coord.x) + 185 : coord.x,
      y: coord.y,
    }));

    if (playerIndex < 6) {
      return {
        player: {
          native: offsetCoords,
          non_native: offsetCoords,
        },
        opponent: {
          native: offsetCoords,
          non_native: offsetCoords,
        },
      };
    } else {
      return {
        player: {
          native: coordsOffest,
          non_native: coordsOffest,
        },
        opponent: {
          native: coords,
          non_native: coords,
        },
      };
    }
  });

export const TUTORIAL_STEPS: TutorialStep[] = [
  {
    step: 1,
    description: "Click on pit 1 to see how seeds move counter-clockwise around the board.",
    message: "Let's start with a simple move. Click pit 1 to distribute its seeds.",
    initial_seeds: [
      // Player's seeds (24 total, 4 in each pit 1-6)
      { seed_id: "0x1", color: "Green", type: "player", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x2", color: "Green", type: "player", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x3", color: "Green", type: "player", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x4", color: "Green", type: "player", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x5", color: "Green", type: "player", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x6", color: "Green", type: "player", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x7", color: "Green", type: "player", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x8", color: "Green", type: "player", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x9", color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0xa", color: "Green", type: "player", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0xb", color: "Green", type: "player", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0xc", color: "Green", type: "player", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0xd", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0xe", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0xf", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x11", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x15", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x16", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
      
      // Opponent's seeds (24 total, 4 in each pit 1-6)
      { seed_id: "0x19", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x1a", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x1b", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x1c", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x1d", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x1e", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x1f", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x20", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x21", color: "Purple", type: "opponent", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x22", color: "Purple", type: "opponent", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x28", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x29", color: "Purple", type: "opponent", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x2a", color: "Purple", type: "opponent", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x2b", color: "Purple", type: "opponent", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x2c", color: "Purple", type: "opponent", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x2d", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x2e", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x2f", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x30", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 }
    ],
    result_seeds: [
        // Player's seeds (24 total, 4 in each pit 1-6)
        { seed_id: "0x1", color: "Green", type: "player", pit_number: 2, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0x2", color: "Green", type: "player", pit_number: 3, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0x3", color: "Green", type: "player", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0x4", color: "Green", type: "player", pit_number: 5, seed_number: 5, isNative: true, volume: 1 },
        
        { seed_id: "0x5", color: "Green", type: "player", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x6", color: "Green", type: "player", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x7", color: "Green", type: "player", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x8", color: "Green", type: "player", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x9", color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0xa", color: "Green", type: "player", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0xb", color: "Green", type: "player", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0xc", color: "Green", type: "player", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0xd", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0xe", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0xf", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x11", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x15", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x16", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
        
        // Opponent's seeds (24 total, 4 in each pit 1-6)
        { seed_id: "0x19", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x1a", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x1b", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x1c", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x1d", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x1e", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x1f", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x20", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x21", color: "Purple", type: "opponent", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x22", color: "Purple", type: "opponent", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x28", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x29", color: "Purple", type: "opponent", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x2a", color: "Purple", type: "opponent", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x2b", color: "Purple", type: "opponent", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x2c", color: "Purple", type: "opponent", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x2d", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x2e", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x2f", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x30", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 }
      ]
  },
  {
    step: 2,
    description: "Click on pit 3. When your last seed lands in an empty pit on your side, you capture the seeds from the opposite pit!",
    message: "Let's try capturing some seeds from your opponent.",
    initial_seeds: [
      // Player's seeds (24 total, 4 in each pit 1-6)
      { seed_id: "0x1", color: "Green", type: "player", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x2", color: "Green", type: "player", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x3", color: "Green", type: "player", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x4", color: "Green", type: "player", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x5", color: "Green", type: "player", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x6", color: "Green", type: "player", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x7", color: "Green", type: "player", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x8", color: "Green", type: "player", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x9", color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0xa", color: "Green", type: "player", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0xb", color: "Green", type: "player", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0xc", color: "Green", type: "player", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0xd", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0xe", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0xf", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x11", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x15", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x16", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
      
      // Opponent's seeds (24 total, 4 in each pit 1-6)
      { seed_id: "0x19", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x1a", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x1b", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x1c", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x1d", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x1e", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x1f", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x20", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x21", color: "Purple", type: "opponent", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x22", color: "Purple", type: "opponent", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x28", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x29", color: "Purple", type: "opponent", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x2a", color: "Purple", type: "opponent", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x2b", color: "Purple", type: "opponent", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x2c", color: "Purple", type: "opponent", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x2d", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x2e", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x2f", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x30", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 }
    ],
    result_seeds: [
        // Player's seeds (24 total, 4 in each pit 1-6)
        { seed_id: "0x1", color: "Green", type: "player", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x2", color: "Green", type: "player", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x3", color: "Green", type: "player", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x4", color: "Green", type: "player", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x5", color: "Green", type: "player", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x6", color: "Green", type: "player", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x7", color: "Green", type: "player", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x8", color: "Green", type: "player", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x9", color: "Green", type: "player", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0xa", color: "Green", type: "player", pit_number: 5, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0xb", color: "Green", type: "player", pit_number: 6, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0xc", color: "Green", type: "player", pit_number: 7, seed_number: 1, isNative: true, volume: 1 },
        
        { seed_id: "0xd", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0xe", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0xf", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x11", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x15", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x16", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
        
        // Opponent's seeds (24 total, 4 in each pit 1-6)
        { seed_id: "0x19", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x1a", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x1b", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x1c", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x1d", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x1e", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x1f", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x20", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x21", color: "Purple", type: "opponent", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x22", color: "Purple", type: "opponent", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x28", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x29", color: "Purple", type: "opponent", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x2a", color: "Purple", type: "opponent", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x2b", color: "Purple", type: "opponent", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x2c", color: "Purple", type: "opponent", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x2d", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x2e", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x2f", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x30", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 }
      ],
      final_move_seeds: [
        // Player's seeds (24 total, 4 in each pit 1-6)
        { seed_id: "0x1", color: "Green", type: "player", pit_number: 2, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0x2", color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x3", color: "Green", type: "player", pit_number: 4, seed_number: 6, isNative: true, volume: 1 },
        { seed_id: "0x4", color: "Green", type: "player", pit_number: 5, seed_number: 6, isNative: true, volume: 1 },
        
        { seed_id: "0x5", color: "Green", type: "player", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x6", color: "Green", type: "player", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x7", color: "Green", type: "player", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x8", color: "Green", type: "player", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x9", color: "Green", type: "player", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0xa", color: "Green", type: "player", pit_number: 5, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0xb", color: "Green", type: "player", pit_number: 6, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0xc", color: "Green", type: "player", pit_number: 7, seed_number: 1, isNative: true, volume: 1 },
        
        { seed_id: "0xd", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0xe", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0xf", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x11", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x15", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x16", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
        
        // Opponent's seeds (24 total, 4 in each pit 1-6)
        { seed_id: "0x19", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x1a", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x1b", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x1c", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x1d", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x1e", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x1f", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x20", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x21", color: "Purple", type: "opponent", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x22", color: "Purple", type: "opponent", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x28", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x29", color: "Purple", type: "opponent", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x2a", color: "Purple", type: "opponent", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x2b", color: "Purple", type: "opponent", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x2c", color: "Purple", type: "opponent", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x2d", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x2e", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x2f", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x30", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 }
      ]
  },
  {
    step: 3,
    description: "Perfect Capture Setup: Move 1 seed from pit 2 to empty pit 3 to capture opponent's seeds!",
    message: "Click pit 2 to perform a capture move!",
    initial_seeds: [
      // Player seeds (bottom)
      // Pit 1 (1 seed)
      { seed_id: "0x1", color: "Green", type: "player", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
      
      // Pit 3 (4 seeds)
      { seed_id: "0x2", color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x3", color: "Green", type: "player", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x4", color: "Green", type: "player", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x5", color: "Green", type: "player", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
      
      // Pit 4 (6 seeds)
      { seed_id: "0x6", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x7", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x8", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x9", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
      { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
      { seed_id: "0x11", color: "Green", type: "player", pit_number: 4, seed_number: 6, isNative: true, volume: 1 },
      
      // Pit 5 (5 seeds)
      { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x15", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
      { seed_id: "0x16", color: "Green", type: "player", pit_number: 5, seed_number: 5, isNative: true, volume: 1 },
      
      // Pit 6 (5 seeds)
      { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x19", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x20", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
      { seed_id: "0x21", color: "Green", type: "player", pit_number: 6, seed_number: 5, isNative: true, volume: 1 },
      
      // Player's store (Pit 7) (1 seed)
      { seed_id: "0x22", color: "Green", type: "player", pit_number: 7, seed_number: 1, isNative: true, volume: 1 },
      
      // Opponent seeds (top)
      // Pit 6 (2 non-native seeds)
      { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: false, volume: 1 },
      { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: false, volume: 1 },
      
      // Pit 6 (3 native seeds)
      { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
      { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 6, seed_number: 5, isNative: true, volume: 1 },
      
      // Pit 5 (5 seeds)
      { seed_id: "0x28", color: "Purple", type: "opponent", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x29", color: "Purple", type: "opponent", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x30", color: "Purple", type: "opponent", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x31", color: "Purple", type: "opponent", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
      { seed_id: "0x32", color: "Purple", type: "opponent", pit_number: 5, seed_number: 5, isNative: true, volume: 1 },
      
      // Pit 4 (5 seeds)
      { seed_id: "0x33", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x34", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x35", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x36", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
      { seed_id: "0x37", color: "Purple", type: "opponent", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
      
      // Pit 2 (5 seeds)
      { seed_id: "0x38", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x39", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x40", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x41", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
      { seed_id: "0x42", color: "Purple", type: "opponent", pit_number: 2, seed_number: 5, isNative: true, volume: 1 },
      
      // Pit 1 (5 seeds)
      { seed_id: "0x43", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x44", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x45", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x46", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
      { seed_id: "0x47", color: "Purple", type: "opponent", pit_number: 1, seed_number: 5, isNative: true, volume: 1 },
      
      // Opponent's store (Pit 7) (1 seed)
      { seed_id: "0x48", color: "Purple", type: "opponent", pit_number: 7, seed_number: 1, isNative: true, volume: 1 }
    ],
    result_seeds: [
    // Player seeds (bottom)
    // Pit 2 (1 seed)
    { seed_id: "0x1", color: "Green", type: "player", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
    
    // Pit 3 (4 seeds)
    { seed_id: "0x2", color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x3", color: "Green", type: "player", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x4", color: "Green", type: "player", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x5", color: "Green", type: "player", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
    
    // Pit 4 (6 seeds)
    { seed_id: "0x6", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x7", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x8", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x9", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
    { seed_id: "0x11", color: "Green", type: "player", pit_number: 4, seed_number: 6, isNative: true, volume: 1 },
    
    // Pit 5 (5 seeds)
    { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x15", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x16", color: "Green", type: "player", pit_number: 5, seed_number: 5, isNative: true, volume: 1 },
    
    // Pit 6 (5 seeds)
    { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x19", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x20", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x21", color: "Green", type: "player", pit_number: 6, seed_number: 5, isNative: true, volume: 1 },
    
    // Player's store (Pit 7) (1 seed)
    { seed_id: "0x22", color: "Green", type: "player", pit_number: 7, seed_number: 1, isNative: true, volume: 1 },
    
    // Opponent seeds (top)
    // Pit 6 (2 non-native seeds)
    { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: false, volume: 1 },
    { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: false, volume: 1 },
    
    // Pit 6 (3 native seeds)
    { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 6, seed_number: 5, isNative: true, volume: 1 },
    
    // Pit 5 (5 seeds)
    { seed_id: "0x28", color: "Purple", type: "opponent", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x29", color: "Purple", type: "opponent", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x30", color: "Purple", type: "opponent", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x31", color: "Purple", type: "opponent", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x32", color: "Purple", type: "opponent", pit_number: 5, seed_number: 5, isNative: true, volume: 1 },
    
    // Pit 4 (5 seeds)
    { seed_id: "0x33", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x34", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x35", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x36", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x37", color: "Purple", type: "opponent", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
    
    // Pit 2 (5 seeds)
    { seed_id: "0x38", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x39", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x40", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x41", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x42", color: "Purple", type: "opponent", pit_number: 2, seed_number: 5, isNative: true, volume: 1 },
    
    // Pit 1 (5 seeds)
    { seed_id: "0x43", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x44", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x45", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x46", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x47", color: "Purple", type: "opponent", pit_number: 1, seed_number: 5, isNative: true, volume: 1 },
    
    // Opponent's store (Pit 7) (1 seed)
    { seed_id: "0x48", color: "Purple", type: "opponent", pit_number: 7, seed_number: 1, isNative: true, volume: 1 }
  ],
  final_move_seeds: [
    // Player seeds (bottom)
    // Pit 2 (1 seed)
    { seed_id: "0x1", color: "Green", type: "player", pit_number: 7, seed_number: 2, isNative: true, volume: 1 },
    
    // Pit 3 (4 seeds)
    { seed_id: "0x2", color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x3", color: "Green", type: "player", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x4", color: "Green", type: "player", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x5", color: "Green", type: "player", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
    
    // Pit 4 (6 seeds)
    { seed_id: "0x6", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x7", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x8", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x9", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
    { seed_id: "0x11", color: "Green", type: "player", pit_number: 4, seed_number: 6, isNative: true, volume: 1 },
    
    // Pit 5 (5 seeds)
    { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x15", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x16", color: "Green", type: "player", pit_number: 5, seed_number: 5, isNative: true, volume: 1 },
    
    // Pit 6 (5 seeds)
    { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x19", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x20", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x21", color: "Green", type: "player", pit_number: 6, seed_number: 5, isNative: true, volume: 1 },
    
    // Player's store (Pit 7) (1 seed)
    { seed_id: "0x22", color: "Green", type: "player", pit_number: 7, seed_number: 1, isNative: true, volume: 1 },
    
    // Opponent seeds (top)
    // Pit 6 (2 non-native seeds)
    { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: false, volume: 1 },
    { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: false, volume: 1 },
    
    // Pit 6 (3 native seeds)
    { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 6, seed_number: 5, isNative: true, volume: 1 },
    
    // Pit 5 (5 seeds)
    { seed_id: "0x28", color: "Purple", type: "player", pit_number: 7, seed_number: 3, isNative: false, volume: 1 },
    { seed_id: "0x29", color: "Purple", type: "player", pit_number: 7, seed_number: 4, isNative: false, volume: 1 },
    { seed_id: "0x30", color: "Purple", type: "player", pit_number: 7, seed_number: 5, isNative: false, volume: 1 },
    { seed_id: "0x31", color: "Purple", type: "player", pit_number: 7, seed_number: 6, isNative: false, volume: 1 },
    { seed_id: "0x32", color: "Purple", type: "player", pit_number: 7, seed_number: 7, isNative: false, volume: 1 },
    
    // Pit 4 (5 seeds)
    { seed_id: "0x33", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x34", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x35", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x36", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x37", color: "Purple", type: "opponent", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
    
    
    // Pit 2 (5 seeds)
    { seed_id: "0x38", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x39", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x40", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x41", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x42", color: "Purple", type: "opponent", pit_number: 2, seed_number: 5, isNative: true, volume: 1 },
    
    // Pit 1 (5 seeds)
    { seed_id: "0x43", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x44", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x45", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x46", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x47", color: "Purple", type: "opponent", pit_number: 1, seed_number: 5, isNative: true, volume: 1 },
    
    // Opponent's store (Pit 7) (1 seed)
    { seed_id: "0x48", color: "Purple", type: "opponent", pit_number: 7, seed_number: 1, isNative: true, volume: 1 }
  ]
  }
];