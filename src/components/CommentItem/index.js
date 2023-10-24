
import "./index.css"
import {formatDistanceToNow} from "date-fns";

const CommentItem = (props) =>{
    const {commentDetails, onLikeChanged, onDeleteComment} = props
    const {name, comment, isLiked, id, date, newDpColor, alphabet} = commentDetails
    const imgUrl = isLiked?"https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png":"https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
    const imgAltName = isLiked?"Liked":"Like"

    const onLiked = () =>{
        return onLikeChanged(id)
    }

    const onDelete = () =>(
        onDeleteComment(id)
    )
    return(
        <li className="list-style">
            <div className="comment-item-flex-container1">
                <div className="profile-container" style={{backgroundColor:newDpColor}}>
                    <h1 className="alphabet">{alphabet}</h1>
                </div>
                <div>
                    <div className="name-date-flex-container">
                        <h1 className="commenter-name">{name}</h1>
                        <h1 className="date">{formatDistanceToNow(date)+" ago"}</h1>
                    </div>
                    
                    <p className="comment-made">{comment}</p>
                </div>
            </div>
            <div className="comment-item-flex-container2">
                <img 
                    src = {imgUrl} 
                    alt = {imgAltName} 
                    className="like-delete-image"
                    onClick={onLiked}
                />
                <img 
                    src = "https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" 
                    alt = "delete" 
                    className="like-delete-image"
                    onClick={onDelete}
                />
            </div>
        </li>
    )
}

export default CommentItem