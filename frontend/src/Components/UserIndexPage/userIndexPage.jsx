import React from 'react';
import './userIndexPage.css';

class UserIndexPage extends React.Component {
    constructor(props) {
        super()
        this.state = {user: null}
    }

    componentDidMount() {
      this.props.getUser(this.props.userId).then(response => {
          this.setState({
            user: this.props.currentUser
          });
      });
    }

    buttonClick() {
        this.props.logout();
        this.props.history.push('/');
    }


    check() {
      console.log(this.state)
    }

    render() {
        return (
          <div>
            <h1>hello {}</h1>
            this is the user page
            <button onClick={this.buttonClick.bind(this)}>Logout</button>
            <button onClick={this.check.bind(this)}>Check Store</button>
          </div>
        );
    }
}

export default UserIndexPage;