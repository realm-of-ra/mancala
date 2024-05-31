import { AccountInterface } from 'starknet'
import { uuid } from '@latticexyz/utils'
import { ClientComponents } from './createClientComponents'
import { getEvents, setComponentsFromEvents } from '@dojoengine/utils'
import { ContractComponents } from './generated/contractComponents'
import type { IWorld } from './generated/generated'

export type SystemCalls = ReturnType<typeof createSystemCalls>

export function createSystemCalls(
  { client }: { client: IWorld },
  contractComponents: ContractComponents,
  {
    Game,
    GameTurn,
    GameId,
    MancalaGame,
    Moves,
    GamePlayer,
    Player,
    Seed,
  }: ClientComponents,
) {
  const create_initial_game_id = async (account: AccountInterface) => {
    const movesId = uuid()

    try {
      const { transaction_hash } = await client.actions.create_initial_game_id(
        account,
      )

      console.log(
        await account.waitForTransaction(transaction_hash, {
          retryInterval: 100,
        }),
      )

      setComponentsFromEvents(
        contractComponents,
        getEvents(
          await account.waitForTransaction(transaction_hash, {
            retryInterval: 100,
          }),
        ),
      )
    } catch (e) {
      console.log(e)
    } finally {
      GameId.removeOverride(movesId)
    }
  }

  const create_game = async (account: AccountInterface, setGameId: any) => {
    const movesId = uuid()

    try {
      const { transaction_hash } = await client.actions.create_game(account)

      console.log(
        await account.waitForTransaction(transaction_hash, {
          retryInterval: 100,
        }),
      )

      const waitForTransaction = await account.waitForTransaction(
        transaction_hash,
        {
          retryInterval: 100,
        },
      )

      const events = getEvents(waitForTransaction)

      setComponentsFromEvents(contractComponents, events)
      setGameId(events[0].data[3])
    } catch (e) {
      console.log(e)
    } finally {
      GameId.removeOverride(movesId)
      MancalaGame.removeOverride(movesId)
    }
  }

  const create_private_game = async (
    account: AccountInterface,
    player_2: string,
    setGameId: any,
  ) => {
    const movesId = uuid()
    try {
      const { transaction_hash } = await client.actions.create_private_game(
        account,
        player_2,
      )

      console.log(
        await account.waitForTransaction(transaction_hash, {
          retryInterval: 100,
        }),
      )

      const waitForTransaction = await account.waitForTransaction(
        transaction_hash,
        {
          retryInterval: 100,
        },
      )

      const events = getEvents(waitForTransaction)

      setComponentsFromEvents(contractComponents, events)
      setGameId(events[0].data[3])
    } catch (e) {
      console.log(e)
    } finally {
      GameId.removeOverride(movesId)
      GamePlayer.removeOverride(movesId)
      MancalaGame.removeOverride(movesId)
    }
  }

  return {
    create_initial_game_id,
    create_game,
    create_private_game,
  }
}
