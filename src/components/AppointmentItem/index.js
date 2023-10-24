
import "./index.css"
// import {format} from 'date-fns'
const AppointmentItem = (props) =>{
    const {details, onChangeStarred} = props
    const {name, date, id, isStarred} = details
    const imgUrl = isStarred?"https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png":"https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
    const altName = isStarred?"Star":"Starred"
    const onStar = () =>(
        onChangeStarred(id)
    )

    return(
        <li className="list-item">
            <div className="flex-container-titleDate">
                <h1 className="heading-name">{name}</h1>
                <p className="appointment-givenDate">{date}</p>
            </div>
            <img 
                src = {imgUrl}
                alt = {altName} 
                className="image" 
                onClick={onStar}
            />
        </li>
    )
}

export default AppointmentItem