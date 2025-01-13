export interface SpotifyPlaylist {
  id: string
  name: string
  images: { url: string }[]
}

export interface SpotifyTrack {
  id: string
  name: string
  artists: { name: string }[]
  album: {
    name: string
    images: { url: string }[]
  }
}

export interface SpotifyPlayer {
  _options: {
    getOAuthToken: (cb: (token: string) => void) => void
    name: string
  }
  connect: () => Promise<boolean>
  disconnect: () => void
  addListener: (event: string, callback: (state: any) => void) => void
  removeListener: (event: string, callback: (state: any) => void) => void
  togglePlay: () => Promise<void>
  nextTrack: () => Promise<void>
  previousTrack: () => Promise<void>
  getCurrentState: () => Promise<any>
  setVolume: (volume: number) => Promise<void>
}

declare global {
  interface Window {
    Spotify: {
      Player: new (options: SpotifyPlayer['_options']) => SpotifyPlayer
    }
    onSpotifyWebPlaybackSDKReady: () => void
  }
}
