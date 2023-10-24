
import "./index.css"
const TodoItem = (props) =>{
    const {todoDetails, onDeleteItem} = props
    const {string, id} = todoDetails
    const onDelete = () =>(
        onDeleteItem(id)
    )

    return(
        <li className="todo-item-container">
            <h1 className="head-string">{string}</h1>
            <button className="button" onClick={onDelete}>Delete</button>
        </li>
    )
}

export default TodoItem