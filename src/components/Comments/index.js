

import { Component } from "react";
import {v4 as uuidv4} from 'uuid'
import "./index.css"
import CommentItem from "../CommentItem";


const initialCommentsList = []

class Comments extends Component{

    state = {
        commentsList:initialCommentsList,
        newName:"",
        newComment:"",
        count:0
    }

    onChangeName = (event) =>(
        this.setState({newName:event.target.value})
    )

    onChangeComment = event =>(
        this.setState({newComment:event.target.value})
    )

    onAddComment = (event) =>{
        event.preventDefault()
        const {newName, newComment} = this.state
        const initialLetter = newName[0].toUpperCase()
        const dpColors = ["red", "green", "yellow", "blue", "black", "#34ebdb", "#b734eb", "#eb34d8", "#eb3458", "#eb8f34"]
        const number = Math.floor(Math.random()*dpColors.length)
        const newAddComment = {
            id:uuidv4(),
            name:newName,
            comment:newComment,
            isLiked:false,
            date:new Date(),
            newDpColor:dpColors[number],
            alphabet:initialLetter
        }

        this.setState((prevState)=>(
            {commentsList:[...prevState.commentsList, newAddComment], count:prevState.count+1,
                newName:"",
                newComment:""
            }
        ))
    }
    
    onLikeChanged = (id) =>{
        this.setState((prevState)=>(
            {commentsList:prevState.commentsList.map((eachComment)=>{
                if(id === eachComment.id){
                    return {...eachComment, isLiked:!eachComment.isLiked}
                }
                else{
                    return eachComment
                }
            })}
        ))
    }

    onDeleteComment = id =>{
        const {commentsList} = this.state
        const updatedList = commentsList.filter(eachComment=>(
            eachComment.id !== id
        ))

        this.setState((prevState)=>(
            {commentsList:updatedList, count:prevState.count-1}
        ))
    }

    render(){
        const{commentsList, newName, newComment, count} = this.state
        return(
            <div className="container">
                <h1 className="heading">Comments</h1>
                <div className="flex-container">
                    <div className="container2">
                        <img 
                            src = "https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" 
                            alt = "people" 
                            className="image-size"
                        />
                    </div>
                    
                    <div className="container1">
                        <p className="description-lines">Say Something about 4.0 technologies</p>
                        <form onSubmit={this.onAddComment}>
                            <input 
                                value={newName}
                                placeholder="Your Name" 
                                className="input-text"
                                onChange={this.onChangeName}
                            /><br/>
                            <textarea 
                                value={newComment}
                                rows={10} cols={20} 
                                placeholder="Your Comment" 
                                className="text-field"
                                onChange={this.onChangeComment}
                            >
                            </textarea>
                            <br/>
                            <button 
                                type="submit" 
                                className="button"
                            >
                                Add Comment
                            </button>
                        </form>
                    </div>
                </div>

            <div className="flex-container2">
                <div className="comments-count">
                    <p className="count-number">{count}</p>
                </div>
                <p className="count-text">Comments</p>
            </div> 
            
            <ul className="list-container">
                {commentsList.map((eachComment) =>(
                    <CommentItem 
                        key = {eachComment.id} 
                        commentDetails = {eachComment} 
                        onLikeChanged = {this.onLikeChanged}
                        onDeleteComment = {this.onDeleteComment}
                    />
                ))}
            </ul>

            </div>
        )
    }
}

export default Comments