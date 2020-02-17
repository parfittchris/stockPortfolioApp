import React from 'react';
import './wallet.css';


class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      value: null,
      stocks: []
    };

  }

  componentDidMount() {
    this.props
      .getUser(this.props.userId)
      .then(() => {
        this.setState({
          username: this.props.currentUser[this.props.userId].username,
          email: this.props.currentUser[this.props.userId].email,
          money: this.props.currentUser[this.props.userId].money,
          stocks: this.props.currentUser[this.props.userId].followed_stocks
        });
      })
      .then(this.populateStocks.bind(this));
  }

  setActive(e) {
    let target = e.currentTarget;
    let current = document.getElementsByClassName("activeComponent");

    for (let i = 0; i < current.length; i++) {
      current[i].classList.remove("activeComponent");
    }

    target.classList.add('activeComponent');
  }

  populateStocks() {
    const table = document.getElementById('portfolioTable');
    let value = 0;

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

      for (let i = 0; i < this.state.stocks.length; i++) {
        const stock = this.state.stocks[i];
        value += 27.43 * stock['quantity'];

        let row = document.createElement('tr');
        row.classList.add('stockRow');
        row.innerHTML = `
                  <th>${stock['name']}</th>
                  <th>${stock['quantity']}</th>
                  <th>$${27.43}</th>
                  <th>$${(27.43 * stock['quantity']).toFixed(2)}</th>`;
        table.appendChild(row);

        this.setState({ value });
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
          <div id='stockSection'>
            <table id='portfolioTable'></table>
          </div>
        </div>
    );
  }
}


export default Wallet;