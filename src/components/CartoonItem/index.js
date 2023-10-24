





import "./index.css"

const CartoonItem = (props) =>{
    const {cartoonDetails} = props
    const {cartoonName, imgUrl} = cartoonDetails
    return(
        <li className="cartoon-items-container">
            <img src = {imgUrl} alt = "cartoon" className="picture-size"/>
            <h3 className="cartoon-title">{cartoonName}</h3>
        </li>
    )
}

export default CartoonItem

