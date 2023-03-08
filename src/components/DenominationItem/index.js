// Write your code here
import {Component} from 'react'

class DenominationItem extends Component {
  onClickChangeValue = () => {
    const {denominations, getDenominationValue} = this.props
    const {value} = denominations
    getDenominationValue(value)
  }

  render() {
    const {denominations} = this.props
    const {value} = denominations

    return (
      <li className="list-item">
        <button
          className="denomination-button"
          type="button"
          onClick={this.onClickChangeValue}
        >
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
