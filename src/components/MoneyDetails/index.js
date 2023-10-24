
import "./index.css"
const MoneyDetails = (props) =>{
    const {details} = props
    const {titleName, bgColor, imgUrl, altName, amount} = details
    return(
        <li className="list-container" style={{backgroundColor:bgColor}}>
            <div className="list-flex-container">
                <img src = {imgUrl} alt={altName} className="image-size"/>
                <div>
                    <p className="list-card-description">{titleName}</p>
                    <h1 className="list-card-heading">{`RS ${amount}`}</h1>
                </div>
            </div>
        </li> 
    )
}

export default MoneyDetails