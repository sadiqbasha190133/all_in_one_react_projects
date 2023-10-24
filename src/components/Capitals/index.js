
import "./index.css"
const Capital = (props) =>{
    const{details} = props
    const{capital} = details
    return(
        <option>
            {capital}
        </option>
    )
}

export default Capital