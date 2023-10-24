

import { Component } from "react";
import "./index.css"

class UserMode extends Component{

    state = {status:true, value:"Dark Mode", heading:"heading-2", containerBg:"container-2", btn:"button"}
    modeChange = () =>{
        const {status} = this.state
        if(status === true){
            this.setState((present) => ({status:false, value:"Light Mode", heading:"heading-2 h-color",
            containerBg:"container-2 c2-color", btn:"button b-color"}))
        }
        else{
            this.setState((present) => ({status:true, value:"Dark Mode", heading:"heading-2",
            containerBg:"container-2", btn:"button"}))
        }
    }

    render(){
        const {value, heading, containerBg, btn} = this.state
        return(
            <div className="container">
                <div className={containerBg}>
                    <h1 className={heading}>Click to change User mode</h1>
                    <button className={btn} onClick={this.modeChange}>{value}</button>
                </div>
            </div>
        )
    }
}

export default UserMode