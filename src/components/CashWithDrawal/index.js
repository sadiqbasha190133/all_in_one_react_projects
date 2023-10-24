

import { Component } from "react";
import DenominationItem from "../DenominationItem";
import "./index.css"

const denominationList = [
    {
        id:1,
        value:50
    },
    {
        id:2,
        value:100
    },
    {
        id:3,
        value:200
    },
    {
        id:4,
        value:500
    }

]


class CashWithDrawal extends Component{
    
    state = {
        value:2000
    }

    onCashDebit = (depositingValue) =>{
        this.setState((previousValue) =>(
            {value:previousValue.value-depositingValue}
        ))
    }

    render(){
        const {value} = this.state
        return(
            <div className="container">
                <div className="profile-container">
                    <div className="container-profile"></div>
                    <h1 className="user-heading">Alberto Delrio</h1>
                </div>
                <div className="profile-container">
                    <h1 className="text">Your Balance</h1>
                    <h1 className="value">{value}</h1>
                </div>
                <div>
                    <h1 className="value">WithDraw</h1>
                    <h2 className="text">{`CHOOSE SUM (IN RUPEES)`}</h2>
                    <ul className="buttons-container">
                        {denominationList.map((eachAmount) =>(
                            <DenominationItem key = {eachAmount.id} object = {eachAmount} onCashDebit = {this.onCashDebit}/>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
export default CashWithDrawal