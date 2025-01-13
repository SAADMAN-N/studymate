# Auth Pages Knowledge

## Next.js Page Components
- In the app directory, page components must be the default export
- Use `export default function Page()` syntax for page components
- File must be named `page.tsx` in its respective route directory
- Must include 'use client' directive at the top of client components
- All imports must be at the top of the file, before any code
- When using client components with hooks, prefer arrow function component syntax with separate default export
- All imports must be at the top of the file, before any code

## Authentication Flow
- Using NextAuth.js with Google provider
- Login and Register pages both use Google OAuth
- Redirect to home page after successful authentication
- Google profile images require next.config.ts to allow lh3.googleusercontent.com domain
- Study room page and its components (including SpotifyPlayer) are protected behind authentication
- Must sign in with Google before accessing study room features

## Hydration Issues
- Browser extensions can cause hydration mismatches by adding attributes to DOM elements
- Use suppressHydrationWarning on elements that might be modified by browser extensions
- Common elements that need suppressHydrationWarning: html, body, and div elements that might be targeted by extensions
- This warning suppression should be used sparingly and only when necessary

## Spotify Integration
- Always handle missing images in playlists (use optional chaining)
- Provide fallback UI for missing images
- Use embedded player for simplest integration
- Embed formats:
  - Specific playlist: spotify.com/embed/playlist/[PLAYLIST_ID] (most reliable)
  - Study playlist ID: 37i9dQZF1DX8NTLI2TtZa6 (Intense Studying)
- No authentication or environment variables needed
- Height should be at least 452px for full player controls
- Allow attributes needed: autoplay, clipboard-write, encrypted-media, fullscreen, picture-in-picture
- Use /browse/featured-playlists as default view
- Direct API calls require OAuth token and proper scopes
- Embed player works without direct API authentication
- Avoid using /collection/ or /folder/ URLs as they may return 404
- Embedded player benefits:
  - No need to handle playlist data
  - Native Spotify UI
  - Works without authentication
  - More reliable
  - No SDK initialization required
- Full SDK benefits:
  - Complete playback control
  - Custom UI possible
  - Access to user's playlists
- Choose based on needs:
  - Use embedded player for basic playback
  - Use SDK for custom features
- Never mix SDK and embed approaches - use one or the other
- No authentication or environment variables needed
- Height should be at least 452px for full player controls
- Allow attributes needed: autoplay, clipboard-write, encrypted-media, fullscreen, picture-in-picture
- Requires client-side and server-side implementation
- Route handlers (like api/auth/spotify/callback) must be server components
- Never use 'use client' directive in route handlers
- SDK script must be loaded before player initialization
- SDK script must be loaded with Next.js Script component using 'beforeInteractive' strategy
- Script event handlers (onLoad, onReady) must be in client components
- Player must be initialized after SDK is ready using onSpotifyWebPlaybackSDKReady
- Player needs device_id from ready event to control playback
- Must use device_id when starting playback with /player/play endpoint
- Playlists are fetched from /me/playlists endpoint
- Web Playback SDK requires Spotify Premium account
- Always disconnect player when component unmounts or user disconnects
- Spotify Web Playback SDK requires TypeScript types to be defined manually
- SDK script must be loaded asynchronously to prevent blocking
- Required scopes: streaming, user-read-email, user-read-private, user-read-playback-state, user-modify-playback-state, user-library-read, playlist-read-private, user-read-playback-state, user-modify-playback-state
- Redirect URI must exactly match Spotify Dashboard config
- Use same port for NextAuth and Spotify callback URLs
- Environment variables must be consistent between app URL and callback URL
- After changing environment variables, restart dev server to apply changes
- Required environment variables:
  - NEXT_PUBLIC_SPOTIFY_CLIENT_ID: From Spotify Developer Dashboard
  - SPOTIFY_CLIENT_SECRET: From Spotify Developer Dashboard
  - NEXT_PUBLIC_APP_URL: Your app URL (e.g., http://localhost:3000)
- Spotify app must have exact redirect URI configured: {APP_URL}/api/auth/spotify/callback

## Image Optimization
- When modifying image dimensions with CSS, always set both width and height
- Or use 'width: "auto"' or 'height: "auto"' to maintain aspect ratio
- This applies to both regular img tags and Next.js Image component

## Spotify Authentication States
- SpotifyPlayer component shows Connect button when no token present
- Token comes from URL parameter after Spotify OAuth flow
- Successful auth flow: Connect button -> Spotify auth page -> callback route -> study room with token
- Token is stored in localStorage but cleared on page load to prevent using expired tokens
- Always provide a way to disconnect/logout from Spotify
- Only show embedded player when connected
- Always clean up URL parameters after successful connection
- Redirect to study room page after authentication
- Handle all error states and show appropriate messages
