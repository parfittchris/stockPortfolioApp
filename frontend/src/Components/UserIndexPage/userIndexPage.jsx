import React from 'react';
import './userIndexPage.css';

class UserIndexPage extends React.Component {
    constructor(props) {
        super()
    }

    componentDidMount() {
      this.props.getUser(this.props.userId)
    }

    logout() {
        this.props.logout();
        this.props.history.push('/');
    }

    redirect() {
      let path = `user/${this.props.userId}`;
      this.props.history.push(path);
    }

    check() {
      console.log(this.props)
    }

    render() {
        return (
          <div>
            <h1>hello {}</h1>
            this is the user page
            <button onClick={this.logout.bind(this)}>Logout</button>
            <button onClick={this.redirect.bind(this)}>Profile</button>
            <button onClick={this.check.bind(this)}>Check State</button>
          </div>
        );
    }
}

export default UserIndexPage;