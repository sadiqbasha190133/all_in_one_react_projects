
import './index.css'

const CardItem = (props) => {
    const {cardDetails} = props
    const {title, description, imgUrl, className} = cardDetails

    return(
        <li className = {`techCard ${className}`}>
            <div className='techCard-flex'>
                <h1 className = "techCard-title">{title}</h1>
                <p>{description}</p>
                <img src = {imgUrl} alt = "person_image" className='tech-image'/>
            </div>
        </li>
    )

}

export default CardItem