// Write your code here
import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {currentBalance: 2000}

  getDenominationValue = value => {
    const {currentBalance} = this.state
    if (currentBalance >= value) {
      this.setState(prevState => ({
        currentBalance: prevState.currentBalance - value,
      }))
    } else {
      alert('No enough balance')
    }
  }

  render() {
    const {denominationsList} = this.props
    const {currentBalance} = this.state
    const fullName = 'Sivalokesh Yadav'
    const firstChar = fullName.slice(0, 1)
    return (
      <div className="app-container">
        <div className="sub-app-container">
          <div className="name-container">
            <div className="first-char">
              <h1>{firstChar}</h1>
            </div>
            <h1 className="first-heading">{fullName}</h1>
          </div>
          <div className="balance-sheet">
            <p className="balance-heading">Your Balance</p>
            <div className="num-balance">
              <p className="name-balance-heading">{currentBalance}</p>
              <p className="para-balance-sheet">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="withdraw-para">CHOOSE SUM (IN RUPEES)</p>
            <ul className="withdraw-unordered-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  denominations={eachItem}
                  key={eachItem.id}
                  getDenominationValue={this.getDenominationValue}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
