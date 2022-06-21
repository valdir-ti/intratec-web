import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from "firebase/auth"

import { AuthContext } from '../../context/authentication/authContext'

import './styles.scss'

const Login = () => {

  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { state: { currentUser }, dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogin = (e: any) => {
    e.preventDefault()
    setError(false)

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({type: "LOGIN", payload: user})
        navigate('/')
      })
      .catch((error) => {
        setError(true)
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  useEffect(() => {
    currentUser && navigate('/')
  }, [])


  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Login</button>
        {error && <span>Wrong email/password!</span>}
      </form>
    </div>
  )
}

export default Login