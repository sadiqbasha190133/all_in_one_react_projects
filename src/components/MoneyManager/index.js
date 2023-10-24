

import {Component} from "react"
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from "../MoneyDetails"
import TransactionItem from "../TransactionItem"
import "./index.css"

const inititalMoneyDetailsList = [
    {
        id:uuidv4(),
        imgUrl:"https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png",
        titleName:"Your Balance",
        amount:0,
        bgColor:"#ecfccb",
        altName:"Balance",

    },
    {
        id:uuidv4(),
        imgUrl:"https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png",
        titleName:"Your Income",
        amount:0,
        bgColor:" #cffafe",
        altName:"Income"
    },
    {
        id:uuidv4(),
        imgUrl:"https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png ",
        titleName:"Your Expenses",
        amount:0,
        bgColor:"#ede9fe",
        altName:"Expenses"
    }
]



const initialTransactionsHistoryList = [
    // {
    //     id:uuidv4(),
    //     title:"Salary",
    //     amount:"50000",
    //     type:"Income",
    //     deleteImgUrl:"https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
    // },
    // {
    //     id:uuidv4(),
    //     title:"Car Loan",
    //     amount:"10000",
    //     type:"Expemse",
    //     deleteImgUrl:"https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
    // }
]

class MoneyManager extends Component{

    state = {
        income:0,
        balance:0,
        expenses:0,
        title:"",
        type:"",
        amountEntered:0,
        transactionsHistoryList:initialTransactionsHistoryList,
        moneyDetailsList:inititalMoneyDetailsList

    }

    onChangeTitle = (event) =>{
        this.setState({title:event.target.value})
    }

    onChangeType = (event) =>{
        this.setState({type:event.target.value})
    }

    onChangeAmount = (event) =>{
        const enteredAmount = parseFloat(event.target.value)
        this.setState({amountEntered:enteredAmount})
    }

    onAddTransaction = (event) =>{
        event.preventDefault()

        const updatedMoneyDetails = (presentIncome, presentBalance, presentExpenses) =>{
            console.log("s i am in money details function")
        const newUpdatedMoneyDetailsList = [
                {
                    id:uuidv4(),
                    imgUrl:"https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png",
                    titleName:"Your Balance",
                    amount:presentBalance,
                    bgColor:"#ecfccb",
                    altName:"Balance",
            
                },
                {
                    id:uuidv4(),
                    imgUrl:"https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png",
                    titleName:"Your Income",
                    amount:presentIncome,
                    bgColor:" #cffafe",
                    altName:"Income"
                },
                {
                    id:uuidv4(),
                    imgUrl:"https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png ",
                    titleName:"Your Expenses",
                    amount:presentExpenses,
                    bgColor:"#ede9fe",
                    altName:"Expenses"
                }
            ]
            this.setState(
                {moneyDetailsList:newUpdatedMoneyDetailsList}
            )
        }

       const{amountEntered, income, expenses, type, title} = this.state
       console.log(type)
       if(type === "income"){
        console.log("i am in income condition")
        const presentIncome = amountEntered+income 
        const presentBalance = presentIncome-expenses
        const presentExpenses = presentIncome-presentBalance
        updatedMoneyDetails(presentIncome, presentBalance, presentExpenses)
        this.setState({income:presentIncome, balance:presentBalance, expenses:presentExpenses,
            amountEntered:"", title:"", type:""})

       }
       else{
        console.log("yep i am in expenses condition")
        const presentExpenses = expenses + amountEntered
        const presentIncome = income
        const presentBalance = income - presentExpenses
        updatedMoneyDetails(presentIncome, presentBalance, presentExpenses)
        this.setState({income:presentIncome, expenses:presentExpenses, balance:presentBalance,
            amountEntered:"", title:"", type:""})
       }

       const newTransaction = {
            id: uuidv4(),
            usedFor:title,
            amountType:type,
            amount:amountEntered,
            deleteImgUrl:"https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
       }
       this.setState((prevState)=>(
        {transactionsHistoryList:[...prevState.transactionsHistoryList, newTransaction]}
       ))
          
    }

    onDeleteTransactionHistory = (id) =>{
        const {transactionsHistoryList} = this.state
        const updatedtransacHistoryList = transactionsHistoryList.filter((eachTransaction)=>(
            eachTransaction.id !== id
        ))
        this.setState({transactionsHistoryList:updatedtransacHistoryList})
    }

    render(){
        const {transactionsHistoryList, moneyDetailsList, amountEntered, title} = this.state
        return(
            <div className = "main-container">
                <div className="title-container">
                    <h1 className="title-card-heading">Hi, Sadiq</h1>
                    <p className="title-card-description">Welcome back to your <span className="title-card-span-text">Money Manager</span></p>
                </div>
                <ul className="details-flex-container">
                    {moneyDetailsList.map((eachContainer)=>(
                        <MoneyDetails key = {eachContainer.id} details = {eachContainer}/>
                    ))}
                </ul>
                
                <form className="form-container" onSubmit={this.onAddTransaction}>
                    <h1 className="form-card-heading">Add Transaction</h1>
                    <h2 className="form-card-title">TITLE</h2>
                    <input 
                        type="text" 
                        placeholder="TITLE" 
                        className="form-input-size" 
                        onChange={this.onChangeTitle}
                        value={title}
                    />
                    <h2 className="form-card-title">AMOUNT</h2>
                    <input 
                        type = "text" 
                        placeholder="AMOUNT" 
                        className="form-input-size" 
                        onChange = {this.onChangeAmount}
                        value={amountEntered}
                    />
                    <h2 className="form-card-title">TYPE</h2>
                    <select 
                        className="form-select-input-size" 
                        onChange = {this.onChangeType} 
                        value={this.state.type}
                    >
                        <option value = "income">Income</option>
                        <option value= "expenses">Expenses</option>
                    </select>
                    <br/>
                    <button type="submit" className="form-button">Add</button>
                </form>
                
                <ul className="history-container">
                    <h1 className="form-card-heading">History</h1>
                    <li className="history-titles-box">
                        <div className="history-titles-flex">
                            <h2 className="history-title-heading">Title</h2>
                            <h2 className="history-title-heading">Amount</h2>
                            <h2 className="history-title-heading">Type</h2>
                        </div>
                    </li>
                    {transactionsHistoryList.map((eachTransaction)=>(
                        <TransactionItem 
                            key = {eachTransaction.id} 
                            details = {eachTransaction}
                            onDeleteTransactionHistory = {this.onDeleteTransactionHistory}
                        />
                    ))}
                </ul>

            </div>
        )
    }

}

export default MoneyManager
