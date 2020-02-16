import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './util/route_util';
import SplashPage from './Components/SplashPage/splashPageContainer';
import IndexPage from './Components/UserIndexPage/userIndexContainer';


function App() {
  return (
    <div className="App">
       <Switch>
          <AuthRoute exact path="/" component = {SplashPage} />
          <ProtectedRoute exact path="/index" component={IndexPage} />
       </Switch >
    </div>
  );
}

export default App;
