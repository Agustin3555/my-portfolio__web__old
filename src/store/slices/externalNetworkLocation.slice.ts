import { Slice } from '../slice'

export enum LOCATION {
  about,
  leftNav,
}

export interface ExternalNetworkLocationSlice {
  externalNetworkLocation: LOCATION
  setExternalNetworkLocation: (location: LOCATION) => void
}

export const createExternalNetworkLocationSlice: Slice<
  ExternalNetworkLocationSlice
> = set => ({
  externalNetworkLocation: LOCATION.about,
  setExternalNetworkLocation: location => {
    set(() => {
      return { externalNetworkLocation: location }
    })
  },
})
