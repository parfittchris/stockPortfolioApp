import React from 'react';
import './stockBuyPage.css';

class StockBuyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: {},
      user: 0,
      cash: 0,
      key: 'pk_7d93d6f153d84381b7721aca7e46d09c'
    };
  }

  componentDidMount() {
    const user = this.props.currentUser[this.props.userId];
    
    this.setState({
      user,
      cash: user.money.toFixed(2),
    });
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
    console.log(quantity);
    console.log(this.state.cash);

    if (quantity > 0 && this.state.cash > (quantity * this.state.stock.latestPrice)) {
      const stock = {
        name: this.state.stock.symbol,
        quantity: quantity,
        user_id: this.state.user.id,
        price: this.state.stock.latestPrice
      };
      console.log(stock)
      if (allTickers.includes(stock.name)) {
          this.props.updateCurrentStock(stock);
      } else {
          this.props.buyNewStock(stock);
      }
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

  check() {
    console.log(this.state)
  }

  render() {
    return (
      <div id='stockBuyComponent' onClick={this.setActive.bind(this)}>
        <p id='availableCash'>Available Cash: ${this.state.cash}</p>
        <form id="searchForm" onSubmit={this.getStock.bind(this)}>
            <label>Search</label>
            <input type="text" id="searchInput"/>
            <button>Submit</button>
        </form>
        <div className='companyInfo'>
          <p>Company: {this.state.stock.companyName}</p>
          <p>Ticker: {this.state.stock.symbol}</p>
          <p>Stock Price: ${this.state.stock.latestPrice}</p>
          <form onSubmit={this.purchase.bind(this)} className='buyForm'>
            <input type='number' id="purchaseQty"/>
            <div className='formButtons'>
            <button type="submit">Buy</button>
            </div>
          </form>
          <button onClick={this.check.bind(this)}>check</button>
        </div>
        <a href="https://iexcloud.io" id="iexCredit">Data provided by IEX Cloud</a>
      </div>
    );
  }
}

export default StockBuyPage;