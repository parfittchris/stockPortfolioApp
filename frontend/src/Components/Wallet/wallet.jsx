import React from 'react';
import './wallet.css';


class Wallet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:null,
            email: null,
            money: null,
            stocks: []
        }
    }

    componentDidMount() {
        this.props.getUser(this.props.userId)
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


    populateStocks() {
        const table = document.getElementById('portfolioTable');
        if (table) {
          table.innerHTML = '';
          let header = table.insertRow(0);
          let headerName = header.insertCell(0);
          let headerQty = header.insertCell(1);
          let headerPrice = header.insertCell(2);
          let headerTotal = header.insertCell(3);
          headerName.innerHTML = 'Stock Name';
          headerQty.innerHTML = 'Quantity';
          headerPrice.innerHTML = 'Price/Share';
          headerTotal.innerHTML = 'Total';
          let body = document.createElement('tbody');
          table.appendChild(body);

          for (let i = 0; i < this.state.stocks.length; i++) {
            const stock = this.state.stocks[i];
            
            let row = document.createElement('tr');
            row.classList.add('stockRow');
            let name = row.insertCell(0);
            let qty = row.insertCell(1);
            let price = row.insertCell(2);
            let total = row.insertCell(3);  
            body.appendChild(row);

            name.innerHTML = stock['name'];
            qty.innerHTML = stock['quantity']
            price.innerHTML = `$${27.43}`;
            total.innerHTML = `$${27.43 * qty.innerHTML}`;
          }
        }
    }

    check() {
      console.log(this.props)
    }

    render() {
        
        return (
          <div id='walletComponent'>
            <div id='walletContents'>
              <div className='userImage' />
              <p>{this.state.username}</p>
              <p>Available Cash: ${this.state.money}</p>
              <p>My Stock Portfolio:</p>
            </div>
            <div id="stockSection">
                <table id='portfolioTable'></table>
            </div>
            <button onClick={this.check.bind(this)}>Check State</button>
          </div>
        );
    }
}


export default Wallet;