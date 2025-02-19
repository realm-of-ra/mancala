import type { SchemaType as ISchemaType } from "@dojoengine/sdk";

import { BigNumberish } from 'starknet';

type WithFieldOrder<T> = T & { fieldOrder: string[] };

// Type definition for `mancala::models::index::GameCounter` struct
export interface GameCounter {
	id: BigNumberish;
	count: BigNumberish;
}

// Type definition for `mancala::models::index::GameCounterValue` struct
export interface GameCounterValue {
	count: BigNumberish;
}

// Type definition for `mancala::models::index::MancalaBoard` struct
export interface MancalaBoard {
	game_id: BigNumberish;
	player_one: string;
	player_two: string;
	current_player: string;
	last_move: BigNumberish;
	max_block_between_move: BigNumberish;
	winner: string;
	status: GameStatus;
	is_private: boolean;
}

// Type definition for `mancala::models::index::MancalaBoardValue` struct
export interface MancalaBoardValue {
	player_one: string;
	player_two: string;
	current_player: string;
	last_move: BigNumberish;
	max_block_between_move: BigNumberish;
	winner: string;
	status: GameStatus;
	is_private: boolean;
}

// Type definition for `mancala::models::index::Pit` struct
export interface Pit {
	game_id: BigNumberish;
	player: string;
	pit_number: BigNumberish;
	seed_count: BigNumberish;
}

// Type definition for `mancala::models::index::PitValue` struct
export interface PitValue {
	seed_count: BigNumberish;
}

// Type definition for `mancala::models::index::Player` struct
export interface Player {
	game_id: BigNumberish;
	address: string;
	len_pits: BigNumberish;
	restart_requested: boolean;
}

// Type definition for `mancala::models::index::PlayerValue` struct
export interface PlayerValue {
	len_pits: BigNumberish;
	restart_requested: boolean;
}

// Type definition for `mancala::models::index::Profile` struct
export interface Profile {
	address: string;
	name: BigNumberish;
	profile_uri: string;
	is_initialized: boolean;
	creation_time: BigNumberish;
}

// Type definition for `mancala::models::index::ProfileValue` struct
export interface ProfileValue {
	name: BigNumberish;
	profile_uri: string;
	is_initialized: boolean;
	creation_time: BigNumberish;
}

// Type definition for `mancala::models::index::Seed` struct
export interface Seed {
	game_id: BigNumberish;
	player: string;
	pit_number: BigNumberish;
	seed_number: BigNumberish;
	seed_id: BigNumberish;
	color: SeedColor;
}

// Type definition for `mancala::models::index::SeedValue` struct
export interface SeedValue {
	seed_id: BigNumberish;
	color: SeedColor;
}

// Type definition for `mancala::models::index::GameStatus` enum
export enum GameStatus {
	Pending,
	InProgress,
	Finished,
	Forfeited,
	TimeOut,
}

// Type definition for `mancala::models::index::SeedColor` enum
export enum SeedColor {
	None,
	Blue,
	Green,
}

export interface SchemaType extends ISchemaType {
	mancala: {
		GameCounter: WithFieldOrder<GameCounter>,
		GameCounterValue: WithFieldOrder<GameCounterValue>,
		MancalaBoard: WithFieldOrder<MancalaBoard>,
		MancalaBoardValue: WithFieldOrder<MancalaBoardValue>,
		Pit: WithFieldOrder<Pit>,
		PitValue: WithFieldOrder<PitValue>,
		Player: WithFieldOrder<Player>,
		PlayerValue: WithFieldOrder<PlayerValue>,
		Profile: WithFieldOrder<Profile>,
		ProfileValue: WithFieldOrder<ProfileValue>,
		Seed: WithFieldOrder<Seed>,
		SeedValue: WithFieldOrder<SeedValue>,
	},
}
export const schema: SchemaType = {
	mancala: {
		GameCounter: {
			fieldOrder: ['id', 'count'],
			id: 0,
			count: 0,
		},
		GameCounterValue: {
			fieldOrder: ['count'],
			count: 0,
		},
		MancalaBoard: {
			fieldOrder: ['game_id', 'player_one', 'player_two', 'current_player', 'last_move', 'max_block_between_move', 'winner', 'status', 'is_private'],
			game_id: 0,
			player_one: "",
			player_two: "",
			current_player: "",
			last_move: 0,
			max_block_between_move: 0,
			winner: "",
		status: GameStatus.Pending,
			is_private: false,
		},
		MancalaBoardValue: {
			fieldOrder: ['player_one', 'player_two', 'current_player', 'last_move', 'max_block_between_move', 'winner', 'status', 'is_private'],
			player_one: "",
			player_two: "",
			current_player: "",
			last_move: 0,
			max_block_between_move: 0,
			winner: "",
		status: GameStatus.Pending,
			is_private: false,
		},
		Pit: {
			fieldOrder: ['game_id', 'player', 'pit_number', 'seed_count'],
			game_id: 0,
			player: "",
			pit_number: 0,
			seed_count: 0,
		},
		PitValue: {
			fieldOrder: ['seed_count'],
			seed_count: 0,
		},
		Player: {
			fieldOrder: ['game_id', 'address', 'len_pits', 'restart_requested'],
			game_id: 0,
			address: "",
			len_pits: 0,
			restart_requested: false,
		},
		PlayerValue: {
			fieldOrder: ['len_pits', 'restart_requested'],
			len_pits: 0,
			restart_requested: false,
		},
		Profile: {
			fieldOrder: ['address', 'name', 'profile_uri', 'is_initialized', 'creation_time'],
			address: "",
			name: 0,
		profile_uri: "",
			is_initialized: false,
			creation_time: 0,
		},
		ProfileValue: {
			fieldOrder: ['name', 'profile_uri', 'is_initialized', 'creation_time'],
			name: 0,
		profile_uri: "",
			is_initialized: false,
			creation_time: 0,
		},
		Seed: {
			fieldOrder: ['game_id', 'player', 'pit_number', 'seed_number', 'seed_id', 'color'],
			game_id: 0,
			player: "",
			pit_number: 0,
			seed_number: 0,
			seed_id: 0,
		color: SeedColor.None,
		},
		SeedValue: {
			fieldOrder: ['seed_id', 'color'],
			seed_id: 0,
		color: SeedColor.None,
		},
	},
};
export enum ModelsMapping {
	GameCounter = 'mancala-GameCounter',
	GameCounterValue = 'mancala-GameCounterValue',
	GameStatus = 'mancala-GameStatus',
	MancalaBoard = 'mancala-MancalaBoard',
	MancalaBoardValue = 'mancala-MancalaBoardValue',
	Pit = 'mancala-Pit',
	PitValue = 'mancala-PitValue',
	Player = 'mancala-Player',
	PlayerValue = 'mancala-PlayerValue',
	Profile = 'mancala-Profile',
	ProfileValue = 'mancala-ProfileValue',
	Seed = 'mancala-Seed',
	SeedColor = 'mancala-SeedColor',
	SeedValue = 'mancala-SeedValue',
}