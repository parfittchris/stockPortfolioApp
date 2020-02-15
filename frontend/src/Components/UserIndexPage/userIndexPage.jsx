import React from 'react';
import './userIndexPage.css';

class UserIndexPage extends React.Component {
    constructor(props) {
        super()
    }

    buttonClick() {
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                this is the user page
                <button onClick={this.buttonClick.bind(this)}>Logout</button>
            </div>
        )
    }
}

export default UserIndexPage;