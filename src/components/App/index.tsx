import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import './App.css'

const App = () => {

  const history = useHistory()

  const redirectLogin = () => {
    history.push('/login')
  }

  const redirectRegister = () => {
    history.push('/register')
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-btn">
          <Button variant='contained' onClick={redirectLogin}>Login</Button>
          <Button variant='contained' onClick={redirectRegister}>Register</Button>
        </div>
        <p>Projeto Intratec Tecnologia</p>
      </header>
    </div>
  );
}

export default App
