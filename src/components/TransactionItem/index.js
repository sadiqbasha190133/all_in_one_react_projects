

import "./index.css"
const TransactionItem = (props) =>{
    const {details, onDeleteTransactionHistory} = props
    const {usedFor,deleteImgUrl, amountType, amount, id} = details
    const onDelete = () =>(
        onDeleteTransactionHistory(id)
    )
    return(
        <li className="transaction-box">
            <div className="transactions-details-flex">
                <h2 className="transaction-title-heading">{usedFor}</h2>
                <h2 className="transaction-title-heading">{amount}</h2>
                <h2 className="transaction-title-heading">{amountType}</h2>
                <img 
                    src = {deleteImgUrl} 
                    alt="delete" 
                    className="transaction-delete-icon"
                    onClick={onDelete}
                />
            </div>
        </li>
    )

}



export default TransactionItem