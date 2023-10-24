

import { Component } from "react";
import "./index.css"
import TodoItem from "../TodoItem";
const initialTodoList = [
    {
        id:1,
        string:"Learn AI"
    },
    {
        id:2,
        string:"Do exercise"
    },
    {
        id:3,
        string:"Freshup"
    },
    {
        id:4,
        string:"Do Yoga"
    },
    {
        id:5,
        string:"Climb Trees"
    },
    {
        id:6,
        string:"Practice Coding"
    }
]

class SimpleTodo extends Component{
    state = {
        todoList:initialTodoList
    }

    onDeleteItem = (id) =>{
        const {todoList} = this.state
        const filteredTodoList = todoList.filter((eachTodo) =>(
            eachTodo.id !== id
        ))
        this.setState({todoList:filteredTodoList})
        }
    render(){
        const {todoList} = this.state
        return(
            <div className="container">
                <ul className="container-2">
                    <h1 className="heading">Simple Todos</h1>
                    {todoList.map((eachTodo) =>(
                        <TodoItem uniqueKey = {eachTodo.id} todoDetails = {eachTodo} onDeleteItem = {this.onDeleteItem}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SimpleTodo