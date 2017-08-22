import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import Intro from './Home';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>React Image Masonry</h1>
          <h2>Generate image masonry easily with this react component!</h2>
          <nav>
            <ul>
              <li><Link to={process.env.PUBLIC_URL + '/'}>Intro</Link></li>
              <li><Link to={process.env.PUBLIC_URL + '/demo1'}>Demo1</Link></li>
              <li><Link to={process.env.PUBLIC_URL + '/demo2'}>Demo2</Link></li>
              <li><Link to={process.env.PUBLIC_URL + '/demo3'}>Demo3</Link></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Intro}/>
          <Route path={process.env.PUBLIC_URL + '/demo1'} component={Demo1}/>
          <Route path={process.env.PUBLIC_URL + '/demo2'} component={Demo2}/>
          <Route path={process.env.PUBLIC_URL + '/demo3'} component={Demo3}/>
        </Switch>
      </div>
    );
  }
}

export default App;
