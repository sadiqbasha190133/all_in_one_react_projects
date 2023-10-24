
import { Component } from "react"
import "./index.css"

class ShowHide extends Component{
    state = {status:true, firstName: "Sadiq", lastName: "Basha", show:"display-name-container", show2:"display-name-container"}
    firstNameDisplay = () =>{
        const {status} = this.state
        if(status === true){
            this.setState(() => ({status:false, show:"display-name-container"}))
        }
        else{
            this.setState(() => ({status:true, show:"display-name-container content-hide"}))
        }
        
    }

    secondNameDisplay = () =>{
        const {status} = this.state
        if(status === true){
            this.setState(() => ({status:false, show2:"display-name-container"}))
        }
        else{
            this.setState(() => ({status:true, show2:"display-name-container content-hide"}))
        }
        
    }

    render(){
        const {firstName, lastName, show, show2} = this.state
        return(
            <div className="container">
                <h1 className="heading">Show/Hide</h1>
                <div className="flex-container">
                    <div className="container-center">
                        <button className="button" onClick={this.firstNameDisplay}>show/hide first name</button>
                        <div className={show}>
                            <h1 className="heading-2">{firstName}</h1>
                        </div>
                    </div>

                    <div className="container-center">
                        <button className="button" onClick={this.secondNameDisplay}>show/hide last name</button>
                        <div className={show2}>
                            <h1 className="heading-2">{lastName}</h1>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


export default ShowHide