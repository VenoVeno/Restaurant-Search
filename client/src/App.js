import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import { GlobalStyleContainer } from './global.styles';
import './App.scss';

const App = () => {
  return (
    <div className="root-container">
      <div className="main-container">
        <GlobalStyleContainer />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    </div>
  )
}

export default App;
