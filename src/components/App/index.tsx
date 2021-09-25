import { useHistory } from 'react-router-dom';
import './App.css';

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
        <button className="App-btn App-btnLogin" onClick={redirectLogin}>Login</button>
        <button className="App-btn App-btnRegister" onClick={redirectRegister}>Register</button>
        <p>Projeto Intratec Tecnologia</p>
      </header>
    </div>
  );
}

export default App
