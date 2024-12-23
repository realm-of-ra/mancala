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

const ACTION_ADDRESS =
  "0x2893d993a077a379c0f19d13fb0148785c31f64fb11f5ba886ae69a4ac69b0f";

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
    target: ACTION_ADDRESS,
    method: "create_player_profile",
  },
  {
    target: ACTION_ADDRESS,
    method: "update_player_uri",
  },
  {
    target: ACTION_ADDRESS,
    method: "rename_player",
  },
  {
    target: ACTION_ADDRESS,
    method: "update_player_profile",
  },
  {
    target: ACTION_ADDRESS,
    method: "new_profile",
  },
];

export const MancalaBoardModelsQuery = gql`
  query mancalaDevMancalaBoardModels {
    mancalaDevMancalaBoardModels {
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
  query mancalaDevMancalaBoardModel($gameId: u128) {
    mancalaDevMancalaBoardModels(where: { game_id: $gameId }, limit: 1000000000) {
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
  query mancalaDevPlayerModels($gameId: u128) {
    mancalaDevPlayerModels(where: { game_id: $gameId }, limit: 1000000000) {
      edges {
        node {
          address
          game_id
          len_pits
          restart_requested
        }
      }
    }
    mancalaDevPitModels(where: { game_id: $gameId }, limit: 1000000000) {
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
  query mancalaDevSeedModels($gameId: u128) {
    mancalaDevSeedModels(where: { game_id: $gameId }, limit: 1000000000) {
      edges {
        node {
          game_id
          pit_number
          player
          seed_number
          color
          seed_id
        }
      }
    }
  }
`;

export const MancalaHeaderQuery = gql`
  query FetchModelsForHeader {
    mancalaDevGameModels {
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
  query mancalaDevPlayerNames {
    mancalaDevProfileModels {
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