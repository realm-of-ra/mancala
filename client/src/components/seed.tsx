import clsx from "clsx";

export default function Seed({ amount, color }: { amount: number, color?: string }) {
    return (
        <div
            className={
                clsx(amount > 6 && 'w-[14px] h-[14px]',
                amount >= 12 && 'w-[12px] h-[12px]',
                amount >= 16 && 'w-[10px] h-[10px]',
                amount >= 20 && 'w-[7.5px] h-[7.5px]',
                color === "Green" ? "bg-[url('./assets/green-seed.png')]" : "bg-[url('./assets/purple-seed.png')]",
                'w-[16px] h-[16px] bg-center bg-cover bg-no-repeat')
            }
        />
    )
}