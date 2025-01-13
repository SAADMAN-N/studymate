import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  // Use the actual origin from the request
  const baseUrl = request.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3010'

  if (error) {
    console.error('Spotify auth error:', error)
    return NextResponse.redirect(`${baseUrl}/study-room?error=${error}`)
  }

  if (!code) {
    console.error('No code received from Spotify')
    return NextResponse.redirect(`${baseUrl}/study-room?error=no_code`)
  }

  try {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
    const redirectUri = `${baseUrl}/api/auth/spotify/callback`

    if (!clientId || !clientSecret) {
      console.error('Missing Spotify credentials')
      return NextResponse.redirect(
        `${baseUrl}/study-room?error=spotify_credentials_missing`
      )
    }

    console.log('Requesting Spotify token with code:', code)
    
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      },
      body: new URLSearchParams({
        code,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Failed to get Spotify token:', data)
      throw new Error(data.error_description || 'Failed to get access token')
    }

    console.log('Successfully got Spotify token')

    // Redirect back to the study room with the token
    return NextResponse.redirect(`${baseUrl}/study-room?token=${data.access_token}`)
  } catch (error) {
    console.error('Spotify callback error:', error)
    return NextResponse.redirect(
      `${baseUrl}/study-room?error=authentication_failed`
    )
  }
}
