import React from 'react';
import './splashPage.css'

function SplashPage() {
    function userLogin(e) {
        e.preventDefault()
        console.log(e.target)
    }

    return (
      <div id='splashPageComponent'>
        <form onSubmit={userLogin}>
          <label>Username</label>
          <input type='text' id="loginName" />
          <label>Password</label>
          <input type='text' id="loginPassword"/>
          <button>Login</button>
        </form>
      </div>
    );
}

export default SplashPage