
import "./index.css"
const Navbar = (props) =>{
    const {userScore, userTopScore, hideScores} = props
    const hideResult = hideScores?"hide-scores":""
    const brandLeftFlex = hideResult?"flex-brand-left-container":""
    return(
        <div className={`navbar-container ${brandLeftFlex}`}>
            <div className="navbar-brand-flex-container">
                <img 
                    src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" 
                    alt="game-brand"
                    className="brand-image"
                />  
                <h2 className="navbar-headings">Emoji Game</h2>
            </div>
            <div className={`navbar-score-flex-container ${hideResult}`}>
                <h2 className="navbar-headings">Score {userScore}</h2>
                <h2 className="navbar-headings">Top Score: {userTopScore}</h2>
            </div>
        </div>
    )
}

export default Navbar