import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';


//Pages
import Home from './pages/Home.js';
import News from './pages/News.js';
import Rules from './pages/Rules.js';

const style = {
  listStyleType: 'none'      
}

class App extends Component {
  render() {



    return (
      <Router>
      <div>
        <nav className='Nav' >
          <ul className='headerNav' style={style}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/rules">Rules</Link>
            </li>
            <li>
              <Link to="/rules">Teams</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/rules" component={Rules}>
            {/* <Rules /> */}
          </Route>
          <Route path="/news" component={News}>
            {/* <News /> */}
          </Route>
          <Route path="/" component={Home}>
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>


    );
  }
}




export default App;
