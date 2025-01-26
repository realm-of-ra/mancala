import React, { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import { TutorialBottomPit, TutorialTopPit } from "./tutorial-pits";
import TutorialSeed from "./tutorial-seed";

interface GameBoardProps {
  game_players: any;
  game_node: any;
  system: any;
  account: any;
  gameId: string;
  setMoveMessage: Dispatch<SetStateAction<string | undefined>>;
  setTimeRemaining: Dispatch<SetStateAction<number>>;
  volume: number;
  setVolume: (volume: number) => void;
  setMessage: any;
}

// Updated Tutorial Step interface
interface TutorialStep {
  step: number;
  description: string;
  message: string;
  initial_seeds: {
    seed_id: string;
    color: string;
    type: "player" | "opponent";
    pit_number: number;
    seed_number: number;
    isNative: boolean;
    volume: number;
  }[];
  result_seeds: {
    seed_id: string;
    color: string;
    type: "player" | "opponent";
    pit_number: number;
    seed_number: number;
    isNative: boolean;
    volume: number;
  }[];
  final_move_seeds?: {
    seed_id: string;
    color: string;
    type: "player" | "opponent";
    pit_number: number;
    seed_number: number;
    isNative: boolean;
    volume: number;
  }[];
}

const TUTORIAL_STEPS: TutorialStep[] = [
  {
    step: 1,
    description: "Click on pit 1 to see how seeds move counter-clockwise around the board.",
    message: "Let's start with a simple move. Click pit 1 to distribute its seeds.",
    initial_seeds: [
      // Player's seeds (24 total, 4 in each pit 1-6)
      { seed_id: "0x1", color: "Green", type: "player", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x2", color: "Green", type: "player", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x3", color: "Green", type: "player", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x4", color: "Green", type: "player", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x5", color: "Green", type: "player", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x6", color: "Green", type: "player", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x7", color: "Green", type: "player", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x8", color: "Green", type: "player", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x9", color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0xa", color: "Green", type: "player", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0xb", color: "Green", type: "player", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0xc", color: "Green", type: "player", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0xd", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0xe", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0xf", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x11", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x15", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x16", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
      
      // Opponent's seeds (24 total, 4 in each pit 1-6)
      { seed_id: "0x19", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x1a", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x1b", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x1c", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x1d", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x1e", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x1f", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x20", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x21", color: "Purple", type: "opponent", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x22", color: "Purple", type: "opponent", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x28", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x29", color: "Purple", type: "opponent", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x2a", color: "Purple", type: "opponent", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x2b", color: "Purple", type: "opponent", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x2c", color: "Purple", type: "opponent", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x2d", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x2e", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x2f", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x30", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 }
    ],
    result_seeds: [
        // Player's seeds (24 total, 4 in each pit 1-6)
        { seed_id: "0x1", color: "Green", type: "player", pit_number: 2, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0x2", color: "Green", type: "player", pit_number: 3, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0x3", color: "Green", type: "player", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0x4", color: "Green", type: "player", pit_number: 5, seed_number: 5, isNative: true, volume: 1 },
        
        { seed_id: "0x5", color: "Green", type: "player", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x6", color: "Green", type: "player", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x7", color: "Green", type: "player", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x8", color: "Green", type: "player", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x9", color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0xa", color: "Green", type: "player", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0xb", color: "Green", type: "player", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0xc", color: "Green", type: "player", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0xd", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0xe", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0xf", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x11", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x15", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x16", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
        
        // Opponent's seeds (24 total, 4 in each pit 1-6)
        { seed_id: "0x19", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x1a", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x1b", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x1c", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x1d", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x1e", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x1f", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x20", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x21", color: "Purple", type: "opponent", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x22", color: "Purple", type: "opponent", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x28", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x29", color: "Purple", type: "opponent", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x2a", color: "Purple", type: "opponent", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x2b", color: "Purple", type: "opponent", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x2c", color: "Purple", type: "opponent", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x2d", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x2e", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x2f", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x30", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 }
      ]
  },
  {
    step: 2,
    description: "Click on pit 3. When your last seed lands in an empty pit on your side, you capture the seeds from the opposite pit!",
    message: "Let's try capturing some seeds from your opponent.",
    initial_seeds: [
      // Player's seeds (24 total, 4 in each pit 1-6)
      { seed_id: "0x1", color: "Green", type: "player", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x2", color: "Green", type: "player", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x3", color: "Green", type: "player", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x4", color: "Green", type: "player", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x5", color: "Green", type: "player", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x6", color: "Green", type: "player", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x7", color: "Green", type: "player", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x8", color: "Green", type: "player", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x9", color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0xa", color: "Green", type: "player", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0xb", color: "Green", type: "player", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0xc", color: "Green", type: "player", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0xd", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0xe", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0xf", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x11", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x15", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x16", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
      
      // Opponent's seeds (24 total, 4 in each pit 1-6)
      { seed_id: "0x19", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x1a", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x1b", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x1c", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x1d", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x1e", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x1f", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x20", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x21", color: "Purple", type: "opponent", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x22", color: "Purple", type: "opponent", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x28", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x29", color: "Purple", type: "opponent", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x2a", color: "Purple", type: "opponent", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x2b", color: "Purple", type: "opponent", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x2c", color: "Purple", type: "opponent", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x2d", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x2e", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x2f", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x30", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 }
    ],
    result_seeds: [
        // Player's seeds (24 total, 4 in each pit 1-6)
        { seed_id: "0x1", color: "Green", type: "player", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x2", color: "Green", type: "player", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x3", color: "Green", type: "player", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x4", color: "Green", type: "player", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x5", color: "Green", type: "player", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x6", color: "Green", type: "player", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x7", color: "Green", type: "player", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x8", color: "Green", type: "player", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x9", color: "Green", type: "player", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0xa", color: "Green", type: "player", pit_number: 5, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0xb", color: "Green", type: "player", pit_number: 6, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0xc", color: "Green", type: "player", pit_number: 7, seed_number: 1, isNative: true, volume: 1 },
        
        { seed_id: "0xd", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0xe", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0xf", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x11", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x15", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x16", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
        
        // Opponent's seeds (24 total, 4 in each pit 1-6)
        { seed_id: "0x19", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x1a", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x1b", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x1c", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x1d", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x1e", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x1f", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x20", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x21", color: "Purple", type: "opponent", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x22", color: "Purple", type: "opponent", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x28", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x29", color: "Purple", type: "opponent", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x2a", color: "Purple", type: "opponent", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x2b", color: "Purple", type: "opponent", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x2c", color: "Purple", type: "opponent", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x2d", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x2e", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x2f", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x30", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 }
      ],
      final_move_seeds: [
        // Player's seeds (24 total, 4 in each pit 1-6)
        { seed_id: "0x1", color: "Green", type: "player", pit_number: 2, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0x2", color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x3", color: "Green", type: "player", pit_number: 4, seed_number: 6, isNative: true, volume: 1 },
        { seed_id: "0x4", color: "Green", type: "player", pit_number: 5, seed_number: 6, isNative: true, volume: 1 },
        
        { seed_id: "0x5", color: "Green", type: "player", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x6", color: "Green", type: "player", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x7", color: "Green", type: "player", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x8", color: "Green", type: "player", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x9", color: "Green", type: "player", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0xa", color: "Green", type: "player", pit_number: 5, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0xb", color: "Green", type: "player", pit_number: 6, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0xc", color: "Green", type: "player", pit_number: 7, seed_number: 1, isNative: true, volume: 1 },
        
        { seed_id: "0xd", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0xe", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0xf", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x11", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x15", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x16", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
        
        // Opponent's seeds (24 total, 4 in each pit 1-6)
        { seed_id: "0x19", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x1a", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x1b", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x1c", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x1d", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x1e", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x1f", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x20", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x21", color: "Purple", type: "opponent", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x22", color: "Purple", type: "opponent", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x28", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x29", color: "Purple", type: "opponent", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x2a", color: "Purple", type: "opponent", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x2b", color: "Purple", type: "opponent", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x2c", color: "Purple", type: "opponent", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x2d", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x2e", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x2f", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x30", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 }
      ]
  },
  {
    step: 3,
    description: "Perfect Capture Setup: Move 1 seed from pit 2 to empty pit 3 to capture opponent's seeds!",
    message: "Click pit 2 to perform a capture move!",
    initial_seeds: [
      // Player seeds (bottom)
      // Pit 1 (1 seed)
      { seed_id: "0x1", color: "Green", type: "player", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
      
      // Pit 3 (4 seeds)
      { seed_id: "0x2", color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x3", color: "Green", type: "player", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x4", color: "Green", type: "player", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x5", color: "Green", type: "player", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
      
      // Pit 4 (6 seeds)
      { seed_id: "0x6", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x7", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x8", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x9", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
      { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
      { seed_id: "0x11", color: "Green", type: "player", pit_number: 4, seed_number: 6, isNative: true, volume: 1 },
      
      // Pit 5 (5 seeds)
      { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x15", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
      { seed_id: "0x16", color: "Green", type: "player", pit_number: 5, seed_number: 5, isNative: true, volume: 1 },
      
      // Pit 6 (5 seeds)
      { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x19", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x20", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
      { seed_id: "0x21", color: "Green", type: "player", pit_number: 6, seed_number: 5, isNative: true, volume: 1 },
      
      // Player's store (Pit 7) (1 seed)
      { seed_id: "0x22", color: "Green", type: "player", pit_number: 7, seed_number: 1, isNative: true, volume: 1 },
      
      // Opponent seeds (top)
      // Pit 6 (2 non-native seeds)
      { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: false, volume: 1 },
      { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: false, volume: 1 },
      
      // Pit 6 (3 native seeds)
      { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
      { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 6, seed_number: 5, isNative: true, volume: 1 },
      
      // Pit 5 (5 seeds)
      { seed_id: "0x28", color: "Purple", type: "opponent", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x29", color: "Purple", type: "opponent", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x30", color: "Purple", type: "opponent", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x31", color: "Purple", type: "opponent", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
      { seed_id: "0x32", color: "Purple", type: "opponent", pit_number: 5, seed_number: 5, isNative: true, volume: 1 },
      
      // Pit 4 (5 seeds)
      { seed_id: "0x33", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x34", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x35", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x36", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
      { seed_id: "0x37", color: "Purple", type: "opponent", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
      
      // Pit 2 (5 seeds)
      { seed_id: "0x38", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x39", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x40", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x41", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
      { seed_id: "0x42", color: "Purple", type: "opponent", pit_number: 2, seed_number: 5, isNative: true, volume: 1 },
      
      // Pit 1 (5 seeds)
      { seed_id: "0x43", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x44", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x45", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x46", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
      { seed_id: "0x47", color: "Purple", type: "opponent", pit_number: 1, seed_number: 5, isNative: true, volume: 1 },
      
      // Opponent's store (Pit 7) (1 seed)
      { seed_id: "0x48", color: "Purple", type: "opponent", pit_number: 7, seed_number: 1, isNative: true, volume: 1 }
    ],
    result_seeds: [
    // Player seeds (bottom)
    // Pit 2 (1 seed)
    { seed_id: "0x1", color: "Green", type: "player", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
    
    // Pit 3 (4 seeds)
    { seed_id: "0x2", color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x3", color: "Green", type: "player", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x4", color: "Green", type: "player", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x5", color: "Green", type: "player", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
    
    // Pit 4 (6 seeds)
    { seed_id: "0x6", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x7", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x8", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x9", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
    { seed_id: "0x11", color: "Green", type: "player", pit_number: 4, seed_number: 6, isNative: true, volume: 1 },
    
    // Pit 5 (5 seeds)
    { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x15", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x16", color: "Green", type: "player", pit_number: 5, seed_number: 5, isNative: true, volume: 1 },
    
    // Pit 6 (5 seeds)
    { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x19", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x20", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x21", color: "Green", type: "player", pit_number: 6, seed_number: 5, isNative: true, volume: 1 },
    
    // Player's store (Pit 7) (1 seed)
    { seed_id: "0x22", color: "Green", type: "player", pit_number: 7, seed_number: 1, isNative: true, volume: 1 },
    
    // Opponent seeds (top)
    // Pit 6 (2 non-native seeds)
    { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: false, volume: 1 },
    { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: false, volume: 1 },
    
    // Pit 6 (3 native seeds)
    { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 6, seed_number: 5, isNative: true, volume: 1 },
    
    // Pit 5 (5 seeds)
    { seed_id: "0x28", color: "Purple", type: "opponent", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x29", color: "Purple", type: "opponent", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x30", color: "Purple", type: "opponent", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x31", color: "Purple", type: "opponent", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x32", color: "Purple", type: "opponent", pit_number: 5, seed_number: 5, isNative: true, volume: 1 },
    
    // Pit 4 (5 seeds)
    { seed_id: "0x33", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x34", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x35", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x36", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x37", color: "Purple", type: "opponent", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
    
    // Pit 2 (5 seeds)
    { seed_id: "0x38", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x39", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x40", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x41", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x42", color: "Purple", type: "opponent", pit_number: 2, seed_number: 5, isNative: true, volume: 1 },
    
    // Pit 1 (5 seeds)
    { seed_id: "0x43", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
    { seed_id: "0x44", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
    { seed_id: "0x45", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
    { seed_id: "0x46", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
    { seed_id: "0x47", color: "Purple", type: "opponent", pit_number: 1, seed_number: 5, isNative: true, volume: 1 },
    
    // Opponent's store (Pit 7) (1 seed)
    { seed_id: "0x48", color: "Purple", type: "opponent", pit_number: 7, seed_number: 1, isNative: true, volume: 1 }
  ]
  }
];

const TutorialGameBoard: React.FC<GameBoardProps> = ({
  game_players,
  game_node,
  system,
  account,
  gameId,
  setMoveMessage,
  setTimeRemaining,
  volume,
  setVolume,
  setMessage
}) => {
  const [step, setStep] = useState(1);
  const [state, setState] = useState('initial');
  const [isComputerTurn, setIsComputerTurn] = useState(false);
  const [currentSeedIndex, setCurrentSeedIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pits, setPits] = useState(() => {
    // Initialize pits based on the first tutorial step's initial seeds
    const initialPits = [
      { player: 'opponent', pit_number: 1, seed_count: 4 },
      { player: 'opponent', pit_number: 2, seed_count: 4 },
      { player: 'opponent', pit_number: 3, seed_count: 4 },
      { player: 'opponent', pit_number: 4, seed_count: 4 },
      { player: 'opponent', pit_number: 5, seed_count: 4 },
      { player: 'opponent', pit_number: 6, seed_count: 4 },
      { player: 'opponent', pit_number: 7, seed_count: 0 }, // opponent's store
      { player: 'user', pit_number: 1, seed_count: 4 },
      { player: 'user', pit_number: 2, seed_count: 4 },
      { player: 'user', pit_number: 3, seed_count: 4 },
      { player: 'user', pit_number: 4, seed_count: 4 },
      { player: 'user', pit_number: 5, seed_count: 4 },
      { player: 'user', pit_number: 6, seed_count: 4 },
      { player: 'user', pit_number: 7, seed_count: 0 }, // player's store
    ];
    return initialPits;
  });

  // Add useEffect to manage computer turns based on tutorial steps
  useEffect(() => {
    // In tutorial mode, computer only takes turns after specific player actions
    // For now, computer never takes turns in the tutorial
    setIsComputerTurn(false);
  }, [step, state]);

  // Update pits when step or state changes
  useEffect(() => {
    const currentSeeds = TUTORIAL_STEPS[step - 1]?.[
      state === 'initial' 
        ? "initial_seeds" 
        : state === "final"
          ? "final_move_seeds"
          : "result_seeds"
    ] || [];
    
    // Count seeds in each pit
    const newPits = pits.map(pit => {
      const seedCount = currentSeeds.filter(seed => 
        seed.pit_number === pit.pit_number && 
        ((seed.type === 'player' && pit.player === 'user') || 
         (seed.type === 'opponent' && pit.player === 'opponent'))
      ).length;
      
      return {
        ...pit,
        seed_count: seedCount
      };
    });
    
    setPits(newPits);
  }, [step, state]);

  // Add this effect to handle sequential seed animations
  useEffect(() => {
    if (currentSeedIndex === -1) return;

    const currentSeeds = TUTORIAL_STEPS[step - 1]?.[state === 'initial' ? "initial_seeds" : "result_seeds"] || [];
    
    if (currentSeedIndex < currentSeeds.length) {
      const timer = setTimeout(() => {
        setCurrentSeedIndex(prev => prev + 1);
      }, 300); // Delay between each seed's animation start
      
      return () => clearTimeout(timer);
    } else {
      setCurrentSeedIndex(-1);
      setIsAnimating(false);
    }
  }, [currentSeedIndex, step, state]);

  const seeds = TUTORIAL_STEPS[step - 1]?.[
    state === 'initial' 
      ? "initial_seeds" 
      : state === "final" 
        ? "final_move_seeds" 
        : "result_seeds"
  ] || [];
  const opponent_pot_seed_count = TUTORIAL_STEPS[step - 1]?.[state === 'initial' ? "initial_seeds" : "result_seeds"]?.filter(item => (item.pit_number === 7 && item.type === "opponent"))?.length;
  const player_pot_seed_count = TUTORIAL_STEPS[step - 1]?.[state === 'initial' ? "initial_seeds" : "result_seeds"]?.filter(item => (item.pit_number === 7 && item.type === "player"))?.length;
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center mt-24">
      <div className="w-[1170px] h-[400px] flex flex-row items-center justify-between space-x-5 relative bg-[url('./assets/game_board.png')] bg-contain bg-center bg-no-repeat">
        <div className="w-fit h-[220px] mt-14 relative">
          {/* Player 1 pot (opponent) */}
          {seeds.map((seed, index) => {
            const seedDetails = seed;
            if (!seedDetails) return null;

            const isPlayerSeed = seedDetails.type === 'player';
            const shouldAnimate = index <= currentSeedIndex;

            return (
              <TutorialSeed
                key={seed.seed_id}
                color={seedDetails.color}
                type={isPlayerSeed ? "player" : "opponent"}
                pit_number={seedDetails.pit_number}
                seed_number={seedDetails.seed_number}
                isNative={seedDetails.isNative}
                volume={volume}
                shouldAnimate={shouldAnimate}
                onAnimationComplete={() => {
                  if (index === seeds.length - 1) {
                    setIsAnimating(false);
                  }
                }}
              />
            );
          })}
          <div
            className={
              "w-fit max-w-14 h-fit max-h-40 flex flex-col flex-wrap -mt-2.5"
            }
          />
          <div
            className="h-[160px] flex flex-col items-center justify-center ml-[135px]"
          >
            <p className="text-white text-center">{opponent_pot_seed_count}</p>
          </div>
        </div>
        <div className="w-[700px] h-[350px] flex flex-col items-center justify-between space-y-2 absolute left-[206px]">
          {/* Player 1 */}
          <div className="h-[175px] w-full flex flex-row justify-center items-center ml-3.5">
            <div className="flex flex-row justify-center flex-1 items-center w-[100px] space-x-5">
              {pits
                .filter(pit => pit.player === 'opponent' && pit.pit_number !== 7)
                .sort((a, b) => b.pit_number - a.pit_number)
                .map((pit, i) => (
                  <TutorialTopPit 
                    key={i} 
                    amount={pit.seed_count} 
                    pit={pit.pit_number} 
                  />
                ))}
            </div>
          </div>
          {/* Player 2 */}
          <div className="h-[175px] w-full flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center flex-1 space-x-5">
              {pits
                .filter(pit => pit.player === 'user' && pit.pit_number !== 7)
                .sort((a, b) => a.pit_number - b.pit_number)
                .map((pit, i) => (
                  <TutorialBottomPit
                        key={i}
                        amount={pit.seed_count}
                        pit={pit.pit_number}
                        state={state}
                        setMoveMessage={setMoveMessage}
                        setMessage={setMessage}
                        currentStep={step}
                        setStep={setStep}
                        setState={setState}
                        isComputerTurn={isComputerTurn} 
                        setCurrentSeedIndex={setCurrentSeedIndex} 
                        setIsAnimating={setIsAnimating} />
                ))}
            </div>
          </div>
        </div>
        <div className="w-fit h-[220px] mt-14 relative">
          {/* Player 2 pot (player) */}
          <div
            className={"w-fit max-w-14 h-fit max-h-40 flex flex-col flex-wrap -mt-2.5"}
          />
          <div
            className="h-[160px] flex flex-col items-center justify-center mr-[135px]"
          >
            <p className="text-white text-center h-full flex flex-col items-center justify-center">
              {player_pot_seed_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialGameBoard;
