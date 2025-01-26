export interface StarkProfile {
  name?: string;
  profilePicture?: string;
  discord?: string;
  twitter?: string;
  github?: string;
  proofOfPersonhood?: boolean;
}

export interface TutorialStep {
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
