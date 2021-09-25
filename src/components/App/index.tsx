import { useHistory } from 'react-router-dom';
import './App.css';

const App = () => {

  const history = useHistory()

  const redirectLogin = () => {
    history.push('/login')
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className="App-btnLogin" onClick={redirectLogin}>Login</button>
        <p>Projeto Intratec Tecnologia</p>
      </header>
    </div>
  );
}

export default App
