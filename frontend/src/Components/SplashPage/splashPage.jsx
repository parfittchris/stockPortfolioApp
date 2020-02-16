import React from 'react';
import { withRouter } from 'react-router';
import './splashPage.css'

class SplashPage extends React.Component {
    constructor() {
        super();
        this.state =  {
            username: "",
            email: "",
            password: "",
            type: 'Login'
        }
        
        this.userLogin = this.userLogin.bind(this);
        this.userSignUp = this.userSignUp.bind(this);
    }

    userSignUp(e) {
        e.preventDefault();
        this.props.signUp({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        })
    }
    
    userLogin(e) {
        if (e) {
          e.preventDefault()
        }
        this.props.login({ username: this.state.username, password: this.state.password });
    }
    demoLogin(e) {
        e.preventDefault()
        this.props.login({ username: 'demoUser', password: 'password123' });
    }
    
    changeForm() {
      let word = this.state.type === 'Login' ? 'Sign Up' : 'Login';

      this.setState({
        type: word,
        username: "",
        email: "",
        password: ""
      });
    }

    handleChange(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    render() {
      if (this.state.type === 'Login') {
        return (
          <div id='splashPageComponent'>
            <h1>Stock Wallet</h1>
            <form onSubmit={this.userLogin}>
              <p>Login</p>
              <div className='startForm'>
                <input
                  type='text'
                  className='homeInput'
                  id='loginName'
                  name='username'
                  placeholder='Username'
                  onChange={this.handleChange.bind(this)}
                  autoComplete='off'
                />
                <input
                  type='password'
                  className='homeInput'
                  id='loginPassword'
                  name='password'
                  placeholder='Password'
                  onChange={this.handleChange.bind(this)}
                  autoComplete='off'
                />
              </div>
              <div>
                <button className='signUpButton'>{this.state.type}</button>
                <button
                  className='signUpButton'
                  onClick={this.demoLogin.bind(this)}
                >
                  Demo User
                </button>
              </div>
            </form>
            <p>
              Not a user? Sign up
              <a className='link' onClick={this.changeForm.bind(this)}>
                {' '}
                here!
              </a>
            </p>
          </div>
        );
      } else {
          return (
            <div id='splashPageComponent'>
              <h1>Stock Wallet</h1>
              <form onSubmit={this.userSignUp}>
                <p>Sign Up</p>
                <div className='startForm'>
                  <input
                    type='text'
                    className='homeInput'
                    id='loginName'
                    name='username'
                    placeholder='Username'
                    onChange={this.handleChange.bind(this)}
                    autoComplete='off'
                  />
                  <input
                    type='text'
                    className='homeInput'
                    id='email'
                    name='email'
                    placeholder='Email'
                    onChange={this.handleChange.bind(this)}
                    autoComplete='off'
                  />
                  <input
                    type='password'
                    className='homeInput'
                    id='loginPassword'
                    name='password'
                    placeholder='Password'
                    onChange={this.handleChange.bind(this)}
                    autoComplete='off'
                  />
                </div>
                <div>
                  <button className='signUpButton'>{this.state.type}</button>
                  <button
                    className='signUpButton'
                    onClick={this.demoLogin.bind(this)}
                  >
                    Demo User
                  </button>
                </div>
              </form>
              <p>
                Already a user? Login
                <a className='link' onClick={this.changeForm.bind(this)}>
          {' '}here!
                </a>
              </p>
              <button onClick={console.log(this.props)}>Get state</button>
            </div>
          );
        }
    }
}


export default withRouter(SplashPage)