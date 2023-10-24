
import "./index.css"

const Feedback = (props) =>{
    const {emojiDetails, onClicked} = props
    const{name, imgUrl} = emojiDetails
    const onGivenFeedback = () =>{
        return onClicked()
    }
    return(
        <li className="lstItem">
            <img src = {imgUrl} alt = "emoji" className="emoji-size" onClick={onGivenFeedback}/>
            <p>{name}</p>
        </li>
    )
}

export default Feedback