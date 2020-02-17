import React from 'react';
import './stockBuyPage.css';

class StockBuyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: 'Facebook',
      ticker: 'FB',
      price: (39.5).toFixed(2),
      user: 0,
      cash: 0
    };
  }

  componentDidMount() {
    this.props
      .getUser(this.props.userId)
      .then(() => {
        this.setState({
          user: this.props.currentUser[this.props.userId],
          cash: this.props.currentUser[this.props.userId].money.toFixed(2)
        });
      })
  }

  setActive(e) {
    let target = e.currentTarget;
    let current = document.getElementsByClassName('activeComponent');

    for (let i = 0; i < current.length; i++) {
      current[i].classList.remove('activeComponent');
    }

    target.classList.add('activeComponent');
  }

  handleSubmit(e) {
    const quantity = parseInt(document.getElementById("purchaseQty").value);
    const allTickers = this.state.user.followed_stocks.map(stock => stock.name);
    
    if (quantity > 0 && this.state.cash > (quantity * this.state.price)) {
      const stock = {
        name: this.state.ticker,
        quantity: quantity,
        user_id: this.state.user.id,
        price: this.state.price
      };

      if (allTickers.includes(stock.name)) {
          this.props.updateCurrentStock(stock);
      } else {
          this.props.buyNewStock(stock);
      }
    }
  }

  render() {
    return (
      <div id='stockBuyComponent' onClick={this.setActive.bind(this)}>
        <p id='availableCash'>Available Cash: ${this.state.cash}</p>
        <div className='companyInfo'>
          <p>Company: {this.state.company}</p>
          <p>Ticker: {this.state.ticker}</p>
          <p>Stock Price: ${this.state.price}</p>
          <form onSubmit={this.handleSubmit.bind(this)} className='buyForm'>
            <input type='text' id="purchaseQty" />
            <div className='formButtons'>
              <button>Buy</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default StockBuyPage;