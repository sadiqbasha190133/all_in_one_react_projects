

import { Component } from "react";
import "./index.css"
class Counter extends Component{
    state = {count:0}
    onIncrement = () => {
        this.setState((prevState) => ({count: prevState.count + 1 }))
        
      }
    onDecrement = ()=>{
        this.setState((prevState) => ({count:prevState.count-1}))
    }
    render(){
        const {count} = this.state
        return(
            <div className="container">
                <h1 className="counter-heading">Counter</h1>
                <h2 className="counter-value">{count}</h2>
                <div>
                    <button onClick={this.onIncrement} className="button">Increment</button>
                    <button onClick={this.onDecrement} className="button">Decrement</button>
                </div>
            </div>
        )
    }
}

export default Counter