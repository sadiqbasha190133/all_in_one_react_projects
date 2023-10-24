
import "./index.css"
    const EmojiCard = (props) =>{
    const {emojiCardDetails, onClickEmoji} = props
    const{emojiName, emojiUrl, id} = emojiCardDetails
    const onClicked = () =>(
        onClickEmoji(id)
    )
    return(
        <li className="emojiCard" onClick={onClicked}>
            <img 
                src = {emojiUrl} 
                alt={emojiName}
                className="emoji-size"
            />
        </li>
    )
}
export default EmojiCard