import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@asgardeo/react'

const SignIn = () => {
  return (
    <div className='w-full h-[80px] p-40 flex justify-start items-center bg-background'>
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
