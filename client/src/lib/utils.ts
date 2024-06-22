import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateString(str?: string) {
  if (str) {
    return str.length > 6 ? str.slice(0, 6) + "..." + str.slice(-6) : str;

  }
}

export function isEmptyString(str?: string): boolean {
  return !str || typeof str != "string" || str.trim() === "";
}

export function getPlayers(data: any) {
  // Extracting player_one and player_two from the data object
  const players = data?.reduce((acc: any, edge: any) => {
    const { player_one, player_two, winner } = edge.node;

    // Update player_one
    const playerOneIndex = acc.findIndex((player: any) => player.address === player_one);
    if (playerOneIndex !== -1) {
        if (winner === player_one) {
            acc[playerOneIndex].wins++;
        } else {
            acc[playerOneIndex].loses++;
        }
        acc[playerOneIndex].totalAppearances++;
    } else {
        acc.push({ address: player_one, wins: winner === player_one ? 1 : 0, losses: winner !== player_one ? 1 : 0, totalAppearances: 1 });
    }

    // Update player_two
    const playerTwoIndex = acc.findIndex((player: any) => player.address === player_two);
      if (playerTwoIndex !== -1) {
          if (winner === player_two) {
              acc[playerTwoIndex].wins++;
          } else {
              acc[playerTwoIndex].loses++;
          }
          acc[playerTwoIndex].totalAppearances++;
      } else {
          acc.push({ address: player_two, wins: winner === player_two ? 1 : 0, losses: winner !== player_two ? 1 : 0, totalAppearances: 1 });
      }

      return acc;
  }, []);
  return players;
}