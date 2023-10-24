
import {Component} from "react";
import AppointmentItem from "../AppointmentItem";
import {v4 as uuidv4} from 'uuid'
import "./index.css"

const initialList = []

const initialList2 = []

class Appointment extends Component{

    state = {
        appointmentsList:initialList,
        copiedList:initialList2,
        newName:"",
        newDate:"",
        buttonStatus:false
    }

    onChangeName = (event)=>{
        this.setState({newName:event.target.value})
    }

    onChangeDate = (event)=>{
        this.setState({newDate:event.target.value})
    }

    onAddAppointment = (event) =>{
        event.preventDefault()
        const{newName, newDate} = this.state
        const newAppointment = {
            id:uuidv4(),
            name:newName,
            date:newDate,
            isStarred:false
        }
        this.setState((prevState)=>(
            {appointmentsList:[...prevState.appointmentsList, newAppointment],
                newName:"",
                newDate:""
            }
        ))
    }

    onChangeStarred = (id) =>{
        this.setState((prevState)=>(
            {appointmentsList:prevState.appointmentsList.map((eachAppointment)=>{
                if(id === eachAppointment.id){
                    return {...eachAppointment, isStarred:!eachAppointment.isStarred}
                }
                else{
                    return eachAppointment
                }
            })}
        ))
    }
   

    onStarredClicked = () =>{
        const {appointmentsList, buttonStatus, copiedList} = this.state
        if(!buttonStatus){
            const backupList = appointmentsList 
            const starredAppointmentsList = appointmentsList.filter((eachAppointment)=>(
                eachAppointment.isStarred === true
            ))
            this.setState({appointmentsList:starredAppointmentsList, 
                buttonStatus:!buttonStatus, copiedList:backupList})
        }
        else{
            this.setState({appointmentsList:copiedList, buttonStatus:!buttonStatus})
        }

    }


render(){
    const {appointmentsList, newName, newDate, buttonStatus} = this.state
    const buttonStyle = buttonStatus?"on-toggel-button":""
    return(
        <div className="main-container">
            <div className="inside-container">
                <div className="image-form-flex-container">
                    <form onSubmit={this.onAddAppointment}>
                        <h1 className="heading">Add Appointment</h1>
                        <h1 className="title">TITLE</h1>
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Title" 
                            onChange={this.onChangeName}
                            value = {newName}
                        />
                        <h1 className="title">DATE</h1>
                        <input 
                            type="date" 
                            className="date-input" 
                            onChange={this.onChangeDate}
                            value = {newDate}
                        /><br/>
                        <button type="submit" className="button">Add</button>
                    </form>
                    <img 
                        src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                        className="appointment-image"
                        alt = "appointment"
                    />
                </div>
                <hr className="horizontal"/>
                <div>
                    <div className="flex-container">
                        <h1 className="heading-2">Appointments</h1>
                        <button 
                            className={`button-2 ${buttonStyle}`} 
                            onClick={this.onStarredClicked}
                        >
                        Starred</button><br/>
                    </div>   
                    <ul className="appointments-container">
                        {appointmentsList.map((eachAppointment)=>(
                            <AppointmentItem 
                                key = {eachAppointment.key} 
                                details = {eachAppointment} 
                                onChangeStarred = {this.onChangeStarred}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

}

export default Appointment