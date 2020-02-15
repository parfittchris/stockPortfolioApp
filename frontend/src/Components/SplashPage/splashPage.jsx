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
    }

    userLogin(e) {
        e.preventDefault()

        this.props.history.push('index')
        this.props.login({ email: 'demoUser', password: 'password' });
        
        // if (this.state.type === 'Login') {
        //   this.props.login({ email: 'demoUser', password: 'password' });
        //   console.log('login')
        // } else {
        //   this.props.signUp({ email: 'demoUser', password: 'password' });
        //   console.log('signup')
        // }
    }

    change() {
      let word = this.state.type === 'Login' ? 'Sign Up' : 'Login';

      this.setState({
        type: word
      });
    }

    handleChange(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    render() {
        return (
          <div id='splashPageComponent'>
            <h1>Login Page</h1>
            <form onSubmit={this.userLogin}>
              <label>Username</label>
              <input
                type='text'
                id='loginName'
                name='username'
                onChange={this.handleChange.bind(this)}
              />
              <label>Password</label>
              <input
                type='text'
                id='loginPassword'
                name='password'
                onChange={this.handleChange.bind(this)}
              />
              <button>{this.state.type}</button>
            </form>
            <button onClick={this.change.bind(this)}>Change</button>
          </div>
        );
    }
}


export default withRouter(SplashPage)