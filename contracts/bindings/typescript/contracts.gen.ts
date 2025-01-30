import { DojoProvider } from "@dojoengine/core";
import { Account, AccountInterface, BigNumberish, CairoOption, CairoCustomEnum, ByteArray } from "starknet";
import * as models from "./models.gen";

export function setupWorld(provider: DojoProvider) {

	const Mancala_newGame = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				{
					contractName: "Mancala",
					entrypoint: "new_game",
					calldata: [],
				},
				"mancala_alpha",
			);
		} catch (error) {
			console.error(error);
		}
	};

	const Mancala_joinGame = async (snAccount: Account | AccountInterface, gameId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				{
					contractName: "Mancala",
					entrypoint: "join_game",
					calldata: [gameId],
				},
				"mancala_alpha",
			);
		} catch (error) {
			console.error(error);
		}
	};

	const Mancala_timeout = async (snAccount: Account | AccountInterface, gameId: BigNumberish, opponentAddress: string) => {
		try {
			return await provider.execute(
				snAccount,
				{
					contractName: "Mancala",
					entrypoint: "timeout",
					calldata: [gameId, opponentAddress],
				},
				"mancala_alpha",
			);
		} catch (error) {
			console.error(error);
		}
	};

	const Mancala_createPrivateGame = async (snAccount: Account | AccountInterface, opponentAddress: string) => {
		try {
			return await provider.execute(
				snAccount,
				{
					contractName: "Mancala",
					entrypoint: "create_private_game",
					calldata: [opponentAddress],
				},
				"mancala_alpha",
			);
		} catch (error) {
			console.error(error);
		}
	};

	const Mancala_getPlayers = async (snAccount: Account | AccountInterface, gameId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				{
					contractName: "Mancala",
					entrypoint: "get_players",
					calldata: [gameId],
				},
				"mancala_alpha",
			);
		} catch (error) {
			console.error(error);
		}
	};

	const Mancala_move = async (snAccount: Account | AccountInterface, gameId: BigNumberish, selectedPit: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				{
					contractName: "Mancala",
					entrypoint: "move",
					calldata: [gameId, selectedPit],
				},
				"mancala_alpha",
			);
		} catch (error) {
			console.error(error);
		}
	};

	const Mancala_getScore = async (snAccount: Account | AccountInterface, gameId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				{
					contractName: "Mancala",
					entrypoint: "get_score",
					calldata: [gameId],
				},
				"mancala_alpha",
			);
		} catch (error) {
			console.error(error);
		}
	};

	const Mancala_isGameOver = async (snAccount: Account | AccountInterface, gameId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				{
					contractName: "Mancala",
					entrypoint: "is_game_over",
					calldata: [gameId],
				},
				"mancala_alpha",
			);
		} catch (error) {
			console.error(error);
		}
	};

	const Mancala_forfeited = async (snAccount: Account | AccountInterface, gameId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				{
					contractName: "Mancala",
					entrypoint: "forfeited",
					calldata: [gameId],
				},
				"mancala_alpha",
			);
		} catch (error) {
			console.error(error);
		}
	};

	const Mancala_requestRestartGame = async (snAccount: Account | AccountInterface, gameId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				{
					contractName: "Mancala",
					entrypoint: "request_restart_game",
					calldata: [gameId],
				},
				"mancala_alpha",
			);
		} catch (error) {
			console.error(error);
		}
	};

	const Mancala_restartCurrentGame = async (snAccount: Account | AccountInterface, gameId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				{
					contractName: "Mancala",
					entrypoint: "restart_current_game",
					calldata: [gameId],
				},
				"mancala_alpha",
			);
		} catch (error) {
			console.error(error);
		}
	};

	const PlayerProfile_createPlayerProfile = async (name: BigNumberish) => {
		try {
			return await provider.call("mancala_alpha", {
				contractName: "PlayerProfile",
				entrypoint: "create_player_profile",
				calldata: [name],
			});
		} catch (error) {
			console.error(error);
		}
	};

	const PlayerProfile_updatePlayerProfile = async (name: BigNumberish, newUri: ByteArray) => {
		try {
			return await provider.call("mancala_alpha", {
				contractName: "PlayerProfile",
				entrypoint: "update_player_profile",
				calldata: [name, newUri],
			});
		} catch (error) {
			console.error(error);
		}
	};

	return {
		Mancala: {
			newGame: Mancala_newGame,
			joinGame: Mancala_joinGame,
			timeout: Mancala_timeout,
			createPrivateGame: Mancala_createPrivateGame,
			getPlayers: Mancala_getPlayers,
			move: Mancala_move,
			getScore: Mancala_getScore,
			isGameOver: Mancala_isGameOver,
			forfeited: Mancala_forfeited,
			requestRestartGame: Mancala_requestRestartGame,
			restartCurrentGame: Mancala_restartCurrentGame,
		},
		PlayerProfile: {
			createPlayerProfile: PlayerProfile_createPlayerProfile,
			updatePlayerProfile: PlayerProfile_updatePlayerProfile,
		},
	};
}