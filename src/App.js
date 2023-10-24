// import logo from './logo.svg';
// import './App.css';

// const { Component } = require("react");


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.Hello saadiq welcome to react world..!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }





// import { Component } from "react"
// import UserProfile from "./components/UserProfile"
// import './App.css'

// const initialUserDetailsList = [
//     {
//       uniqueKey:1,
//       name:"sadiq",
//       imgUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
//       role:"Developer"  
//     },
//     {
//       uniqueKey:2,
//       name:"udaya",
//       imgUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
//       role:"Cloud Engineer"  
//     },
//     {
//       uniqueKey:3,
//       name:"krishna",
//       imgUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
//       role:"Universe Engineer"  
//     },
//     {
//       uniqueKey:4,
//       name:"thomas",
//       imgUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
//       role:"Nothing"  
//     }

// ]

// class App extends Component{

//   state = {
//     searchInput:'',
//     userDetailsList:initialUserDetailsList
//   }

//   userInputChange = event =>{
//     this.setState({searchInput:event.target.value})
//   }

//   onDeleteUser = (uniqueKey) =>{
//     const { userDetailsList } = this.state
//     const filteredUserDatalist = userDetailsList.filter(
//       eachUser => eachUser.uniqueKey !== uniqueKey
//     )
//     this.setState({userDetailsList:filteredUserDatalist})
//   }

//   render(){
//     const{searchInput, userDetailsList} = this.state
//     const searchResults = userDetailsList.filter((eachUser) => eachUser.name.includes(searchInput))
//     return(
//       <div className="display-container">
//         <h1 className="title">User`s List</h1>
//         <input type = "search" onChange={this.userInputChange} value = {searchInput}/>
//           <ul>
//               {
//                 searchResults.map((eachItem) =>(
//                 <UserProfile userDetails = {eachItem} key = {eachItem.uniqueKey} onDeleteUser = {this.onDeleteUser}/>
//                 ))
//               }
//           </ul>
//       </div>
//     )
//   }

// }

// export default App

// const App = () => (

//   <div className="display-container">
//     <h1 className="title">User`s List</h1>
//     <ul>
//         {
//           userDetailsList.map((eachItem) =>(
//            <UserProfile userDetails = {eachItem} key = {eachItem.uniqueKey}/>
//           ))
//         }
//     </ul>
//   </div>

// )


// export default App;

// import CardItem from "./components/TechCards"
// import './App.css'

// const cardsList = [
//   {
//     id:1,
//     title:"Data Scientist",
//     description:"A data scientist uses data to understand and explain the phenomena around them, and help organizations make better decisions",
//     imgUrl:"https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
//     className:"techCard-border-orange"
//   },
//   {
//     id:2,
//     title:"Cloud Computing",
//     description:"A data scientist uses data to understand and explain the phenomena around them, and help organizations make better decisions",
//     imgUrl:"https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
//     className:"techCard-border-green"
//   },
//   {
//     id:3,
//     title:"Hacker",
//     description:"A data scientist uses data to understand and explain the phenomena around them, and help organizations make better decisions",
//     imgUrl:"https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
//     className:"techCard-border-red"
//   },
//   {
//     id:4,
//     title:"Block Chain",
//     description:"A data scientist uses data to understand and explain the phenomena around them, and help organizations make better decisions",
//     imgUrl:"https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
//     className:"techCard-border-blue"
//   }
// ]

// const App = () => (
//   <div className="display-container">
//       <h1 className='title'>Learn Populor Languages</h1>
//       <p className='page-description'>Industry 4.0 can be defined as the integration of intelligent digital technologies into manufacturing and industrial processes.
//         It encompasses a set of technologies that include industrial IoT networks, AI, Big Data, robotics, and automation.</p>
//       <ul className='tech-display-container'>
//         {
//           cardsList.map((eachItem) =>(
//             <CardItem key = {eachItem.id} cardDetails = {eachItem}/>
//           ))
//         }
       
