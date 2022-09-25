import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import CustomizedProgressBars from '../../components/CustomizedCircularProgress';

import { auth, googleProvider, githubProvider, facebookProvider } from '../../firebase'
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"

import { AuthContext } from '../../context/authentication/authContext'

import backgroundImg01 from '../../assets/bg-01.png'
import backgroundImg02 from '../../assets/bg-02.png'
import backgroundImg03 from '../../assets/bg-03.png'
import backgroundImg04 from '../../assets/bg-04.png'
import backgroundImg05 from '../../assets/bg-05.png'
import backgroundImg06 from '../../assets/bg-06.png'
import backgroundImg07 from '../../assets/bg-07.png'
import backgroundImg08 from '../../assets/bg-08.png'
import backgroundImg09 from '../../assets/bg-09.png'
import backgroundImg10 from '../../assets/bg-10.png'

import * as S from './styles'

const Login = () => {

  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(0)

  const arrayImage = [backgroundImg01, backgroundImg02, backgroundImg03, backgroundImg04, backgroundImg05, backgroundImg06, backgroundImg07, backgroundImg08, backgroundImg09, backgroundImg10]

  const { state: { currentUser }, dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogin = (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user })
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
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
    setLoading(true)
    signInWithPopup(auth, githubProvider).then((result) => {
      const user = result.user;
      dispatch({ type: "LOGIN", payload: user })
      navigate('/')
    }).catch((error) => {
      setLoading(false)
      if (error.code === 'auth/account-exists-with-different-credential') {
        setError(true)
        setErrorMessage('Email já cadastrado com outra conta!')
        setTimeout(() => {
          setError(false)
          setErrorMessage('')
        }, 2500)
      }
      console.log('Error => ', error)
    })
  }
  const handleLoginGoogle = async () => {
    setLoading(true)
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      dispatch({ type: "LOGIN", payload: user })
      navigate('/')
    }).catch((error) => {
      setLoading(false)
      console.log('Error => ', error)
    })
  }
  const handleLoginFacebook = () => {
    setLoading(true)
    signInWithPopup(auth, facebookProvider).then((result) => {
      const user = result.user;
      dispatch({ type: "LOGIN", payload: user })
      navigate('/')
    }).catch((error) => {
      setLoading(false)
      if (error.code === 'auth/account-exists-with-different-credential') {
        setError(true)
        setErrorMessage('Email já cadastrado com outra conta!')
        setTimeout(() => {
          setError(false)
          setErrorMessage('')
        }, 2500)
      }
      console.log('Error => ', error)
    })
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

  useEffect(() => {
    const randomImage = Math.floor(Math.random() * 11);
    setImage(randomImage)
  }, [])

  return (
    <S.Container>
      <S.ColumnOne>
        <S.Background src={arrayImage[image] || backgroundImg01} alt="Background image" />
      </S.ColumnOne>
      <S.ColumnTwo>
        <S.Title>Login to continue</S.Title>
        <S.Form onSubmit={handleLogin}>
          <S.Input type='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
          <S.Input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <S.Actions>
            <S.RememberLabel>
              <S.RememberInput type="checkbox" checked={checked} onChange={handleRemember} />
              <S.RememberText>Remember me</S.RememberText>
            </S.RememberLabel>
            <S.ForgotButton onClick={handleForgot}>Forgot Password?</S.ForgotButton>
          </S.Actions>
          <S.Button type='submit'>{loading ? <CustomizedProgressBars size={16} /> : 'Login'}</S.Button>
          <S.SocialLogin>
            <S.SocialLoginTitle>or sign up using</S.SocialLoginTitle>
            <S.SocialLoginIcons>
              <S.SocialIconGithub sx={{ fontSize: '1.2rem' }} onClick={handleLoginGithub} />
              <S.SocialIconGoogle sx={{ fontSize: '1.2rem' }} onClick={handleLoginGoogle} />
              <S.SocialIconFacebook sx={{ fontSize: '1.2rem' }} onClick={handleLoginFacebook} />
            </S.SocialLoginIcons>
          </S.SocialLogin>
          {error && <S.Error>{errorMessage}</S.Error>}
        </S.Form>
      </S.ColumnTwo>
    </S.Container>
  )
}

export default Login