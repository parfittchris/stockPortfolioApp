import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';


import SplashPage from './Components/SplashPage/splashPageContainer';
import IndexPage from './Components/UserIndexPage/userIndexContainer';


function App() {
  return (
    <div className="App">
       <Switch>
          <Route exact path="/" component = {SplashPage} />
          <Route exact path="/index" component={IndexPage} />
       </Switch >
    </div>
  );
}

export default App;
