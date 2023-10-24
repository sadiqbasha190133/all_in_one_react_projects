

import { Component } from "react";
import "./index.css"

class SpeedoMeter extends Component{
    state = {speed:200}
    onSpeedIncrease = () =>{
        const {speed} = this.state
        if(speed >= 0 && speed < 200){
            this.setState((prevState) => ({speed:prevState.speed+10}))
        }
    }
    onSpeedDecrease = () =>{
        const {speed} = this.state
        if(speed > 0 && speed <= 200){
            this.setState((prevState) => ({speed:prevState.speed-10}))
        }
    }

    render(){
        const {speed} = this.state
        return(
            <div className="container">
                <h1 className="heading">SPEEDOMETER</h1>
                <img src = "https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt = "" className="image"/>
                <h2 className="heading size">Speed is <span>{speed}</span>mph</h2>
                <p className="description">Min speed limit is 0mph.Max speed limit is 200mph</p>
                <div>
                    <button onClick={this.onSpeedIncrease} className="button">Accelerate</button>
                    <button onClick={this.onSpeedDecrease} className="button button-color">Apply Break</button>
                </div>
            </div>
        )
    }
}

export default SpeedoMeter