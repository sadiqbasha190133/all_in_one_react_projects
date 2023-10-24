
import "./index.css"
const TabItem = (props) =>{
    const{tabDetails, onChangeTab, isActive} = props
    const{displayText, tabId} = tabDetails
    const style = isActive?'button-active':''
    const onChangeTabId = () =>(
        onChangeTab(tabId)
    )
    return(
        <li className = "lst-item"  onClick={onChangeTabId}>
            <button className={`button ${style}`}>{displayText}</button>
        </li>
    )
}
export default TabItem