import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const Home = () => {
  let {user, logoutUser} = useContext(AuthContext)
  return (
    <div>
      { user ? (<button onClick={logoutUser}>Logout</button>) : <p>You shouldn't be here.</p>}
      
      { user && <p>Logged in via {user.email}</p> }
    </div>
  )
}

export default Home
