// Write your code here
import './index.css'

const DenominationItem = props => {
  const {values, debit} = props
  const {value, id} = values
  const onWithdraw = () => debit(id, value)
  return (
    <li className="list">
      <button className="button" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
