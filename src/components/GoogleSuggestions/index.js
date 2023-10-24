
import {Component} from "react";
import "./index.css"
import SuggestionItems from "../SuggestionItems";

const initialSuggestionsList = [
    {
        id:1,
        string:"Salaar movie postpone"
    },
    {
        id:2,
        string:"ICC world cup"
    },
    {
        id:3,
        string:"about Naa Anveshana"
    },
    {
        id:4,
        string:"Do prabhas wont marry"
    },
    {
        id:5,
        string:"In which year does recession ends"
    },
    {
        id:6,
        string:"How to learn coding without learning"
    },
    {
        id:7,
        string:"Upcoming technologies in the next year"
    },
    {
        id:8,
        string:"Where can i find peace"
    }
]

class GoogleSuggestions extends Component{
    state = {
        searchInput:"",
        suggestionsList:initialSuggestionsList,
    }

    onClickArrow = (string) =>(
        this.setState({searchInput:string})
    )

    onChangeInput = (event) =>(
        this.setState({searchInput:event.target.value})
    )

    render(){
        const{searchInput, suggestionsList} = this.state
        const filteredList = suggestionsList.filter((eachItem) =>(
            eachItem.string.toLowerCase().includes(searchInput.toLowerCase())
        ))
        
        return(
          
            <div className="container">
                <img src = "https://assets.ccbp.in/frontend/react-js/google-logo.png" alt = "google logo" className="google-logo-size"/>
                <div className="suggestions-card">
                    <div className="container-2">
                        <img src = "https://assets.ccbp.in/frontend/react-js/google-search-icon.png" className="search-icon" alt = "search-icon"/>
                        <input type = "search" placeholder="search here" className="search-input" onChange={this.onChangeInput} value = {searchInput}/>
                    </div>
                    <div>
                        {filteredList.map((eachItem) =>(
                            <SuggestionItems eachItem = {eachItem} key = {eachItem.id} onArrow = {this.onClickArrow}/>
                        ))}
                    </div>
                </div>
            </div>
            
        )

    }
}

export default GoogleSuggestions