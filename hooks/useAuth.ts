import { useSession, signIn as nextAuthSignIn, signOut as nextAuthSignOut } from 'next-auth/react'

export function useAuth() {
  const { data: session, status } = useSession()

  const signIn = async () => {
    console.log('Attempting to sign in...')
    try {
      const result = await nextAuthSignIn('google', {
        callbackUrl: '/',
        redirect: true
      })
      console.log('Sign in result:', result)
    } catch (error) {
      console.error('Sign in error:', error)
    }
  }

  const signOut = async () => {
    try {
      await nextAuthSignOut({ callbackUrl: '/' })
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  return {
    user: session?.user,
    isAuthenticated: !!session,
    isLoading: status === 'loading',
    signIn,
    signOut,
  }
}
