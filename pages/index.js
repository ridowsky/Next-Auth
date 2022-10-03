import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Home = () => {

  const {data: session} = useSession();
  console.log(session);

  const handleSignOut = () => signOut({redirect: false})

  return (
    <div>
      {session ? (
        <div>
          <div>You are Loggedin {session.user.name}</div>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
        
        ) : (
      <div>
        <p>You are not Logged in</p>
        <button onClick={signIn}>Sign in please</button>
        </div>)}
    </div>
  )
}

export default Home