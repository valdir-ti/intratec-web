import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
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
        <p>Projeto Intratec Tecnologia</p>
        <div className="App-btn">
          <Button variant='primary' onClick={redirectLogin}>Login</Button>
          <Button variant='primary' onClick={redirectRegister}>Register</Button>
        </div>
      </header>
    </div>
  );
}

export default App
