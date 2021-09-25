import { BrowserRouter as Router, Route } from 'react-router-dom';
// import '../App.css';
import Login from '../components/Login'
import App from '../components/App'

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login} />
      </Router>
    </>
  )
}

export default Routes;
