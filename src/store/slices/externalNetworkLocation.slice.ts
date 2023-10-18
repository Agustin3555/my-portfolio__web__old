import { Slice } from '../slice'

export enum LOCATION {
  about,
  leftNav,
}

export interface ExternalLinkLocationSlice {
  externalNetworkLocation: LOCATION
  setExternalLinkLocation: (location: LOCATION) => void
}

export const createExternalLinkLocationSlice: Slice<
  ExternalLinkLocationSlice
> = set => ({
  externalNetworkLocation: LOCATION.about,
  setExternalLinkLocation: location => {
    set(() => {
      return { externalNetworkLocation: location }
    })
  },
})
