import { atom } from 'jotai'
import { ConnectedStarknetWindowObject } from 'starknetkit'

export const isPlayingAtom = atom(false)
export const profileDataAtom = atom({})
export const addressAtom = atom('')
export const connectionAtom = atom<ConnectedStarknetWindowObject | undefined>(undefined)

