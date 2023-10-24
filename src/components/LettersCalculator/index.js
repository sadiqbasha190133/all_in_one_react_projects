

import { Component } from "react";
import "./index.css"
class LettersCalculator extends Component{
    state = {
        givenInput:""
    }
    onChangeInput = (event) =>(
        this.setState({givenInput:event.target.value})
    )
    render(){
        const{givenInput} = this.state
        return(
            <div className="bg-container">
                <img src = "https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" className="image" alt = "calculate-logo"/>
                <div className="ordering">
                    <h1 className="title-text">Calculate the Letters you Enter:</h1>
                    <p className="description">Enter the phase:</p>
                    <input type="text" placeholder="text here" className="input-text" onChange={this.onChangeInput}/>
                    <div className="result-container">
                        <h2 className="result-text">No.of Letters: {givenInput.length}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default LettersCalculator