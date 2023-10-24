
import "./index.css"

const Thumbnailitem = (props) =>{
    const{objectDetails, isActive, onChangeActiveImage} = props
    console.log(isActive)
    const{imgUrl, thumbnailAltName, imgAltName} = objectDetails
    const style = isActive ? 'active-image':''
    const changeActiveImage = () =>(
        onChangeActiveImage(imgAltName)
    )
    return(
        <li className="lst-item">
            <img src = {imgUrl} 
                className = {`thumbnail-image-size ${style}`} 
                alt = {thumbnailAltName}
                onClick={changeActiveImage}
            />
        </li>
    )
}

export default Thumbnailitem