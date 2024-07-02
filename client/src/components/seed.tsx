import clsx from "clsx";

export default function Seed({ amount }: { amount: number }) {
    return (
        <div
            className={clsx(amount > 6 && 'w-[14px] h-[14px]',
                amount >= 12 && 'w-[12px] h-[12px]',
                amount >= 16 && 'w-[10px] h-[10px]',
                amount >= 20 && 'w-[7.5px] h-[7.5px]',
                'w-[20px] h-[20px] bg-white rounded-full')
            }
        />
    )
}