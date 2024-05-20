import { atom } from 'jotai'
import { ConnectedStarknetWindowObject } from 'starknetkit'

export const isPlaying = atom(false)
export const profileData = atom({})
export const address = atom('')
export const connection = atom<ConnectedStarknetWindowObject | undefined>(undefined)
