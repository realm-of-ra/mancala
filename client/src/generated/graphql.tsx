import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ContractAddress: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Enum: { input: any; output: any; }
  bool: { input: any; output: any; }
  felt252: { input: any; output: any; }
  u8: { input: any; output: any; }
  u32: { input: any; output: any; }
  u64: { input: any; output: any; }
  u128: { input: any; output: any; }
};

export type GameId = {
  __typename?: 'GameId';
  entity: Maybe<World__Entity>;
  game_id: Maybe<Scalars['u128']['output']>;
  id: Maybe<Scalars['u32']['output']>;
};

export type GameIdConnection = {
  __typename?: 'GameIdConnection';
  edges: Maybe<Array<Maybe<GameIdEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GameIdEdge = {
  __typename?: 'GameIdEdge';
  cursor: Maybe<Scalars['Cursor']['output']>;
  node: Maybe<GameId>;
};

export type GameIdOrder = {
  direction: OrderDirection;
  field: GameIdOrderField;
};

export enum GameIdOrderField {
  GameId = 'GAME_ID',
  Id = 'ID'
}

export type GameIdWhereInput = {
  game_id: InputMaybe<Scalars['u128']['input']>;
  game_idEQ: InputMaybe<Scalars['u128']['input']>;
  game_idGT: InputMaybe<Scalars['u128']['input']>;
  game_idGTE: InputMaybe<Scalars['u128']['input']>;
  game_idIN: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE: InputMaybe<Scalars['u128']['input']>;
  game_idLT: InputMaybe<Scalars['u128']['input']>;
  game_idLTE: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE: InputMaybe<Scalars['u128']['input']>;
  id: InputMaybe<Scalars['u32']['input']>;
  idEQ: InputMaybe<Scalars['u32']['input']>;
  idGT: InputMaybe<Scalars['u32']['input']>;
  idGTE: InputMaybe<Scalars['u32']['input']>;
  idIN: InputMaybe<Array<InputMaybe<Scalars['u32']['input']>>>;
  idLIKE: InputMaybe<Scalars['u32']['input']>;
  idLT: InputMaybe<Scalars['u32']['input']>;
  idLTE: InputMaybe<Scalars['u32']['input']>;
  idNEQ: InputMaybe<Scalars['u32']['input']>;
  idNOTIN: InputMaybe<Array<InputMaybe<Scalars['u32']['input']>>>;
  idNOTLIKE: InputMaybe<Scalars['u32']['input']>;
};

export type GamePlayer = {
  __typename?: 'GamePlayer';
  address: Maybe<Scalars['ContractAddress']['output']>;
  entity: Maybe<World__Entity>;
  game_id: Maybe<Scalars['u128']['output']>;
  mancala: Maybe<Scalars['u8']['output']>;
  pit1: Maybe<Scalars['u8']['output']>;
  pit2: Maybe<Scalars['u8']['output']>;
  pit3: Maybe<Scalars['u8']['output']>;
  pit4: Maybe<Scalars['u8']['output']>;
  pit5: Maybe<Scalars['u8']['output']>;
  pit6: Maybe<Scalars['u8']['output']>;
  restart_requested: Maybe<Scalars['bool']['output']>;
};

export type GamePlayerConnection = {
  __typename?: 'GamePlayerConnection';
  edges: Maybe<Array<Maybe<GamePlayerEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GamePlayerEdge = {
  __typename?: 'GamePlayerEdge';
  cursor: Maybe<Scalars['Cursor']['output']>;
  node: Maybe<GamePlayer>;
};

export type GamePlayerOrder = {
  direction: OrderDirection;
  field: GamePlayerOrderField;
};

export enum GamePlayerOrderField {
  Address = 'ADDRESS',
  GameId = 'GAME_ID',
  Mancala = 'MANCALA',
  Pit1 = 'PIT1',
  Pit2 = 'PIT2',
  Pit3 = 'PIT3',
  Pit4 = 'PIT4',
  Pit5 = 'PIT5',
  Pit6 = 'PIT6',
  RestartRequested = 'RESTART_REQUESTED'
}

export type GamePlayerWhereInput = {
  address: InputMaybe<Scalars['ContractAddress']['input']>;
  addressEQ: InputMaybe<Scalars['ContractAddress']['input']>;
  addressGT: InputMaybe<Scalars['ContractAddress']['input']>;
  addressGTE: InputMaybe<Scalars['ContractAddress']['input']>;
  addressIN: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  addressLIKE: InputMaybe<Scalars['ContractAddress']['input']>;
  addressLT: InputMaybe<Scalars['ContractAddress']['input']>;
  addressLTE: InputMaybe<Scalars['ContractAddress']['input']>;
  addressNEQ: InputMaybe<Scalars['ContractAddress']['input']>;
  addressNOTIN: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  addressNOTLIKE: InputMaybe<Scalars['ContractAddress']['input']>;
  game_id: InputMaybe<Scalars['u128']['input']>;
  game_idEQ: InputMaybe<Scalars['u128']['input']>;
  game_idGT: InputMaybe<Scalars['u128']['input']>;
  game_idGTE: InputMaybe<Scalars['u128']['input']>;
  game_idIN: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE: InputMaybe<Scalars['u128']['input']>;
  game_idLT: InputMaybe<Scalars['u128']['input']>;
  game_idLTE: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE: InputMaybe<Scalars['u128']['input']>;
  mancala: InputMaybe<Scalars['u8']['input']>;
  mancalaEQ: InputMaybe<Scalars['u8']['input']>;
  mancalaGT: InputMaybe<Scalars['u8']['input']>;
  mancalaGTE: InputMaybe<Scalars['u8']['input']>;
  mancalaIN: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  mancalaLIKE: InputMaybe<Scalars['u8']['input']>;
  mancalaLT: InputMaybe<Scalars['u8']['input']>;
  mancalaLTE: InputMaybe<Scalars['u8']['input']>;
  mancalaNEQ: InputMaybe<Scalars['u8']['input']>;
  mancalaNOTIN: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  mancalaNOTLIKE: InputMaybe<Scalars['u8']['input']>;
  pit1: InputMaybe<Scalars['u8']['input']>;
  pit1EQ: InputMaybe<Scalars['u8']['input']>;
  pit1GT: InputMaybe<Scalars['u8']['input']>;
  pit1GTE: InputMaybe<Scalars['u8']['input']>;
  pit1IN: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit1LIKE: InputMaybe<Scalars['u8']['input']>;
  pit1LT: InputMaybe<Scalars['u8']['input']>;
  pit1LTE: InputMaybe<Scalars['u8']['input']>;
  pit1NEQ: InputMaybe<Scalars['u8']['input']>;
  pit1NOTIN: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit1NOTLIKE: InputMaybe<Scalars['u8']['input']>;
  pit2: InputMaybe<Scalars['u8']['input']>;
  pit2EQ: InputMaybe<Scalars['u8']['input']>;
  pit2GT: InputMaybe<Scalars['u8']['input']>;
  pit2GTE: InputMaybe<Scalars['u8']['input']>;
  pit2IN: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit2LIKE: InputMaybe<Scalars['u8']['input']>;
  pit2LT: InputMaybe<Scalars['u8']['input']>;
  pit2LTE: InputMaybe<Scalars['u8']['input']>;
  pit2NEQ: InputMaybe<Scalars['u8']['input']>;
  pit2NOTIN: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit2NOTLIKE: InputMaybe<Scalars['u8']['input']>;
  pit3: InputMaybe<Scalars['u8']['input']>;
  pit3EQ: InputMaybe<Scalars['u8']['input']>;
  pit3GT: InputMaybe<Scalars['u8']['input']>;
  pit3GTE: InputMaybe<Scalars['u8']['input']>;
  pit3IN: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit3LIKE: InputMaybe<Scalars['u8']['input']>;
  pit3LT: InputMaybe<Scalars['u8']['input']>;
  pit3LTE: InputMaybe<Scalars['u8']['input']>;
  pit3NEQ: InputMaybe<Scalars['u8']['input']>;
  pit3NOTIN: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit3NOTLIKE: InputMaybe<Scalars['u8']['input']>;
  pit4: InputMaybe<Scalars['u8']['input']>;
  pit4EQ: InputMaybe<Scalars['u8']['input']>;
  pit4GT: InputMaybe<Scalars['u8']['input']>;
  pit4GTE: InputMaybe<Scalars['u8']['input']>;
  pit4IN: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit4LIKE: InputMaybe<Scalars['u8']['input']>;
  pit4LT: InputMaybe<Scalars['u8']['input']>;
  pit4LTE: InputMaybe<Scalars['u8']['input']>;
  pit4NEQ: InputMaybe<Scalars['u8']['input']>;
  pit4NOTIN: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit4NOTLIKE: InputMaybe<Scalars['u8']['input']>;
  pit5: InputMaybe<Scalars['u8']['input']>;
  pit5EQ: InputMaybe<Scalars['u8']['input']>;
  pit5GT: InputMaybe<Scalars['u8']['input']>;
  pit5GTE: InputMaybe<Scalars['u8']['input']>;
  pit5IN: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit5LIKE: InputMaybe<Scalars['u8']['input']>;
  pit5LT: InputMaybe<Scalars['u8']['input']>;
  pit5LTE: InputMaybe<Scalars['u8']['input']>;
  pit5NEQ: InputMaybe<Scalars['u8']['input']>;
  pit5NOTIN: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit5NOTLIKE: InputMaybe<Scalars['u8']['input']>;
  pit6: InputMaybe<Scalars['u8']['input']>;
  pit6EQ: InputMaybe<Scalars['u8']['input']>;
  pit6GT: InputMaybe<Scalars['u8']['input']>;
  pit6GTE: InputMaybe<Scalars['u8']['input']>;
  pit6IN: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit6LIKE: InputMaybe<Scalars['u8']['input']>;
  pit6LT: InputMaybe<Scalars['u8']['input']>;
  pit6LTE: InputMaybe<Scalars['u8']['input']>;
  pit6NEQ: InputMaybe<Scalars['u8']['input']>;
  pit6NOTIN: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit6NOTLIKE: InputMaybe<Scalars['u8']['input']>;
  restart_requested: InputMaybe<Scalars['bool']['input']>;
};

export type MancalaGame = {
  __typename?: 'MancalaGame';
  current_player: Maybe<Scalars['ContractAddress']['output']>;
  entity: Maybe<World__Entity>;
  game_id: Maybe<Scalars['u128']['output']>;
  is_private: Maybe<Scalars['bool']['output']>;
  last_move: Maybe<Scalars['u64']['output']>;
  player_one: Maybe<Scalars['ContractAddress']['output']>;
  player_two: Maybe<Scalars['ContractAddress']['output']>;
  status: Maybe<Scalars['Enum']['output']>;
  time_between_move: Maybe<Scalars['u64']['output']>;
  winner: Maybe<Scalars['ContractAddress']['output']>;
};

export type MancalaGameConnection = {
  __typename?: 'MancalaGameConnection';
  edges: Maybe<Array<Maybe<MancalaGameEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MancalaGameEdge = {
  __typename?: 'MancalaGameEdge';
  cursor: Maybe<Scalars['Cursor']['output']>;
  node: Maybe<MancalaGame>;
};

export type MancalaGameOrder = {
  direction: OrderDirection;
  field: MancalaGameOrderField;
};

export enum MancalaGameOrderField {
  CurrentPlayer = 'CURRENT_PLAYER',
  GameId = 'GAME_ID',
  IsPrivate = 'IS_PRIVATE',
  LastMove = 'LAST_MOVE',
  PlayerOne = 'PLAYER_ONE',
  PlayerTwo = 'PLAYER_TWO',
  Status = 'STATUS',
  TimeBetweenMove = 'TIME_BETWEEN_MOVE',
  Winner = 'WINNER'
}

export type MancalaGameWhereInput = {
  current_player: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerEQ: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerGT: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerGTE: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerIN: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  current_playerLIKE: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerLT: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerLTE: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerNEQ: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerNOTIN: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  current_playerNOTLIKE: InputMaybe<Scalars['ContractAddress']['input']>;
  game_id: InputMaybe<Scalars['u128']['input']>;
  game_idEQ: InputMaybe<Scalars['u128']['input']>;
  game_idGT: InputMaybe<Scalars['u128']['input']>;
  game_idGTE: InputMaybe<Scalars['u128']['input']>;
  game_idIN: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE: InputMaybe<Scalars['u128']['input']>;
  game_idLT: InputMaybe<Scalars['u128']['input']>;
  game_idLTE: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE: InputMaybe<Scalars['u128']['input']>;
  is_private: InputMaybe<Scalars['bool']['input']>;
  last_move: InputMaybe<Scalars['u64']['input']>;
  last_moveEQ: InputMaybe<Scalars['u64']['input']>;
  last_moveGT: InputMaybe<Scalars['u64']['input']>;
  last_moveGTE: InputMaybe<Scalars['u64']['input']>;
  last_moveIN: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  last_moveLIKE: InputMaybe<Scalars['u64']['input']>;
  last_moveLT: InputMaybe<Scalars['u64']['input']>;
  last_moveLTE: InputMaybe<Scalars['u64']['input']>;
  last_moveNEQ: InputMaybe<Scalars['u64']['input']>;
  last_moveNOTIN: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  last_moveNOTLIKE: InputMaybe<Scalars['u64']['input']>;
  player_one: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneEQ: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneGT: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneGTE: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneIN: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  player_oneLIKE: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneLT: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneLTE: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneNEQ: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneNOTIN: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  player_oneNOTLIKE: InputMaybe<Scalars['ContractAddress']['input']>;
  player_two: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoEQ: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoGT: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoGTE: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoIN: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  player_twoLIKE: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoLT: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoLTE: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoNEQ: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoNOTIN: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  player_twoNOTLIKE: InputMaybe<Scalars['ContractAddress']['input']>;
  status: InputMaybe<Scalars['Enum']['input']>;
  time_between_move: InputMaybe<Scalars['u64']['input']>;
  time_between_moveEQ: InputMaybe<Scalars['u64']['input']>;
  time_between_moveGT: InputMaybe<Scalars['u64']['input']>;
  time_between_moveGTE: InputMaybe<Scalars['u64']['input']>;
  time_between_moveIN: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  time_between_moveLIKE: InputMaybe<Scalars['u64']['input']>;
  time_between_moveLT: InputMaybe<Scalars['u64']['input']>;
  time_between_moveLTE: InputMaybe<Scalars['u64']['input']>;
  time_between_moveNEQ: InputMaybe<Scalars['u64']['input']>;
  time_between_moveNOTIN: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  time_between_moveNOTLIKE: InputMaybe<Scalars['u64']['input']>;
  winner: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerEQ: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerGT: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerGTE: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerIN: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  winnerLIKE: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerLT: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerLTE: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerNEQ: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerNOTIN: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  winnerNOTLIKE: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type ModelUnion = GameId | GamePlayer | MancalaGame | Player;

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Player = {
  __typename?: 'Player';
  address: Maybe<Scalars['ContractAddress']['output']>;
  entity: Maybe<World__Entity>;
  games_lost: Maybe<Array<Maybe<Scalars['u128']['output']>>>;
  games_won: Maybe<Array<Maybe<Scalars['u128']['output']>>>;
};

export type PlayerConnection = {
  __typename?: 'PlayerConnection';
  edges: Maybe<Array<Maybe<PlayerEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PlayerEdge = {
  __typename?: 'PlayerEdge';
  cursor: Maybe<Scalars['Cursor']['output']>;
  node: Maybe<Player>;
};

export type PlayerOrder = {
  direction: OrderDirection;
  field: PlayerOrderField;
};

export enum PlayerOrderField {
  Address = 'ADDRESS',
  GamesLost = 'GAMES_LOST',
  GamesWon = 'GAMES_WON'
}

export type PlayerWhereInput = {
  address: InputMaybe<Scalars['ContractAddress']['input']>;
  addressEQ: InputMaybe<Scalars['ContractAddress']['input']>;
  addressGT: InputMaybe<Scalars['ContractAddress']['input']>;
  addressGTE: InputMaybe<Scalars['ContractAddress']['input']>;
  addressIN: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  addressLIKE: InputMaybe<Scalars['ContractAddress']['input']>;
  addressLT: InputMaybe<Scalars['ContractAddress']['input']>;
  addressLTE: InputMaybe<Scalars['ContractAddress']['input']>;
  addressNEQ: InputMaybe<Scalars['ContractAddress']['input']>;
  addressNOTIN: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  addressNOTLIKE: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type World__Content = {
  __typename?: 'World__Content';
  coverUri: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  iconUri: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  socials: Maybe<Array<Maybe<World__Social>>>;
  website: Maybe<Scalars['String']['output']>;
};

export type World__Entity = {
  __typename?: 'World__Entity';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  eventId: Maybe<Scalars['String']['output']>;
  executedAt: Maybe<Scalars['DateTime']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  keys: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  models: Maybe<Array<Maybe<ModelUnion>>>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type World__EntityConnection = {
  __typename?: 'World__EntityConnection';
  edges: Maybe<Array<Maybe<World__EntityEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__EntityEdge = {
  __typename?: 'World__EntityEdge';
  cursor: Maybe<Scalars['Cursor']['output']>;
  node: Maybe<World__Entity>;
};

export type World__Event = {
  __typename?: 'World__Event';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  data: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  executedAt: Maybe<Scalars['DateTime']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  keys: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  transactionHash: Maybe<Scalars['String']['output']>;
};

export type World__EventConnection = {
  __typename?: 'World__EventConnection';
  edges: Maybe<Array<Maybe<World__EventEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__EventEdge = {
  __typename?: 'World__EventEdge';
  cursor: Maybe<Scalars['Cursor']['output']>;
  node: Maybe<World__Event>;
};

export type World__EventMessage = {
  __typename?: 'World__EventMessage';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  eventId: Maybe<Scalars['String']['output']>;
  executedAt: Maybe<Scalars['DateTime']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  keys: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  models: Maybe<Array<Maybe<ModelUnion>>>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type World__EventMessageConnection = {
  __typename?: 'World__EventMessageConnection';
  edges: Maybe<Array<Maybe<World__EventMessageEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__EventMessageEdge = {
  __typename?: 'World__EventMessageEdge';
  cursor: Maybe<Scalars['Cursor']['output']>;
  node: Maybe<World__EventMessage>;
};

export type World__Metadata = {
  __typename?: 'World__Metadata';
  content: Maybe<World__Content>;
  coverImg: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  executedAt: Maybe<Scalars['DateTime']['output']>;
  iconImg: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  uri: Maybe<Scalars['String']['output']>;
  worldAddress: Scalars['String']['output'];
};

export type World__MetadataConnection = {
  __typename?: 'World__MetadataConnection';
  edges: Maybe<Array<Maybe<World__MetadataEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__MetadataEdge = {
  __typename?: 'World__MetadataEdge';
  cursor: Maybe<Scalars['Cursor']['output']>;
  node: Maybe<World__Metadata>;
};

export type World__Model = {
  __typename?: 'World__Model';
  classHash: Maybe<Scalars['felt252']['output']>;
  contractAddress: Maybe<Scalars['felt252']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  executedAt: Maybe<Scalars['DateTime']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
  transactionHash: Maybe<Scalars['felt252']['output']>;
};

export type World__ModelConnection = {
  __typename?: 'World__ModelConnection';
  edges: Maybe<Array<Maybe<World__ModelEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__ModelEdge = {
  __typename?: 'World__ModelEdge';
  cursor: Maybe<Scalars['Cursor']['output']>;
  node: Maybe<World__Model>;
};

export type World__ModelOrder = {
  direction: OrderDirection;
  field: World__ModelOrderField;
};

export enum World__ModelOrderField {
  ClassHash = 'CLASS_HASH',
  Name = 'NAME'
}

export type World__PageInfo = {
  __typename?: 'World__PageInfo';
  endCursor: Maybe<Scalars['Cursor']['output']>;
  hasNextPage: Maybe<Scalars['Boolean']['output']>;
  hasPreviousPage: Maybe<Scalars['Boolean']['output']>;
  startCursor: Maybe<Scalars['Cursor']['output']>;
};

export type World__Query = {
  __typename?: 'World__Query';
  entities: Maybe<World__EntityConnection>;
  entity: World__Entity;
  eventMessage: World__EventMessage;
  eventMessages: Maybe<World__EventMessageConnection>;
  events: Maybe<World__EventConnection>;
  gameIdModels: Maybe<GameIdConnection>;
  gamePlayerModels: Maybe<GamePlayerConnection>;
  mancalaGameModels: Maybe<MancalaGameConnection>;
  metadatas: Maybe<World__MetadataConnection>;
  model: World__Model;
  models: Maybe<World__ModelConnection>;
  playerModels: Maybe<PlayerConnection>;
  transaction: World__Transaction;
  transactions: Maybe<World__TransactionConnection>;
};


export type World__QueryEntitiesArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>;
  before: InputMaybe<Scalars['Cursor']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  keys: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryEntityArgs = {
  id: Scalars['ID']['input'];
};


export type World__QueryEventMessageArgs = {
  id: Scalars['ID']['input'];
};


export type World__QueryEventMessagesArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>;
  before: InputMaybe<Scalars['Cursor']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  keys: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryEventsArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>;
  before: InputMaybe<Scalars['Cursor']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  keys: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryGameIdModelsArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>;
  before: InputMaybe<Scalars['Cursor']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<GameIdOrder>;
  where: InputMaybe<GameIdWhereInput>;
};


export type World__QueryGamePlayerModelsArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>;
  before: InputMaybe<Scalars['Cursor']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<GamePlayerOrder>;
  where: InputMaybe<GamePlayerWhereInput>;
};


export type World__QueryMancalaGameModelsArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>;
  before: InputMaybe<Scalars['Cursor']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<MancalaGameOrder>;
  where: InputMaybe<MancalaGameWhereInput>;
};


export type World__QueryMetadatasArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>;
  before: InputMaybe<Scalars['Cursor']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryModelArgs = {
  id: Scalars['ID']['input'];
};


export type World__QueryModelsArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>;
  before: InputMaybe<Scalars['Cursor']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<World__ModelOrder>;
};


export type World__QueryPlayerModelsArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>;
  before: InputMaybe<Scalars['Cursor']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<PlayerOrder>;
  where: InputMaybe<PlayerWhereInput>;
};


export type World__QueryTransactionArgs = {
  transactionHash: Scalars['ID']['input'];
};


export type World__QueryTransactionsArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>;
  before: InputMaybe<Scalars['Cursor']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};

export type World__Social = {
  __typename?: 'World__Social';
  name: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type World__Subscription = {
  __typename?: 'World__Subscription';
  entityUpdated: World__Entity;
  eventEmitted: World__Event;
  eventMessageUpdated: World__EventMessage;
  modelRegistered: World__Model;
};


export type World__SubscriptionEntityUpdatedArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type World__SubscriptionEventEmittedArgs = {
  keys: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type World__SubscriptionEventMessageUpdatedArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type World__SubscriptionModelRegisteredArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type World__Transaction = {
  __typename?: 'World__Transaction';
  calldata: Maybe<Array<Maybe<Scalars['felt252']['output']>>>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  executedAt: Maybe<Scalars['DateTime']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  maxFee: Maybe<Scalars['felt252']['output']>;
  nonce: Maybe<Scalars['felt252']['output']>;
  senderAddress: Maybe<Scalars['felt252']['output']>;
  signature: Maybe<Array<Maybe<Scalars['felt252']['output']>>>;
  transactionHash: Maybe<Scalars['felt252']['output']>;
};

export type World__TransactionConnection = {
  __typename?: 'World__TransactionConnection';
  edges: Maybe<Array<Maybe<World__TransactionEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__TransactionEdge = {
  __typename?: 'World__TransactionEdge';
  cursor: Maybe<Scalars['Cursor']['output']>;
  node: Maybe<World__Transaction>;
};

export type GameDataQueryVariables = Exact<{
  gameId: Scalars['u128']['input'];
}>;


export type GameDataQuery = { __typename?: 'World__Query', game_data: { __typename?: 'MancalaGameConnection', edges: Array<{ __typename?: 'MancalaGameEdge', node: { __typename?: 'MancalaGame', player_one: any | null, player_two: any | null, current_player: any | null, status: any | null, winner: any | null } | null } | null> | null } | null };

export type PlayDataQueryVariables = Exact<{
  player_1: Scalars['ContractAddress']['input'];
  player_2: Scalars['ContractAddress']['input'];
  gameId: InputMaybe<Scalars['u128']['input']>;
}>;


export type PlayDataQuery = { __typename?: 'World__Query', player_one: { __typename?: 'GamePlayerConnection', edges: Array<{ __typename?: 'GamePlayerEdge', node: { __typename?: 'GamePlayer', address: any | null, game_id: any | null, pit1: any | null, pit2: any | null, pit3: any | null, pit4: any | null, pit5: any | null, pit6: any | null, mancala: any | null } | null } | null> | null } | null, player_two: { __typename?: 'GamePlayerConnection', edges: Array<{ __typename?: 'GamePlayerEdge', node: { __typename?: 'GamePlayer', address: any | null, game_id: any | null, pit1: any | null, pit2: any | null, pit3: any | null, pit4: any | null, pit5: any | null, pit6: any | null, mancala: any | null } | null } | null> | null } | null };

export type MancalaModelsFetchQueryVariables = Exact<{ [key: string]: never; }>;


export type MancalaModelsFetchQuery = { __typename?: 'World__Query', mancalaGameModels: { __typename?: 'MancalaGameConnection', edges: Array<{ __typename?: 'MancalaGameEdge', node: { __typename?: 'MancalaGame', game_id: any | null, player_one: any | null, player_two: any | null, current_player: any | null, winner: any | null, status: any | null, is_private: any | null } | null } | null> | null } | null, transactions: { __typename?: 'World__TransactionConnection', edges: Array<{ __typename?: 'World__TransactionEdge', node: { __typename?: 'World__Transaction', executedAt: any | null } | null } | null> | null } | null };

export type FetchModelsForLeaderBoardQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchModelsForLeaderBoardQuery = { __typename?: 'World__Query', mancalaGameModels: { __typename?: 'MancalaGameConnection', edges: Array<{ __typename?: 'MancalaGameEdge', node: { __typename?: 'MancalaGame', game_id: any | null, player_one: any | null, player_two: any | null, current_player: any | null, winner: any | null, status: any | null, is_private: any | null } | null } | null> | null } | null };

export type FetchModelsForHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchModelsForHeaderQuery = { __typename?: 'World__Query', mancalaGameModels: { __typename?: 'MancalaGameConnection', edges: Array<{ __typename?: 'MancalaGameEdge', node: { __typename?: 'MancalaGame', game_id: any | null, player_one: any | null, player_two: any | null, current_player: any | null, winner: any | null, status: any | null, is_private: any | null } | null } | null> | null } | null };


export const GameDataDocument = gql`
    query GameData($gameId: u128!) {
  game_data: mancalaGameModels(where: {game_id: $gameId}) {
    edges {
      node {
        player_one
        player_two
        current_player
        status
        winner
      }
    }
  }
}
    `;

/**
 * __useGameDataQuery__
 *
 * To run a query within a React component, call `useGameDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGameDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameDataQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useGameDataQuery(baseOptions: Apollo.QueryHookOptions<GameDataQuery, GameDataQueryVariables> & ({ variables: GameDataQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GameDataQuery, GameDataQueryVariables>(GameDataDocument, options);
      }
export function useGameDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GameDataQuery, GameDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GameDataQuery, GameDataQueryVariables>(GameDataDocument, options);
        }
export function useGameDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GameDataQuery, GameDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GameDataQuery, GameDataQueryVariables>(GameDataDocument, options);
        }
export type GameDataQueryHookResult = ReturnType<typeof useGameDataQuery>;
export type GameDataLazyQueryHookResult = ReturnType<typeof useGameDataLazyQuery>;
export type GameDataSuspenseQueryHookResult = ReturnType<typeof useGameDataSuspenseQuery>;
export type GameDataQueryResult = Apollo.QueryResult<GameDataQuery, GameDataQueryVariables>;
export const PlayDataDocument = gql`
    query PlayData($player_1: ContractAddress!, $player_2: ContractAddress!, $gameId: u128) {
  player_one: gamePlayerModels(
    where: {game_id: $gameId, address: $player_1}
    last: 1
  ) {
    edges {
      node {
        address
        game_id
        pit1
        pit2
        pit3
        pit4
        pit5
        pit6
        mancala
      }
    }
  }
  player_two: gamePlayerModels(
    where: {game_id: $gameId, address: $player_2}
    last: 1
  ) {
    edges {
      node {
        address
        game_id
        pit1
        pit2
        pit3
        pit4
        pit5
        pit6
        mancala
      }
    }
  }
}
    `;

/**
 * __usePlayDataQuery__
 *
 * To run a query within a React component, call `usePlayDataQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayDataQuery({
 *   variables: {
 *      player_1: // value for 'player_1'
 *      player_2: // value for 'player_2'
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function usePlayDataQuery(baseOptions: Apollo.QueryHookOptions<PlayDataQuery, PlayDataQueryVariables> & ({ variables: PlayDataQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayDataQuery, PlayDataQueryVariables>(PlayDataDocument, options);
      }
export function usePlayDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayDataQuery, PlayDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayDataQuery, PlayDataQueryVariables>(PlayDataDocument, options);
        }
export function usePlayDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PlayDataQuery, PlayDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PlayDataQuery, PlayDataQueryVariables>(PlayDataDocument, options);
        }
export type PlayDataQueryHookResult = ReturnType<typeof usePlayDataQuery>;
export type PlayDataLazyQueryHookResult = ReturnType<typeof usePlayDataLazyQuery>;
export type PlayDataSuspenseQueryHookResult = ReturnType<typeof usePlayDataSuspenseQuery>;
export type PlayDataQueryResult = Apollo.QueryResult<PlayDataQuery, PlayDataQueryVariables>;
export const MancalaModelsFetchDocument = gql`
    query MancalaModelsFetch {
  mancalaGameModels {
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
  transactions {
    edges {
      node {
        executedAt
      }
    }
  }
}
    `;

/**
 * __useMancalaModelsFetchQuery__
 *
 * To run a query within a React component, call `useMancalaModelsFetchQuery` and pass it any options that fit your needs.
 * When your component renders, `useMancalaModelsFetchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMancalaModelsFetchQuery({
 *   variables: {
 *   },
 * });
 */
export function useMancalaModelsFetchQuery(baseOptions?: Apollo.QueryHookOptions<MancalaModelsFetchQuery, MancalaModelsFetchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MancalaModelsFetchQuery, MancalaModelsFetchQueryVariables>(MancalaModelsFetchDocument, options);
      }
export function useMancalaModelsFetchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MancalaModelsFetchQuery, MancalaModelsFetchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MancalaModelsFetchQuery, MancalaModelsFetchQueryVariables>(MancalaModelsFetchDocument, options);
        }
export function useMancalaModelsFetchSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MancalaModelsFetchQuery, MancalaModelsFetchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MancalaModelsFetchQuery, MancalaModelsFetchQueryVariables>(MancalaModelsFetchDocument, options);
        }
export type MancalaModelsFetchQueryHookResult = ReturnType<typeof useMancalaModelsFetchQuery>;
export type MancalaModelsFetchLazyQueryHookResult = ReturnType<typeof useMancalaModelsFetchLazyQuery>;
export type MancalaModelsFetchSuspenseQueryHookResult = ReturnType<typeof useMancalaModelsFetchSuspenseQuery>;
export type MancalaModelsFetchQueryResult = Apollo.QueryResult<MancalaModelsFetchQuery, MancalaModelsFetchQueryVariables>;
export const FetchModelsForLeaderBoardDocument = gql`
    query FetchModelsForLeaderBoard {
  mancalaGameModels {
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

/**
 * __useFetchModelsForLeaderBoardQuery__
 *
 * To run a query within a React component, call `useFetchModelsForLeaderBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchModelsForLeaderBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchModelsForLeaderBoardQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchModelsForLeaderBoardQuery(baseOptions?: Apollo.QueryHookOptions<FetchModelsForLeaderBoardQuery, FetchModelsForLeaderBoardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchModelsForLeaderBoardQuery, FetchModelsForLeaderBoardQueryVariables>(FetchModelsForLeaderBoardDocument, options);
      }
export function useFetchModelsForLeaderBoardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchModelsForLeaderBoardQuery, FetchModelsForLeaderBoardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchModelsForLeaderBoardQuery, FetchModelsForLeaderBoardQueryVariables>(FetchModelsForLeaderBoardDocument, options);
        }
export function useFetchModelsForLeaderBoardSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FetchModelsForLeaderBoardQuery, FetchModelsForLeaderBoardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchModelsForLeaderBoardQuery, FetchModelsForLeaderBoardQueryVariables>(FetchModelsForLeaderBoardDocument, options);
        }
export type FetchModelsForLeaderBoardQueryHookResult = ReturnType<typeof useFetchModelsForLeaderBoardQuery>;
export type FetchModelsForLeaderBoardLazyQueryHookResult = ReturnType<typeof useFetchModelsForLeaderBoardLazyQuery>;
export type FetchModelsForLeaderBoardSuspenseQueryHookResult = ReturnType<typeof useFetchModelsForLeaderBoardSuspenseQuery>;
export type FetchModelsForLeaderBoardQueryResult = Apollo.QueryResult<FetchModelsForLeaderBoardQuery, FetchModelsForLeaderBoardQueryVariables>;
export const FetchModelsForHeaderDocument = gql`
    query FetchModelsForHeader {
  mancalaGameModels {
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

/**
 * __useFetchModelsForHeaderQuery__
 *
 * To run a query within a React component, call `useFetchModelsForHeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchModelsForHeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchModelsForHeaderQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchModelsForHeaderQuery(baseOptions?: Apollo.QueryHookOptions<FetchModelsForHeaderQuery, FetchModelsForHeaderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchModelsForHeaderQuery, FetchModelsForHeaderQueryVariables>(FetchModelsForHeaderDocument, options);
      }
export function useFetchModelsForHeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchModelsForHeaderQuery, FetchModelsForHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchModelsForHeaderQuery, FetchModelsForHeaderQueryVariables>(FetchModelsForHeaderDocument, options);
        }
export function useFetchModelsForHeaderSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FetchModelsForHeaderQuery, FetchModelsForHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchModelsForHeaderQuery, FetchModelsForHeaderQueryVariables>(FetchModelsForHeaderDocument, options);
        }
export type FetchModelsForHeaderQueryHookResult = ReturnType<typeof useFetchModelsForHeaderQuery>;
export type FetchModelsForHeaderLazyQueryHookResult = ReturnType<typeof useFetchModelsForHeaderLazyQuery>;
export type FetchModelsForHeaderSuspenseQueryHookResult = ReturnType<typeof useFetchModelsForHeaderSuspenseQuery>;
export type FetchModelsForHeaderQueryResult = Apollo.QueryResult<FetchModelsForHeaderQuery, FetchModelsForHeaderQueryVariables>;