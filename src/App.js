import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/layout/Navbar'
import Index from './Components/layout/Index'
import './App.css';

class App extends Component {
  render() {
    return ( 
      <Router>
        <React.Fragment>
          <Navbar />
          {/*  the rest will be in containers for diff routes */}
          <div className='container'>
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;