import { useAsgardeo } from '@asgardeo/react';

const AuthenticatedApp = () => {
  const {
    isSignedIn,
    signIn,
    signOut,
    user
  } = useAsgardeo();

  return (
    <div>
      {isSignedIn && user ? (
        <>
          <p>Welcome {user.userName || user.username || user.sub}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </div>
  );
};

export default AuthenticatedApp;
