import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { shortString, BigNumberish } from "starknet";
import { colors } from "./constants";
import axios from 'axios';
import crypto from 'crypto';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateString(str?: string, num?: number) {
  if (str) {
    return str.length > (num || 6)
      ? str.slice(0, num || 6) + "..." + str.slice(-(num || 6))
      : str;
  }
}

export function isEmptyString(str?: string): boolean {
  return !str || typeof str != "string" || str.trim() === "";
}

export const stringToFelt = (v: string): BigNumberish =>
  v ? shortString.encodeShortString(v) : "0x0";

export const bigintToHex = (v: BigNumberish): string =>
  !v ? "0x0" : `0x${BigInt(v).toString(16)}`;

export function getPlayers(data: any[] | undefined) {
  if (!data) return [];

  // Extracting player_one and player_two from the data object
  const players = data.reduce((acc: any, edge: any) => {
    const { player_one, player_two, winner, player_one_name, player_one_image, player_two_image } = edge.node;

    // Update player_one
    const playerOneIndex = acc.findIndex(
      (player: any) => player.address === player_one,
    );
    if (playerOneIndex !== -1) {
      if (winner === player_one) {
        acc[playerOneIndex].wins++;
      } else {
        acc[playerOneIndex].losses++;
      }
      acc[playerOneIndex].totalAppearances++;
      // Update profile_uri if available
      if (player_one_image) {
        acc[playerOneIndex].profile_uri = player_one_image;
      }
    } else {
      acc.push({
        address: player_one,
        wins: winner === player_one ? 1 : 0,
        losses: winner !== player_one ? 1 : 0,
        totalAppearances: 1,
        name: formatPlayerName(player_one_name, player_one),
        profile_uri: player_one_image || null,
      });
    }

    // Update player_two
    const playerTwoIndex = acc.findIndex(
      (player: any) => player.address === player_two,
    );
    if (playerTwoIndex !== -1) {
      if (winner === player_two) {
        acc[playerTwoIndex].wins++;
      } else {
        acc[playerTwoIndex].losses++;
      }
      acc[playerTwoIndex].totalAppearances++;
      // Update profile_uri if available
      if (player_two_image) {
        acc[playerTwoIndex].profile_uri = player_two_image;
      }
    } else {
      acc.push({
        address: player_two,
        wins: winner === player_two ? 1 : 0,
        losses: winner !== player_two ? 1 : 0,
        totalAppearances: 1,
        profile_uri: player_two_image || null,
      });
    }

    return acc;
  }, []);

  // Sort players by score (wins * 50) in descending order
  return players.sort((a: any, b: any) => b.wins * 50 - a.wins * 50);
}

export function getPlayer(data: any[] | undefined, address: string) {
  if (!data) return [{ address, wins: 0, losses: 0, totalAppearances: 0 }];

  const playerStats = data.reduce((acc: any, edge: any) => {
    const { player_one, player_two, winner } = edge.node;

    if (player_one === address || player_two === address) {
      const playerAddress = player_one === address ? player_one : player_two;
      const isWinner = winner === address;

      const playerIndex = acc.findIndex(
        (player: any) => player.address === playerAddress,
      );
      if (playerIndex !== -1) {
        if (isWinner) {
          acc[playerIndex].wins++;
        } else {
          acc[playerIndex].losses++;
        }
        acc[playerIndex].totalAppearances++;
      } else {
        acc.push({
          address: playerAddress,
          wins: isWinner ? 1 : 0,
          losses: isWinner ? 0 : 1,
          totalAppearances: 1,
        });
      }
    }

    return acc;
  }, []);

  if (playerStats.length === 0) {
    return [{ address, wins: 0, losses: 0, totalAppearances: 0 }];
  }

  return playerStats;
}

export function getColorOfTheDay(walletAddress: string, date: Date) {
  // Extract the year, month, and day as a string
  const dateKey = new Date(date).toISOString().split("T")[0]; // "YYYY-MM-DD"

  // Combine the wallet address and date string
  const combinedKey = walletAddress + dateKey;

  // Hash the combined string
  const hash = [...combinedKey].reduce(
    (acc, char) => acc + char.charCodeAt(0),
    0,
  );

  // Map the hash to an index in the colors array
  const colorIndex = hash % colors.length;

  return colors[colorIndex];
}

export async function uploadFile(file: File) {
  try {
    const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY;
    const API_SECRET = import.meta.env.VITE_CLOUDINARY_API_SECRET;
    
    if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
      throw new Error('Cloudinary configuration is missing');
    }

    const timestamp = Math.round(new Date().getTime() / 1000);
    
    // Generate signature using Web Crypto API from window.crypto
    const msgBuffer = new TextEncoder().encode(`timestamp=${timestamp}${API_SECRET}`);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const signature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('timestamp', timestamp.toString());
    formData.append('api_key', API_KEY);
    formData.append('signature', signature);

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      formData
    );

    if (!response.data?.secure_url) {
      throw new Error('Upload failed: No secure URL received');
    }

    return {
      original: response.data.secure_url,
      thumbnail: response.data.secure_url.replace(
        '/upload/',
        '/upload/c_fill,h_200,w_200/'
      )
    };
  } catch (error) {
    console.error('Error uploading file:', error);
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.error?.message || error.message;
      throw new Error(`Upload Error: ${message}`);
    }
    throw error;
  }
}

let addressLookupCache: Map<string, string> = new Map();

export const updateAddressCache = (newCache: Map<string, string>) => {
  addressLookupCache = newCache;
};

export const formatPlayerName = (
  name: string,
  address: string,
  num?: number,
) => {
  console.log({
    name,
    address,
    num
  })
  if (!name || name === "0x0" || name === address) {
    // Try to get the looked-up name first
    const lookedUpName = addressLookupCache.get(address);
    if (lookedUpName) {
      return lookedUpName;
    }
    return truncateString(address, num);
  }
  try {
    return shortString.decodeShortString(name);
  } catch (e) {
    // Try to get the looked-up name first
    const lookedUpName = addressLookupCache.get(address);
    if (lookedUpName) {
      return lookedUpName;
    }
    return truncateString(address);
  }
};
