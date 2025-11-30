import { useEffect, useState } from 'react';
import { useAsgardeo } from '@asgardeo/react';
import { env } from '../../config/env';

export default function UserProfile() {
  const { isSignedIn, getAccessToken } = useAsgardeo();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!isSignedIn) {
      return;
    }

    (async () => {
      try {
        const response = await fetch(`${env.VITE_ASGARDEO_BASE_URL}/scim2/Me`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/scim+json',
            Authorization: `Bearer ${await getAccessToken()}`,
          },
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();

        setUserData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, [isSignedIn, getAccessToken]);

  if (!isSignedIn) {
    return <div>Please sign in to view your profile.</div>;
  }

  return (
    <div className='relative top-12 p-8'>
      <h2>User Profile</h2>
      {userData && (
        <pre className='text-white'>{JSON.stringify(userData, null, 2)}</pre>
      )}
    </div>
  );
}
