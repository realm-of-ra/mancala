import clsx from "clsx";

export default function Seed({
  color,
  length = 0,
  type,
}: {
  color?: string;
  length?: number;
  type?: "player" | "opponent";
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
        marginLeft:
          length >= 21 && type === "player"
            ? "-8px"
            : length > 30 && length <= 40 && type === "opponent"
              ? "-5px"
              : length > 40 && type === "opponent"
                ? "-7px"
                : "0px",
      }}
    />
  );
}
