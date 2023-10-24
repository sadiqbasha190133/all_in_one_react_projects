
import "./index.css"

const DenominationItem = (props) =>{
    const{object, onCashDebit} = props
    const{value} = object
    const onDebit = () =>{
        return onCashDebit(value)
    }
    return(
        <li className="list-container">
            <button className="button" onClick={onDebit}>{value}</button>
        </li>
    )
}

export default DenominationItem