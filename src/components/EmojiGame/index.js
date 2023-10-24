
import {Component} from "react"
import {v4 as uuidv4} from 'uuid'
import Navbar from "../Navbar"
import "./index.css"
import EmojiCard from "../EmojiCard"
import WinOrLoseCard from "../WinOrLoseCard"
const initialEmojiList = [
    {
        id:uuidv4(),
        emojiName:"emoji1",
        emojiUrl:"https://cdn.pixabay.com/photo/2020/12/27/20/24/smile-5865208_1280.png",
        isClicked:false
    },
    {
        id:uuidv4(),
        emojiName:"emoji2",
        emojiUrl:"https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Happy_large.png?v=1571606093",
        isClicked:false
    },
    {
        id:uuidv4(),
        emojiName:"emoji3",
        emojiUrl:"https://cdn.pixabay.com/photo/2020/12/27/20/25/smile-5865209_640.png",
        isClicked:false
    },
    {
        id:uuidv4(),
        emojiName:"emoji4",
        emojiUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhu9F98qIjnOcjOxmlw3Lj5KSrsa6R9YsnuA&usqp=CAU",
        isClicked:false
    },
    {
        id:uuidv4(),
        emojiName:"emoji5",
        emojiUrl:"https://www.i2symbol.com/pictures/emojis/d/e/c/7/dec71f1888f42c9f92c55889564d64ab.png",
        isClicked:false
    },
    {
        id:uuidv4(),
        emojiName:"emoji6",
        emojiUrl:"https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/smiling-face.png",
        isClicked:false
    },
    {
        id:uuidv4(),
        emojiName:"emoji7",
        emojiUrl:"https://st2.depositphotos.com/3287005/8930/v/450/depositphotos_89303062-stock-illustration-smile-in-love-emoticon.jpg",
        isClicked:false
    },
    {
        id:uuidv4(),
        emojiName:"emoji8",
        emojiUrl:"https://i.pinimg.com/474x/c1/dc/42/c1dc42a15bb6611410acedc8a0716a1a.jpg",
        isClicked:false
    },
    {
        id:uuidv4(),
        emojiName:"emoji9",
        emojiUrl:"https://png.pngtree.com/png-vector/20210913/ourmid/pngtree-d-realistic-female-emoji-modern-smiley-emoticon-happy-face-chat-icon-png-image_3925818.jpg",
        isClicked:false
    },
    {
        id:uuidv4(),
        emojiName:"emoji100",
        emojiUrl:"https://images.pngnice.com/download/2102/Happy-Emoji-Transparent-PNG.png",
        isClicked:false
    },
    {
        id:uuidv4(),
        emojiName:"emoji11",
        emojiUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlgLs6P_a1ukQGbdobr6lTtJ4_eS_9jCk-2Q&usqp=CAU",
        isClicked:false
    },
    {
        id:uuidv4(),
        emojiName:"emoji12",
        emojiUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0nSCweC4A9bHk4zpQqOYUScMjydb7ijT5MQ&usqp=CAU",
        isClicked:false
    }
]

class EmojiGame extends Component{
    
    state = {
        score:0,
        topScore:0,
        emojisList:initialEmojiList,
        gameContinues:true,
        gameResult:false
    }

    shuffleEmojis = (emojisList) =>{
        for(let i = emojisList.length-1; i>0;i--){
            const j = Math.floor(Math.random()*(i+1));
            [emojisList[i], emojisList[j]] = [emojisList[j], emojisList[i]];
        }
        return emojisList
    }

    onClickEmoji = (id) =>{
        const{emojisList, score} = this.state
        let f = 0
        if(score !== 12){
            emojisList.forEach((eachObject)=>{
                if(eachObject.id === id && !eachObject.isClicked){
                    f += 1
                    if(score+1 === 12){
                        this.setState((prevState)=>(
                            {
                                gameResult:true, gameContinues:false,
                                score:prevState.score+1
                            }
                        ))
                    }
                    else{
                    this.setState((prevState)=>(
                        {emojisList:prevState.emojisList.map((eachObject)=>{
                            if(eachObject.id === id){
                                return {...eachObject, isClicked:true}
                            }
                            else{
                                return eachObject
                            }
                        }), score:prevState.score+1}
                    ))
                    }
                }
            })
        }
        else{
            this.setState((prevState)=>(
                {gameResult:true, gameContinues:false, score:0}
            ))
        }
        
        
        if(f===0){
            this.setState((prevState)=>(
                {gameContinues:false}
            ))
        }
    }

    onPlayAgain = () =>{
        const {topScore, score} = this.state
        console.log(topScore, score)
        if(score>=topScore){
            this.setState((prevState)=>(
                {topScore:prevState.score, 
                gameContinues:true, 
                gameResult:false, 
                score:0,
                emojisList:initialEmojiList
            }
            ))
        }
        else{
            this.setState({gameContinues:true, 
                gameResult:false, 
                score:0,
                emojisList:initialEmojiList
            })
        }
    }

    render(){
        const{emojisList, score, gameContinues, topScore, gameResult} = this.state
        const shuffleedEmojisList = this.shuffleEmojis(emojisList)
        const style1 = gameContinues?"":"hide-container"
        const style2 = gameContinues?"hide-container":""
        return(
            <div className="main-container">
                <div className={style1}>
                    <Navbar userScore = {score} userTopScore = {topScore}/>
                    <div className="aligning">

                    
                        <ul className="emoji-cards-flex-container">
                            {shuffleedEmojisList.map((eachEmoji)=>(
                                <EmojiCard 
                                    key={eachEmoji.id} 
                                    emojiCardDetails = {eachEmoji} 
                                    onClickEmoji = {this.onClickEmoji}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={style2}>
                    <WinOrLoseCard 
                        gameResult = {gameResult} 
                        score = {score}
                        playAgain = {this.onPlayAgain}
                    />
                </div>
            </div>
        )
    }
}

export default EmojiGame