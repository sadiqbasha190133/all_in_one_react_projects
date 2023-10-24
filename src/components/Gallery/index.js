

import {Component} from "react";
import Thumbnailitem from "../ThumbnailItem";
import "./index.css"

const initialImageList = [
    {
        id:1,
        imgUrl:"https://w0.peakpx.com/wallpaper/340/137/HD-wallpaper-nature-birds-ultra-animals-birds-nature.jpg",
        thumbnailUrl:"https://w0.peakpx.com/wallpaper/340/137/HD-wallpaper-nature-birds-ultra-animals-birds-nature.jpg",
        imgAltName:"nature1",
        thumbnailAltName:"nature1"
    },
    {
        id:2,
        imgUrl:"https://e0.pxfuel.com/wallpapers/607/925/desktop-wallpaper-bird-zosterops-pink-flowers-twigs-birds.jpg",
        thumbnailUrl:"https://e0.pxfuel.com/wallpapers/607/925/desktop-wallpaper-bird-zosterops-pink-flowers-twigs-birds.jpg",
        imgAltName:"nature2",
        thumbnailAltName:"nature2"
    },
    {
        id:3,
        imgUrl:"https://rare-gallery.com/uploads/posts/1158898-painting-birds-baby-animals-duck-rabbits-beak-chickens-bird-fauna-vertebrate.jpg",
        thumbnailUrl:"https://rare-gallery.com/uploads/posts/1158898-painting-birds-baby-animals-duck-rabbits-beak-chickens-bird-fauna-vertebrate.jpg",
        imgAltName:"nature3",
        thumbnailAltName:"nature3"
    },
    {
        id:4,
        imgUrl:"https://wallpapers.com/images/hd/most-beautiful-animals-1dmrrpn71zcqf3sp.jpg",
        thumbnailUrl:"https://wallpapers.com/images/hd/most-beautiful-animals-1dmrrpn71zcqf3sp.jpg",
        imgAltName:"nature4",
        thumbnailAltName:"nature4"
    },
    {
        id:5,
        imgUrl:"https://w0.peakpx.com/wallpaper/486/259/HD-wallpaper-amazing-harmony-fantasy-nature-zebra-lion-animal.jpg",
        thumbnailUrl:"https://w0.peakpx.com/wallpaper/486/259/HD-wallpaper-amazing-harmony-fantasy-nature-zebra-lion-animal.jpg",
        imgAltName:"nature5",
        thumbnailAltName:"nature5"
    },
    {
        id:6,
        imgUrl:"https://wallpapercave.com/wp/wp9277410.jpg",
        thumbnailUrl:"https://wallpapercave.com/wp/wp9277410.jpg",
        imgAltName:"nature6",
        thumbnailAltName:"nature6"
    },
    {
        id:7,
        imgUrl:"https://wallpapercrafter.com/sizes/2560x1440/52461-giraffe-animals-hd-nature-sunset-forest-trees-4k-hd-sky-birds-rhinoceros-rhino.jpg",
        thumbnailUrl:"https://wallpapercrafter.com/sizes/2560x1440/52461-giraffe-animals-hd-nature-sunset-forest-trees-4k-hd-sky-birds-rhinoceros-rhino.jpg",
        imgAltName:"nature7",
        thumbnailAltName:"nature7"
    },
    {
        id:8,
        imgUrl:"https://getwallpapers.com/wallpaper/full/5/a/1/151812.jpg",
        thumbnailUrl:"https://getwallpapers.com/wallpaper/full/5/a/1/151812.jpg",
        imgAltName:"nature8",
        thumbnailAltName:"nature8"
    },
    {
        id:9,
        imgUrl:"https://wallpapercave.com/wp/wp9277426.jpg",
        thumbnailUrl:"https://wallpapercave.com/wp/wp9277426.jpg",
        imgAltName:"nature9",
        thumbnailAltName:"nature9"
    },
    {
        id:10,
        imgUrl:"https://c4.wallpaperflare.com/wallpaper/625/699/709/nature-animals-panda-bears-1920x1080-animals-bears-hd-art-wallpaper-preview.jpg",
        thumbnailUrl:"https://c4.wallpaperflare.com/wallpaper/625/699/709/nature-animals-panda-bears-1920x1080-animals-bears-hd-art-wallpaper-preview.jpg",
        imgAltName:"nature10",
        thumbnailAltName:"nature10"
    }
]

class Gallery extends Component{
    state = {
        activeImageAltName:initialImageList[0].imgAltName
    }

    onChangeActiveImage = (imgAltName) =>(
        this.setState({activeImageAltName:imgAltName})
    )

    getFilteredImage = () =>{
        const{activeImageAltName} = this.state
        const imageArray = initialImageList.filter((eachImage) =>(
            eachImage.imgAltName === activeImageAltName
            
        ))
        return imageArray
    }
    render(){
        const{activeImageAltName} = this.state
        const imageObjectFilter = this.getFilteredImage()
        const [imageObject] = imageObjectFilter
        const{imgUrl, imgAltName} = imageObject
        return(
            <div className="bg-container"> 
                <img src = {imgUrl} alt = {imgAltName} className="image-size"/>
                <h1>Nature Photography</h1>
                <p>Nature Photography by Sadiq</p>
                <ul className="thumbnail-container">
                    {initialImageList.map((eachObject)=>(
                        <Thumbnailitem 
                            key = {eachObject.id} 
                            objectDetails = {eachObject} 
                            isActive = {activeImageAltName===eachObject.imgAltName}
                            onChangeActiveImage = {this.onChangeActiveImage}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Gallery