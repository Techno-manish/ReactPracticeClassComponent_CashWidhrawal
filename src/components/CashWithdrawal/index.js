// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onDebit = (uniqueId, value) => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }
  render() {
    const {denominationsList} = this.props

    const {amount} = this.state

    return (
      <div className="bgContainer">
        <div className="card">
          <div className="profile">
            <h1 className="profilePic">S</h1>
            <p className="profileName">Sarah Williams</p>
          </div>
          <div className="balanceContainer">
            <p className="balText">Your Balance</p>
            <div className="amountContainer">
              <p className="amount">{amount}</p>
              <p className="currency">In Rupees</p>
            </div>
          </div>
          <p className="debitText">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="WithdrawAmountContainer">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                values={each}
                debit={this.onDebit}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