//       </ul>
//   </div>
// )
// export default App;




// import Counter from './components/Counter'

// const App = () =>{
//   return <Counter />
// }

// export default App



// import ClickCounter from "./components/ClickCounter"

// const App = () =>{
//   return(
//     <ClickCounter />
//   )
// }

// import SpeedoMeter from "./components/SpeedoMeter"

// const App = () =>{
//   return <SpeedoMeter />
// }

// export default App




// import Welcome from "./components/Welcome"

// const App = ()=>{
//   return(
//       <Welcome />
//   )
// }

// export default App





// import UserMode from "./components/UserMode"

// const App = () =>{
//   return(
//     <UserMode />
//   )
// }

// export default App



// import ShowHide from "./components/ShowHide"
// const App = () =>{
//   return(
//     <ShowHide />
//   )
// }

// export default App


// import EvenOdd from "./components/EvenOddApp"
// const App = () => {
//   return(
//     <EvenOdd />
//   )
// }

// export default App


// import Login from "./components/Login"
// const App = () =>{
//   return(
//     <Login />
//   )
// }

// export default App


// import CartoonSearch from "./components/CartoonSearch"
// const App = () =>{
//   return(
//     <CartoonSearch />
//   )
// }

// export default App

// import SimpleTodo from "./components/SimpleTodo"
// const App = () =>{
//   return(
//     <SimpleTodo />
//   )
// }

// export default App


// import CashWithDrawal from "./components/CashWithDrawal"
// const App = () =>{
//   return <CashWithDrawal />
// }

// export default App



// import GoogleSuggestions from "./components/GoogleSuggestions"
// const App = () =>{
//   return <GoogleSuggestions />
// }
// export default App



// import LettersCalculator from "./components/LettersCalculator"
// const App = () =>(
//   <LettersCalculator/>
// )
// export default App


// import {Component} from "react";
// import Feedback from "./components/Feedback"
// import  "./components/Feedback/index.css"
// const resources = [
//   {
//     emojis:[
//       {
//         id:1,
//         name:"Sad",
//         imgUrl:"https://www.pngmart.com/files/23/Sad-Face-Emoji-PNG-Photo.png"
//       },
//       {
//         id:2,
//         name:"None",
//         imgUrl:"https://emojiisland.com/cdn/shop/products/Neutral_Emoji_icon_9f1cc93a-f984-4b6c-896e-d24a643e4c28_large.png?v=1571606091"
//       },
//       {
//         id:3,
//         name:"Happy",
//         imgUrl:"https://w7.pngwing.com/pngs/528/425/png-transparent-smile-emoji-happy-happiness-happy-face-yellow-smiling-message-social-networks-whatsapp.png"
//       }

//     ]
//   },
//   {
//     loveEmojiUrl:"https://i.pinimg.com/736x/5b/48/3f/5b483f2bce11ef92931595af512103d2.jpg"
//   }
// ]
//   class App extends Component {

//     state = {
//       isClicked:true,
//       style1:"hide-content",
//       style2:""
//     }

//     onClickChange = () =>{
//       if(this.state.isClicked){
//         console.log("s i am in")
//         return this.setState({isClicked:false, style2:"hide-content", style1:""})
//       }
//       else{
//         return this.setState({isClicked:true, style2:"", style1:"hide-content"})
//       }
       
    
//     }

//   render(){
//   const emojiObject = resources[0]
//   const emojiObject2 = resources[1]
//   const{loveEmojiUrl} = emojiObject2
//   const{emojis} = emojiObject
//   const{style1, style2} = this.state
//   return(
//     <div className="bg-container">
//       <div className="bg-container-2">
//         <div className={style2}>
//           <h1 className="heading-text">How satisfied are you with our customer support service</h1>
//           <ul className="bg-container-3">
//             {emojis.map((eachEmoji)=>(
//               <Feedback key = {eachEmoji.id} emojiDetails = {eachEmoji} onClicked = {this.onClickChange}/>
//             ))}
//           </ul>
//         </div>
//         <div className={style1}>
//           <div className="heart-container">
//               <img src = {loveEmojiUrl} alt = "heart-emoji" className="emoji-size" onClick={this.onClickChange}/>
//               <h1 className="heading-text">Thank You!</h1>
//               <p className="description-text">We will use your feedback to increase our customer support</p>
//           </div>
           
