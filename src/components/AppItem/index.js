
import "./index.css"
const AppItem = (props) => {
    const{projectDetails} = props
    const{imgUrl, appName} = projectDetails
    return(
        <li className="project-lst-item">
            <img src = {imgUrl} alt = {appName} className="project-image-size"/>
            <h3 className="project-item-text">{appName}</h3>
        </li>
    )
}

export default AppItem