import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import Seed from "./seed";
import { UseAccountResult } from "@starknet-react/core";

export function TopPit({ amount, address, pit, game_id, status, winner, userAccount, system,
    setTimeRemaining, time_between_move, seed_count, seeds, message }: {
        amount: number, address: string, pit: number, winner: string,
        game_id: string, status: string; userAccount?: UseAccountResult;
        seed_count: number, seeds: any[]; system: any; message: Dispatch<SetStateAction<string | undefined>>;
        setTimeRemaining: Dispatch<SetStateAction<number>>; time_between_move: number;
    }) {
    const handleMove = async () => {
        if (address === userAccount?.account?.address && status === 'InProgress' && winner === '0x0') {
            message(undefined)
            const res = await system.move(userAccount?.account, game_id, pit)
;            setTimeRemaining(time_between_move)
        }
        else {
            if (address !== userAccount?.account?.address) {
                message('Not your pit')
            }
            else if (status !== 'InProgress') {
                message('Game over')
            }
            else {
                if (winner === userAccount?.account?.address) {
                    message('You won')
                }
                else {
                    message('You lost')
                }
            }
        }
    }
    return (
        <div className={"flex-col h-[125px] w-full flex justify-between items-center space-y-6"} onClick={handleMove}>
            <div className='rounded-lg w-fit'>
                <p className='text-white ml-2'>{amount}</p>
            </div>
            <div className='flex flex-col items-center justify-center flex-1 w-full h-full'>
                <div className={clsx('w-[60px] h-[60px] flex flex-col items-center justify-center hover:cursor-pointer', pit < 4 ? "ml-2" : "ml-2.5")}>
                    {amount > 0 && <div className={clsx(amount > 6 && 'grid-cols-3', amount >= 12 && 'grid-cols-4', 'grid grid-cols-2')} data-testid="seeds">
                        {
                            seeds?.slice(0, seed_count).map((seed, seedIndex) => <Seed key={seedIndex} color={seeds != undefined ? seed.node.color : []} />)
                        }
                    </div>}
                </div>
            </div>
        </div>
    )
}

export function BottomPit({ amount, address, pit, game_id, status, winner, userAccount, system,
    setTimeRemaining, time_between_move, seed_count, seeds, message }: {
        amount: number, address: string, pit: number, winner: string,
        game_id: string, status: string; userAccount?: UseAccountResult;
        seed_count: number, seeds: any[]; system: any; message: Dispatch<SetStateAction<string | undefined>>;
        setTimeRemaining: Dispatch<SetStateAction<number>>; time_between_move: number;
    }) {
    const handleMove = async () => {
        message(undefined)
        if (address === userAccount?.account?.address && status === 'InProgress' && winner === '0x0') {
            message(undefined)
            const res = await system.move(userAccount?.account, game_id, pit)
            setTimeRemaining(time_between_move)
        }
        else {
            if (address !== userAccount?.account?.address) {
                message('Not your pit')
            }
            else if (status !== 'InProgress') {
                message('Game over')
            }
            else {
                if (winner === userAccount?.account?.address) {
                    message('You won')
                }
                else {
                    message('You lost')
                }
            }
        }
    }
    return (
        <div className={"flex-col h-[125px] w-full flex justify-between items-center space-y-4 -mt-12 ml-2.5"} onClick={handleMove}>
            <div className='flex flex-col items-center justify-center flex-1 w-full h-full'>
                <div className={clsx('w-[60px] h-[60px] flex flex-col items-center justify-center hover:cursor-pointer', pit < 4 ? "ml-2" : "ml-2.5")}>
                    {amount > 0 && <div className={clsx(amount > 6 && 'grid-cols-3', amount >= 12 && 'grid-cols-4', 'grid grid-cols-2')} data-testid="seeds">
                        {
                           seeds?.slice(0, seed_count).map((seed, seedIndex) => <Seed key={seedIndex} color={seeds != undefined ? seed.node.color : []} />)
                        }
                    </div>}
                </div>
            </div>
            <div className='rounded-lg w-fit'>
                <p className='text-white ml-2'>{amount}</p>
            </div>
        </div>
    )
}