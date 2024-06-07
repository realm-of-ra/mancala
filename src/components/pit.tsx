import { useDojo } from "@/dojo/useDojo";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

export default function Pit({ amount, address, pit, game_id, message }: {
    amount: number, address: string, pit: string,
    game_id: string, message: Dispatch<SetStateAction<string | undefined>>
}) {
    const { account: userAccount, system } = useDojo()
    console.log(userAccount.account.address)
    const handleMove = async () => {
        if (address === userAccount.account.address) {
            await system.move(userAccount.account, game_id, pit)
        }
        else {
            setTimeout(() => {
                message('Not your turn')
            }, 1500);
            message('')
        }
    }
    return (
        <div className='h-[170px] w-[15%] flex justify-between items-center flex-col' onClick={handleMove}>
            <div className='bg-[#191C22] px-5 rounded-lg w-fit'>
                <p className='text-white'>{amount}</p>
            </div>
            <div className='flex flex-col items-center justify-center flex-1'>
                <div className='w-[90px] h-[90px] border-2 border-[#32363D] rounded-full flex flex-col items-center justify-center hover:cursor-pointer'
                >
                    <div className={clsx(amount > 6 && 'grid-cols-3', amount >= 12 && 'grid-cols-4', 'grid gap-1 grid-cols-2')}>
                        {
                            Array.from({ length: amount }, (_, seedIndex) => (
                                <div
                                    key={seedIndex}
                                    className={clsx(amount > 6 && 'w-[14px] h-[14px]',
                                        amount >= 12 && 'w-[12px] h-[12px]',
                                        amount >= 16 && 'w-[10px] h-[10px]',
                                        amount >= 20 && 'w-[7.5px] h-[7.5px]',
                                        'w-[20px] h-[20px] bg-white rounded-full')
                                    }
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}