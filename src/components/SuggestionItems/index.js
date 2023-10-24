
import "./index.css"
const SuggestionItems = (props) =>{
    const{eachItem, onArrow} = props
    const{string} = eachItem
    const change = () =>{
        return onArrow(string)
    }
    return(
        <div className="suggestion-container">
            <h1 className="suggestion-text">{string}</h1>
            <button className="button" onClick={change}><img src = "https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" className="arrow-icon" alt = "arrow-icon"/></button>
        </div>
    )
}

export default SuggestionItems