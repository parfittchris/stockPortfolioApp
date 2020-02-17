import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';
import { buyNewStock, updateCurrentStock, sellAllStock } from '../../actions/stock_actions';

import StockBuyPage from './stockBuyPage';

const mapStateToProps = state => {
  return {
    userId: state.sessionsReducer.id,
    currentUser: state.usersReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(getUser(id)),
    buyNewStock: stock => dispatch(buyNewStock(stock)),
    updateCurrentStock: stock => dispatch(updateCurrentStock(stock)),
    sellAllStock: stock => dispatch(sellAllStock(stock))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockBuyPage);
