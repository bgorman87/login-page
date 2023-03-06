import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Login = () => {

  let {loginUser, user} = useContext(AuthContext)
  let navigate = useNavigate()

  useEffect(() => {
    if(user) {
      console.log(user)
      navigate("/")
    }
  },[user])

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={loginUser}>
        <input type="text" name="email" placeholder="Enter Email" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit" />
        </form>
    </div>
  )
}

export default Login
