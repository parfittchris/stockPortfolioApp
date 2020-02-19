import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './util/route_util';
import SplashPage from './Components/SplashPage/splashPageContainer';
import IndexPage from './Components/UserIndexPage/userIndexContainer';
import ProfilePage from './Components/UserProfile/userProfileContainer';

function App() {
  return (
    <div className="App">
       <Switch>
          <ProtectedRoute exact path="/index" component={IndexPage} />
          <ProtectedRoute exact path="/user/:id" component={ProfilePage} />
          <AuthRoute component={SplashPage} />
          <ProtectedRoute component={IndexPage} />
       </Switch >
    </div>
  );
}

export default App;
