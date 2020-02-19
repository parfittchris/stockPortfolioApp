import React from 'react';
import './wallet.css';


class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      value: null,
      stockNames: [],
      stocks: [],
      selected: false
    };
  }

  componentDidMount() {
    const user = this.props.currentUser[this.props.userId];

    this.setState({
      username: user.username,
      email: user.email,
      money: user.money,
      stockNames: user.followed_stocks
    }, () => this.buildTable());
  }

  buildTable() {
    let table = document.getElementById('portfolioTable');
    let value = 0;
    let allStocks = [];

    if (table) {
      table.innerHTML = '';
      let header = table.insertRow(0);

      header.setAttribute('id', 'tableHeader');
      header.innerHTML = `
              <tr class='table-header'>
                <th>Stock Name</th>
                <th>Quantity</th>
                <th>Price/Share</th>
                <th>Total</th>
              </tr>`;

      this.state.stockNames.forEach(stock => {
        this.props.fetchStock(stock.name).then(res => {
          const newStock = {
            name: res.stock.companyName,
            ticker: res.stock.symbol,
            quantity: stock.quantity,
            price: res.stock.latestPrice
          }
          

          value += newStock['price'] * newStock['quantity'];

          allStocks.push(newStock);

          let row = document.createElement('tr');
          row.classList.add('stockRow');
          row.setAttribute('data-name', newStock['name']);
          row.innerHTML = `
                      <td class="stockName">${newStock['ticker']}</td>
                      <td class="stockQty">${newStock['quantity']}</td>
                      <td class="stockPrice">$${newStock['price'].toFixed(2)}</td>
                      <td class="totalPrice">$${(newStock['price']* newStock['quantity']).toFixed(2)}</td>`;
          row.onclick = this.selectStock.bind(this);
          table.appendChild(row);
          
          this.setState({
            value: value.toFixed(2),
          });
        });
      });

      this.setState({ 
        stocks: allStocks
      });
    }
  }

  setActive(e) {
    let target = e.currentTarget;
    let current = document.getElementsByClassName("activeComponent");

    for (let i = 0; i < current.length; i++) {
      current[i].classList.remove("activeComponent");
    }

    target.classList.add('activeComponent');
  }

  selectStock(e) {
    const section = document.getElementsByClassName('stockSection')[0];

    if (!this.state.selected) {
      section.classList.remove('stockSection');
      section.classList.add('stockSectionActive');
    }

    const name = e.currentTarget.dataset.name;
    const qty = e.currentTarget.getElementsByClassName('stockQty')[0].innerHTML;
    const price = e.currentTarget.getElementsByClassName('stockPrice')[0].innerHTML;

    const selectedStock = {
      name,
      qty,
      price
    }
    this.setState({selected: selectedStock});
  }

  sellForm() {
      if (this.state.selected) {
        return (
          <form id="sellForm" onSubmit={this.handleSubmit.bind(this)} autoComplete="off">
            <h3>Sell {this.state.selected.name} Shares</h3>
            <p> Current Shares: {this.state.selected.qty} | Current Share Price: {this.state.selected.price}</p>
            <label>How many shares do you want to sell?</label>
            <input id="sellInput" type='number'/>
            <button type="submit" id="sellButton">Sell</button>
          </form>
        );
      }
  }

  handleSubmit(e) {
    e.preventDefault();

    const sellQuantity = parseInt(document.getElementById("sellInput").value);
    const userQuantity = parseInt(this.state.selected.qty);

    if (sellQuantity <= userQuantity) {
      const stock = {
        name: this.state.selected.name,
        quantity: (sellQuantity * -1),
        user_id: this.props.userId,
        price: this.state.selected.price,
      };

      if (sellQuantity === userQuantity) {
        this.props.sellAllStock(stock);
      } else {
        this.props.updateCurrentStock(stock);
      }
    }
  }

  render() {
    return (
        <div id='walletComponent' onClick={this.setActive.bind(this)}>
          <div id='walletContents'>
            <div className='userImage' />
            <p>{this.state.username}</p>
            <p>Portfolio Value: ${this.state.value}</p>
            <p>My Stock Portfolio:</p>
          </div>
          <div className='stockSection'>
            <table id='portfolioTable'></table>
          </div>
          <div id='sellStock'>{this.sellForm()}</div>
          <a href="https://iexcloud.io">IEX Cloud</a>
        </div>
    );
  }
}

export default Wallet;