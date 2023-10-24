

import { Component } from "react";
import "./index.css"

class EvenOdd extends Component{
    state = {count:0}
    randomIncrement = () =>{
        const randomNumber = Math.ceil(Math.random()*100)
        this.setState(() =>({count:randomNumber}))
    }
    
    
    render(){
        const{count} = this.state
        return(
            <div className="container">
                <h1 className="heading">Count is {count}</h1>
                {count%2===0?<h3>Count Even</h3>:<h3>Count Odd</h3>}
                <button className="button" onClick={this.randomIncrement}>Increment</button>
                <p>*Increments By a Random Number 0 to 100</p>
            </div>
        )
    }
}

export default EvenOdd