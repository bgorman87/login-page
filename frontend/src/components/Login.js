import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <input type="text" name="email" placeholder="Enter Email" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit" />
        </form>
    </div>
  )
}

export default Login
