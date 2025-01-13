# Auth Pages Knowledge

## Next.js Page Components
- In the app directory, page components must be the default export
- Use `export default function Page()` syntax for page components
- File must be named `page.tsx` in its respective route directory
- Must include 'use client' directive at the top of client components
- All imports must be at the top of the file, before any code

## Authentication Flow
- Using NextAuth.js with Google provider
- Login and Register pages both use Google OAuth
- Redirect to home page after successful authentication
- Google profile images require next.config.ts to allow lh3.googleusercontent.com domain

## Hydration Issues
- Browser extensions can cause hydration mismatches by adding attributes to DOM elements
- Use suppressHydrationWarning on elements that might be modified by browser extensions
- Common elements that need suppressHydrationWarning: html, body, and div elements that might be targeted by extensions
- This warning suppression should be used sparingly and only when necessary

