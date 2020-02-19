import React from 'react';
import './transactions.css';

class TransactionPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {transactions: []}
    }

    componentDidMount() {
        this.props.fetchTransactions().then(res => {
            const userResults = [];
            
            for (const number in res.transactions) {
                if (res.transactions[number].user_id === this.props.userId) userResults.push(res.transactions[number]);
            }


            this.setState({
                transactions: userResults
            }, this.buildTable);
        })
    }

    buildTable() {
        const table = document.getElementById('transactionsTable');

        if (table) {
            table.innerHTML = '';
            let header = table.insertRow(0);
            header.setAttribute('class', 'tableHeader');
            header.innerHTML = `
                <tr className='tableHeader'>
                    <th>Stock</th>
                    <th>Action</th>
                    <th>Quantity</th>
                    <th>Share Price</th>
                    <th>Date</th>
                </tr>`;

            for (const number in this.state.transactions) {
                const item = this.state.transactions[number];
                let row = document.createElement('tr');
                row.classList.add('transactionsRow');
                let date = new Date(Date.parse(item.created_at))
                let currentDate = date.toISOString().split('T')[0];
                let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

                row.innerHTML = `
                    <td className="transactionStock">${item.stock}</td>
                    <td className="transactionType">${item.transactionType}</td>
                    <td className="transactionQty">${item.quantity}</td>
                    <td className="transactionType">$${item.price}</td>
                    <td className="transactionDate">${currentDate + ' @ ' + time}</td>
                `
                table.appendChild(row)
            }
        }
    }

    changeForm() {
        this.props.setType('buyPage')
    }

    check() {
        console.log(this.state);
    }

    render() {
        return (
        <div id="transactions">
            <button onClick={this.changeForm.bind(this)} className="changeButton">Buy Stocks</button> | Transactions
            <button onClick={this.check.bind(this)}>Check State</button>
            <table id="transactionsTable"></table>
        </div>
        )
    }
}

export default TransactionPage;