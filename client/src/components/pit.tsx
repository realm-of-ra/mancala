import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import Seed from "./seed";
import { UseAccountResult } from "@starknet-react/core";

export default function Pit({ amount, address, pit, game_id, status, winner, userAccount, system,
    setTimeRemaining, time_between_move, message, reverse }: {
        amount: number, address: string, pit: number, winner: string,
        game_id: string, status: string; userAccount?: UseAccountResult;
        system: any; message: Dispatch<SetStateAction<string | undefined>>;
        setTimeRemaining: Dispatch<SetStateAction<number>>; time_between_move: number;
        reverse?: boolean;
    }) {
    const handleMove = async () => {
        if (address === userAccount?.account?.address && status === 'InProgress' && winner === '0x0') {
            message(undefined)
            await system.move(userAccount?.account, game_id, pit)
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
        <div className={clsx(reverse ? 'flex-col-reverse' : "flex-col", "h-[170px] w-[15%] flex justify-between items-center")} onClick={handleMove}>
            <div className='bg-[#191C22] px-5 rounded-lg w-fit'>
                <p className='text-white'>{amount}</p>
            </div>
            <div className='flex flex-col items-center justify-center flex-1'>
                <div className='w-[90px] h-[90px] border-2 border-[#32363D] rounded-full flex flex-col items-center justify-center hover:cursor-pointer'>
                    {amount > 0 && <div className={clsx(amount > 6 && 'grid-cols-3', amount >= 12 && 'grid-cols-4', 'grid gap-1 grid-cols-2')} data-testid="seeds">
                        {
                            Array.from({ length: amount }, (_, seedIndex) => <Seed key={seedIndex} amount={amount} />)
                        }
                    </div>}
                </div>
            </div>
        </div>
    )
}