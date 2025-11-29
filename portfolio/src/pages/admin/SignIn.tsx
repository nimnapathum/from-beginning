import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@asgardeo/react'

const SignIn = () => {
  return (
    <div>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  )
}

export default SignIn
