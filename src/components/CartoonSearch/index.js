

import { Component } from "react";
import CartoonItem from "../CartoonItem";
import "./index.css"

const initialCartoonList = [
  {
    cartoonName:"Motu Patlu",
    imgUrl:"https://m.media-amazon.com/images/I/71zpLued29L.jpg",
    id:1
  },
  {
    cartoonName:"Dragon Booster",
    imgUrl:"https://m.media-amazon.com/images/S/pv-target-images/b13e720252d209349f1f18ad9604c5fcb5ead19bfcb323487e12e6ecc2cbfe42.jpg",
    id:3
  },
  {
    cartoonName:"Master Raindrop",
    imgUrl:"https://e1.pxfuel.com/desktop-wallpaper/181/322/desktop-wallpaper-prime-video-master-raindrop-master-raindrop.jpg",
    id:4
  },
  {
    cartoonName:"Oggy and the cockroaches",
    imgUrl:"https://wallpapercave.com/wp/wp2089464.jpg",
    id:5
  },
  {
    cartoonName:"Bayblade",
    imgUrl:"https://wallpaperset.com/w/full/7/8/3/474141.jpg",
    id:6
  },
  {
    cartoonName:"Ben 10",
    imgUrl:"https://cdn.wallpapersafari.com/75/47/SlJUKI.jpg",
    id:7
  },
  {
    cartoonName:"ShinChan",
    imgUrl:"https://wallpaperaccess.com/full/3188916.jpg",
    id:8
  },
  {
    cartoonName:"Little Krishna",
    imgUrl:"https://wallpapercave.com/wp/wp6473988.jpg",
    id:9
  },
  {
    cartoonName:"Chotta Bheem",
    imgUrl:"https://i.pinimg.com/originals/bb/d4/a2/bbd4a261646d04b9c401ae0da3b59475.jpg",
    id:10
  },
  {
    cartoonName:"Krishna Aur Balraam",
    imgUrl:"https://www.greengold.tv/assets/show/Krishna.jpg",
    id:11
  },
  {
    cartoonName:"Chotta Bheem",
    imgUrl:"https://wallpapercave.com/wp/wp6473988.jpg",
    id:12
  },
  {
    cartoonName:"Tom & Jerry",
    imgUrl:"https://wallpapers.com/images/hd/tom-and-jerry-pictures-2qo6el27bq295eqy.jpg",
    id:13
  }
]

class CartoonSearch extends Component{
  state = {
    searchInput:"", 
    cartoonList:initialCartoonList
  }

  onSearchInputChange = (event) =>(
    this.setState({searchInput:event.target.value})
  )
  
  render(){
    const {searchInput, cartoonList} = this.state
    const searchResults = cartoonList.filter((eachCartoon) =>{
        
        return eachCartoon.cartoonName.toLowerCase().includes(searchInput.toLowerCase())
  })
    return(
        <div className="container">
            <div className="container-alignment">
                <h1 className="title">Cartoon Search</h1>
                <div className="search-bar-container">
                    <input type="search" placeholder="search here" className="input-text" onChange={this.onSearchInputChange}/>
                    <img src = "https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt = "search" className="search-icon"/>
                </div>
            </div>
            <ul className="cartoon-items-align">
                {searchResults.map((eachCartoon)=>(
                    <CartoonItem cartoonDetails = {eachCartoon} key = {eachCartoon.id}/>
                ))}
            </ul>
        </div>
    )
  }
  
}

export default CartoonSearch