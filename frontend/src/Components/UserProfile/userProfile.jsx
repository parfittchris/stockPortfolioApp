import React from 'react';
import Wallet from '../Wallet/walletContainer';
import StockBuyPage from '../StockBuyPage/stockBuyContainer';
import './userProfile.css';


class userProfile extends React.Component {
    constructor(props) {
      super(props);

      this.state = {user: null};
    }

    componentDidMount() {
      this.props.getUser(this.props.userId).then(() => {
        this.setState({
          user: this.props.currentUser
        });
      });
    }

    check() {
      console.log(this.state.user[1])
    }
    render() {
        return (
          <div id="userProfileComponent">
            <Wallet user={this.state.user}/>
            <StockBuyPage user={this.state.user} company={'FB'}/>
          </div>
        ); 
  }
}

export default userProfile;