//           </div>
//       </div>
//     </div>
//   )

//  }
// }

//  export default App



// import Gallery from "./components/Gallery"

// const App = () =>(
//   <Gallery />
// )

// export default App


// import { Component } from "react"
// import "./components/Capitals/index.css"
// import Capital from "./components/Capitals"

// const countryAndCapitalList = [
//   {
//     id:1,
//     country:"Bhaarat",
//     capital:"Delhi"
//   },
//   {
//     id:2,
//     country:"Japan",
//     capital:"Tokyo"
//   },
//   {
//     id:3,
//     country:"China",
//     capital:"Beijing"
//   },
//   {
//     id:4,
//     country:"Australia",
//     capital:"Canberra"
//   },
//   {
//     id:5,
//     country:"Canada",
//     capital:"Ottawa"
//   },
//   {
//     id:6,
//     country:"US",
//     capital:"Washington D.C"
//   },
//   {
//     id:7,
//     country:"Columbia ",
//     capital:"Bogota"
//   }

// ]

// class App extends Component{
//     state = {
//      countryName:countryAndCapitalList[0].country
//     }

//     onFindCountry = (event) =>{
//       const foundCountryName = countryAndCapitalList.filter((eachObject)=>(
//         eachObject.capital === event.target.value
//       ))
//       const [objectDetails] = foundCountryName
//       const{country} = objectDetails
//       this.setState({countryName:country})
//     }

//     render(){
//       const{countryName} = this.state
//       return(
//         <div className="container">
//           <div className="container-2">
//             <h1 className="heading-text">Capitals And Country</h1>
//             <div className="container-3">
//               <select className="option-style" onChange={this.onFindCountry}>
//                 {countryAndCapitalList.map((eachObject) =>(
//                   <Capital details = {eachObject} key = {eachObject.id}/>
//                 ))}
//               </select>
//               <h2 className="heading-text2">is capital of which country?</h2>
//             </div>
//             <h1 className="heading-text">{countryName}</h1>

//           </div>
//         </div>
//       )
//     }
// }

// export default App

// import AppStore from "./components/AppStore"

// const App = () =>(
//   <AppStore/>
// )
// export default App




// import CoinToss from "./components/CoinToss"
// const App = () =>(
//   <CoinToss/>
// )

// export default App



// import ContactApp from "./components/Contacts"
// const App = () =>(
//   <ContactApp/>
// )

// export default App



// import Comments from "./components/Comments"
// const App = () =>(
//   <Comments/>
// )
// export default App



// import Appointment from "./components/Appointment"
// const App = () =>(
//   <Appointment/>
// )

// export default App



// import MoneyManager from "./components/MoneyManager"
// const App = () =>(
//   <MoneyManager/>
// )

// export default App




import EmojiGame from "./components/EmojiGame"

const App = () => (
  <EmojiGame/>
)
export default App


// import {Component} from 'react'
// import Clock from './components/Clock'

// import './App.css'

// class App extends Component {
//   state = {
//     showClock: false
//   }
//   onToggleClock = () => {
//     this.setState( prevState => {
//       const { showClock } = prevState
//       return {
//         showClock: !showClock
//       }
//     })
//   }
//   render() {
//     const { showClock } = this.state
//     return (
//       <div className="app-container">
//         <button onClick={ this.onToggleClock } type="button" className="toggle-button">
//           {!showClock ? 'Show Clock' : 'Hide Clock'}
//         </button>
//         {showClock && <Clock />}
//       </div>
//     )
//   }
// }

// export default App


