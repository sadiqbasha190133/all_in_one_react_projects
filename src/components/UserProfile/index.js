

import './index.css'

const UserProfile = (props) =>{

    const {userDetails, onDeleteUser} = props
    const {imgUrl, name, role, uniqueKey} = userDetails
    const onDelete = () =>{
        onDeleteUser(uniqueKey)
    }
    return(
        <li className='user-card-container'>
            <img src = {imgUrl} className='avatar' alt = "person_image"/>
            <div className='user-details-container'>
                <h1 className='user-name'>{name}</h1>
                <p className='user-designation'>{role}</p>
            </div>
            <button type = "button" className='delete-button' onClick={onDelete}>
                <img src = "https://assets.ccbp.in/frontend/react-js/cross-img.png" alt = "cross" className='delete-icon'/>
            </button>
        </li>
    )
}


export default UserProfile


