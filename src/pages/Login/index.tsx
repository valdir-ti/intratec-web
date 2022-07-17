import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Google, Facebook, GitHub } from '@mui/icons-material'

import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from "firebase/auth"

import { AuthContext } from '../../context/authentication/authContext'

import backgroundImg from '../../assets/bg-01.jpg'

import * as S from './styles'

const Login = () => {

  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)

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
      setErrorMessage('Email e/ou Password inválidos!')
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
      setTimeout(() => {
        setError(false)
        setErrorMessage('')
      }, 2500)
    });
  }

  const handleLoginGithub = () => {
    handleFunctionality()
    console.log('Login with Github')
  }
  const handleLoginGoogle = () => {
    handleFunctionality()
    console.log('Login with Google')
  }
  const handleLoginFacebook = () => {
    handleFunctionality()
    console.log('Login with Facebook')
  }

  const handleForgot = () => {
    handleFunctionality()
    console.log('handleForgot')
  }

  const handleRemember = () => {
    handleFunctionality()
    console.log('handle Remember')
    setChecked(!checked)
  }

  // TODO: Remover após implementar o login com outros serviços
  function handleFunctionality() {
    setError(true)
    setErrorMessage('Funcionalidade em construção!')
    setTimeout(() => {
      setError(false)
      setErrorMessage('')
    }, 2500)
  }

  useEffect(() => {
    currentUser && navigate('/')
  }, [currentUser])

  return (
    <S.Container>
      <S.ColumnOne>
        <S.Background src={backgroundImg} alt="Background image" />
      </S.ColumnOne>
      <S.ColumnTwo>
        <S.Title>Login to continue</S.Title>
        <S.Form onSubmit={handleLogin}>
          <S.Input type='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
          <S.Input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <S.Actions>
            <S.RememberLabel>
              <S.RememberInput type="checkbox"  checked={checked} onChange={handleRemember} />
              <S.RememberText>Remember me</S.RememberText>
            </S.RememberLabel>
            <S.ForgotButton onClick={handleForgot}>Forgot Password?</S.ForgotButton>
          </S.Actions>
          <S.Button type='submit'>Login</S.Button>
          <S.SocialLogin>
            <S.SocialLoginTitle>or sign up using</S.SocialLoginTitle>
            <S.SocialLoginIcons>
              <S.SocialIconGithub sx={{ fontSize: '1.2rem' }} onClick={handleLoginGithub}/>
              <S.SocialIconGoogle sx={{ fontSize: '1.2rem' }} onClick={handleLoginGoogle}/>
              <S.SocialIconFacebook sx={{ fontSize: '1.2rem' }} onClick={handleLoginFacebook}/>
            </S.SocialLoginIcons>
          </S.SocialLogin>
          {error && <S.Error>{errorMessage}</S.Error>}
        </S.Form>
      </S.ColumnTwo>
    </S.Container>
  )
}

export default Login