import clsx from "clsx";

export default function Seed({
  color,
  length = 0,
}: {
  color?: string;
  length: number;
}) {
  return (
    <div
      className={clsx(
        color === "Green"
          ? "bg-[url('./assets/green-seed.png')]"
          : "bg-[url('./assets/purple-seed.png')]",
        "w-[16px] h-[16px] bg-center bg-cover bg-no-repeat",
      )}
      style={{
        marginLeft: length >= 21 ? "-8px" : 0,
      }}
    />
  );
}
