import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/App'
import Login from '../components/Login'
import Register from '../components/Register'

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Router>
    </>
  )
}

export default Routes;
