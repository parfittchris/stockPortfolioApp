import React from 'react';
import Wallet from '../Wallet/walletContainer';
import StockBuyPage from '../StockBuyPage/stockBuyContainer';
import './userProfile.css';


class userProfile extends React.Component {

    render() {
        return (
          <div id="userProfileComponent">
            <Wallet />
            <StockBuyPage />
          </div>
        ); 
  }
}

export default userProfile;
