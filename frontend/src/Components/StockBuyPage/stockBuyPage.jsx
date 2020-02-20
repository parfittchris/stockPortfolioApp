import React from 'react';
import './stockBuyPage.css';

class StockBuyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: {},
      user: 0,
      cash: 0,
    };

    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    const user = this.props.currentUser[this.props.userId];
    
    this.setState({
      user,
      cash: user.money.toFixed(2),
    });
  }

  refresh() {
    this.props.refresh();
  }

  setActive(e) {
    let target = e.currentTarget;
    let current = document.getElementsByClassName('activeComponent');

    for (let i = 0; i < current.length; i++) {
      current[i].classList.remove('activeComponent');
    }

    target.classList.add('activeComponent');
  }

  purchase(e) {
    e.preventDefault();
    const quantity = parseInt(document.getElementById("purchaseQty").value);
    const allTickers = this.state.user.followed_stocks.map(stock => stock.name);

    if (quantity > 0 && this.state.cash > (quantity * this.state.stock.latestPrice)) {
      const stock = {
        name: this.state.stock.symbol,
        quantity: quantity,
        user_id: this.state.user.id,
        price: this.state.stock.latestPrice
      };

      if (allTickers.includes(stock.name)) {
          this.props.updateCurrentStock(stock).then(this.refresh);
      } else {
          this.props.buyNewStock(stock);
      }

      const transaction = {
        user_id: this.state.user.id,
        transactionType: 'buy',
        quantity: quantity,
        price: this.state.stock.latestPrice,
        stock: this.state.stock.symbol
      }

      this.props.createTransaction(transaction);
    }
  }

  getStock(e) {
    e.preventDefault()
    const stock = document.getElementById('searchInput').value;

    this.props.fetchStock(stock).then((res) => {
        this.setState({
          stock: res.stock
        });
    }).fail(() => alert('Stock not found'));
  }

  renderCompany() {
    if (this.state.stock.companyName) {
      return (
        <div className='companyInfo'>
          <p>Company: {this.state.stock.companyName}</p>
          <p>Ticker: {this.state.stock.symbol}</p>
          <p>
            Open Price:{' '}
            ${this.state.stock.open || this.state.stock.previousClose} | Current
            Price: ${this.state.stock.latestPrice}
          </p>
          <p></p>
          <form onSubmit={this.purchase.bind(this)} className='buyForm'>
            <input type='number' id='purchaseQty' />
            <div className='formButtons'>
              <button type='submit'>Buy</button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <p>Search Stock Symbols using the search bar</p>
        </div>
      )
    }
  }

  changeForm() {
    this.props.setType('transactions')
  }

  render() {
    return (
      <div id='stockBuyComponent' onClick={this.setActive.bind(this)}>
        <div className="componentTop">
          <p className="changeButton">Buy Stocks |<button onClick={this.changeForm.bind(this)}>Transactions</button></p>
          <h3 id="transactionTitle">Buy Stocks</h3>
          <p id='availableCash'>Available Cash: ${this.state.cash}</p>
        </div>
        <form id="searchForm" onSubmit={this.getStock.bind(this)}>
            <label>Search</label>
            <input type="text" id="searchInput" autoComplete="off"/>
            <button id="searchButton">Search</button>
        </form>
        <div>{this.renderCompany()}</div>
      </div>
    );
  }
}

export default StockBuyPage;