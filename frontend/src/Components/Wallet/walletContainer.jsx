import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';
import { updateCurrentStock, sellAllStock, fetchStockInfo } from '../../actions/stock_actions';


import Wallet from './wallet';

const mapStateToProps = state => {
  return {
    userId: state.sessionsReducer.id,
    currentUser: state.usersReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(getUser(id)),
    updateCurrentStock: stock => dispatch(updateCurrentStock(stock)),
    sellAllStock: stock => dispatch(sellAllStock(stock)),
    fetchStock: stock => dispatch(fetchStockInfo(stock))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
