'use client'

import { useState, useEffect } from 'react'

export default function SpotifyPlayer() {
  const [isLoading, setIsLoading] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if we have a token in localStorage
    const token = localStorage.getItem('spotify_token')
    if (token) {
      setIsConnected(true)
    }

    // Check URL for token parameter
    const params = new URLSearchParams(window.location.search)
    const newToken = params.get('token')
    if (newToken) {
      localStorage.setItem('spotify_token', newToken)
      setIsConnected(true)
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [])

  const handleSpotifyConnect = () => {
    setIsLoading(true)
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
    if (!clientId) {
      console.error('Spotify client ID not configured')
      setError('Spotify client ID not configured')
      setIsLoading(false)
      return
    }

    const redirectUri = `${window.location.origin}/api/auth/spotify/callback`
    const scope = [
      'streaming',
      'user-read-email',
      'user-read-private',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-library-read',
      'playlist-read-private'
    ].join(' ')

    const params = new URLSearchParams({
      client_id: clientId,
      response_type: 'code',
      redirect_uri: redirectUri,
      scope,
      show_dialog: 'true'
    })

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`
  }

  const handleDisconnect = () => {
    localStorage.removeItem('spotify_token')
    setIsConnected(false)
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Study Music</h2>
        {isConnected && (
          <button
            onClick={handleDisconnect}
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Disconnect
          </button>
        )}
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded">
          {error}
        </div>
      )}

      {isConnected ? (
        <iframe 
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8NTLI2TtZa6" 
          width="100%" 
          height="452" 
          allowFullScreen 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
          className="rounded-lg"
        />
      ) : (
        <>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Connect your Spotify account to access your music library.
          </p>
          <button
            onClick={handleSpotifyConnect}
            disabled={isLoading}
            className={`
              w-full py-3 px-4 rounded
              flex items-center justify-center gap-3
              bg-[#1DB954] hover:bg-[#1ed760] transition-colors
              text-white font-medium
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Connect Spotify Account
              </>
            )}
          </button>
        </>
      )}
    </div>
  )
}
