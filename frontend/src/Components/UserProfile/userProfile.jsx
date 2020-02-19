import React from 'react';

import Wallet from '../Wallet/walletContainer';
import Transactions from '../Transactions/transactionsContainer';
import StockBuyPage from '../StockBuyPage/stockBuyContainer';
import './userProfile.css';


class userProfile extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        user: null,
        component: 'buyPage'
      };
    }

    componentDidMount() {
      this.props.getUser(this.props.userId).then(() => {
        this.setState({
          user: this.props.currentUser,
        });
      });

      this.setType = this.setType.bind(this);
    }

    setType(type) {
        if (this.state.component !== type) {
            this.setState({
              component: type
            });
        }
    }

    renderComponent() {
      if (this.state.component === 'buyPage') {
        return <StockBuyPage user={this.state.user} company={'FB'} setType={this.setType} />
      } else {
        return <Transactions user={this.state.user} setType={this.setType}/>
      }
    }


    render() {
        return (
          <div id="userProfileComponent">
            <Wallet user={this.state.user} />
            {this.renderComponent()}
          </div>
        ); 
  }
}

export default userProfile;
