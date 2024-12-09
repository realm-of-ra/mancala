import clsx from "clsx";

export default function Seed({
  color,
  length = 0,
  type,
  id,
}: {
  color?: string;
  length?: number;
  type?: "player" | "opponent";
  id: number;
}) {
  const getMarginLeft = (
    length: number | 0,
    type: "player" | "opponent" | undefined,
  ) => {
    if (length >= 21 && type === "player") {
      return "-8px";
    } else if (length > 30 && length <= 40 && type === "opponent") {
      return "-5px";
    } else if (length > 40 && type === "opponent") {
      return "-7px";
    } else {
      return "0px";
    }
  };
  return (
    <div
      className={clsx(
        color === "Green"
          ? "bg-[url('./assets/green-seed.png')]"
          : "bg-[url('./assets/purple-seed.png')]",
        "w-[16px] h-[16px] bg-center bg-cover bg-no-repeat",
      )}
      style={{
        marginLeft: getMarginLeft(length, type),
      }}
    >{id?.toString()}</div>
  );
}
