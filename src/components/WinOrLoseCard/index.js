
import "./index.css"
import Navbar from "../Navbar"
const WinOrLoseCard = (props) =>{
    const {gameResult, score, playAgain} = props
    const imgUrl = gameResult?"https://assets.ccbp.in/frontend/react-js/won-game-img.png":"https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
    const imgAltName = gameResult?"Won":"Lose"
    const onPlay = ()=>(
        playAgain()
    )
    return(
        <div>
           <Navbar hideScores = {true} />
           <div className="aligning2">

           
            <div className="winOrlose-container">
                <img src = {imgUrl}
                className="image-size"
                alt={imgAltName}/>
                <h1 className="result-heading">You {imgAltName}</h1>
                <p className="score">Your Score</p>
                <h1 className="actual-score">{score}/12</h1>
                <button className="button" onClick={onPlay}>Play Again</button>
            </div>
            </div>
        </div>
    )
}

export default WinOrLoseCard