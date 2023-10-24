
import { Component } from "react"
import "./index.css"

class Welcome extends Component{
    state = { status: true , result:"subscribe"}

   renderAuthButton = () => {
    const {status} = this.state
    if(status === true){
        this.setState((prevState) => ({status:false, result:"subscribed"}))
    }
    else{
        this.setState((prevState) => ({status:true, result:"subscribe"}))
    }
    
  }

    render(){
        const {result} = this.state
        return(
            <div className="container">
                <h1 className="heading">Welcome</h1>
                <h3 className="heading-2">Thank you Happy Learning!</h3>
                <button onClick={this.renderAuthButton} className="button">{result}</button>
            </div>
        )
    }
}

export default Welcome