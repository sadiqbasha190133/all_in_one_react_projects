

import { Component } from "react";
import "./index.css"

class Login extends Component{
    state = {isLoggedIn:true, status:"Login"}
    buttonLogin = () =>{
        const {isLoggedIn} = this.state
        if(isLoggedIn === true){
            this.setState(() => ({isLoggedIn:false, status:"Logout"}))
        }
        else{
            this.setState(() => ({isLoggedIn:true, status:"Login"}))
        }
        
    }
    render(){
        const {status, isLoggedIn} = this.state
        return(
            <div className="container">
                {isLoggedIn?<h1 className="heading">Please Login</h1>:<h1 className="heading">Welcome User</h1>}
                <button className="button-2" onClick={this.buttonLogin}>{status}</button>
            </div>
            
            
        )
    }
}


export default Login

