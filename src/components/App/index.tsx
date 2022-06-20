import List from '../List';
import Main from '../Main';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Widget from '../Widget';

import './App.css'

const App = () => {
  return (
    <div className="container">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Main />
      </main>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content1">
        <Widget />
      </div>
      <div className="content2">
        <Widget />
      </div>
      <div className="content3">
        <Widget />
      </div>
      <div className="content4">
        <Widget />
      </div>
      <div className="list">
        <List />
      </div>
      <footer>
        <p>Developed by Valdir Silva</p>
      </footer>
    </div>
  );
}

export default App
