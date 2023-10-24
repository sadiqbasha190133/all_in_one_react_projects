

import { Component } from "react";
import "./index.css"

class CoinToss extends Component{
    state = {
        heads:0,
        tails:0,
        tossResulted:0
    }

    onUpdateTails = () =>(
        this.setState((prevState) =>(
            {tails:prevState.tails+1}
        ))
    )

    onUpdateHeads = () =>(
        this.setState((prevState) =>(
            {heads:prevState.heads+1}
        ))
    )

    onUpdateTossResult = (tossResult) =>(
        this.setState({tossResulted:tossResult})
    )
   


    render(){

        const getTossResult = () =>{
            const tossResult = Math.floor(Math.random()*2)
            if(tossResult===0){ 
                this.onUpdateHeads()
            }
            else{
                this.onUpdateTails()
            }
            console.log(tossResult)
            this.onUpdateTossResult(tossResult)
            
        }

        const {tossResulted, heads, tails} = this.state
        const imgUrl = tossResulted>0?"https://assets.ccbp.in/frontend/react-js/tails-img.png":"https://assets.ccbp.in/frontend/react-js/heads-img.png"
        const imgAltName = tossResulted===0?"Head":"Tail"
        
        return(
            <div className="bg-container">
                <div className="bg-container-2">
                    <h1 className="title">Coin Toss</h1>
                    <p className="description-text">{`Heads (or) Tails`}</p>
                    <img src = {imgUrl} alt = {imgAltName} className="image-size"/>
                    <button className="button" onClick={getTossResult}>Toss Coin</button>
                    <div className="result-container">
                        <p className="result-text">Total:{heads+tails}</p>
                        <p className="result-text">Heads:{heads}</p>
                        <p className="result-text">Tails:{tails}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoinToss

