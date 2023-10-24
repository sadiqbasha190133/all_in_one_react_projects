
import {Component} from "react";
import "./index.css"
import TabItem from "../TabItem";
import AppItem from "../AppItem";

const tabsList = [
    {
        tabId:"SOCIALMEDIA",
        displayText:"SocialMedia"
    },
    {
        tabId:"GAMES",
        displayText:"Games"
    },
    {
        tabId:"NEWS",
        displayText:"News"
    },
    {
        tabId:"SHOPPING",
        displayText:"Shopping"
    }
]

const appsList = [
    {
        id:1,
        appName:"Messanger",
        imgUrl:"https://blog.hootsuite.com/wp-content/uploads/2021/05/all-apps-5.png",
        category:"SOCIALMEDIA"
    },
    {
        id:2,
        appName:"Telegram",
        imgUrl:"https://www.seekpng.com/png/small/769-7695808_telegram-app-icon-logos-of-social-media-apps.png",
        category:"SOCIALMEDIA"
    },
    {
        id:3,
        appName:"Snapchat",
        imgUrl:"https://www.91-cdn.com/hub/wp-content/uploads/2022/08/snapchat.png?tr=q-100",
        category:"SOCIALMEDIA"
    },
    {
        id:4,
        appName:"Pinterest",
        imgUrl:"https://image.pngaaa.com/11/928011-middle.png",
        category:"SOCIALMEDIA"
    },
    {
        id:5,
        appName:"Youtube",
        imgUrl:"https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=2000",
        category:"SOCIALMEDIA"
    },
    {
        id:6,
        appName:"Whatsapp",
        imgUrl:"https://img.freepik.com/premium-vector/whatsapp-icon-concept_23-2147900930.jpg",
        category:"SOCIALMEDIA"
    },
    {
        id:7,
        appName:"X",
        imgUrl:"https://www.freepnglogos.com/x-logo-twitter-transparent-logo-download-3.png",
        category:"SOCIALMEDIA"
    },
    {
        id:8,
        appName:"Medium",
        imgUrl:"https://cdn.icon-icons.com/icons2/3041/PNG/512/medium_logo_icon_189223.png",
        category:"SOCIALMEDIA"
    },
    {
        id:9,
        appName:"Meta",
        imgUrl:"https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_640.png",
        category:"SOCIALMEDIA"
    },
    {
        id:10,
        appName:"Candy Crush",
        imgUrl:"https://i.pinimg.com/564x/a3/44/2a/a3442aba4e17d13fa948dca86717cb72.jpg",
        category:"GAMES"
    },
    {
        id:11,
        appName:"Lords Mobile",
        imgUrl:"https://play-lh.googleusercontent.com/oFz-KTIgL6yAuuA5XeHapTQLDcoBVgA9JXCTiID70rPcJBGAT9DdiqNDjNLxcYaG6W3W",
        category:"GAMES"
    },
    {
        id:12,
        appName:"Free Fire",
        imgUrl:"https://cdn6.aptoide.com/imgs/4/8/3/483528c77a19be6735661c5f68a749ea_icon.png",
        category:"GAMES"
    },
    {
        id:13,
        appName:"Subway",
        imgUrl:"https://cdn6.aptoide.com/imgs/4/8/3/483528c77a19be6735661c5f68a749ea_icon.png",
        category:"GAMES"
    },
    {
        id:14,
        appName:"Temple Run",
        imgUrl:"https://play-lh.googleusercontent.com/onlNBInQHIZtB2rY24BwrEsUUKwE753ao1BAvvhOw2ePEN1IHIUjaR3gvlGd3jyKTdg=w240-h480-rw",
        category:"GAMES"
    },
    {
        id:15,
        appName:"Angry Birds",
        imgUrl:"https://www.freeiconspng.com/uploads/angry-birds-png-images-free-download-1.png",
        category:"GAMES"
    },
    {
        id:16,
        appName:"Clash of Clains",
        imgUrl:"https://play-lh.googleusercontent.com/LByrur1mTmPeNr0ljI-uAUcct1rzmTve5Esau1SwoAzjBXQUby6uHIfHbF9TAT51mgHm",
        category:"GAMES"
    },
    {
        id:17,
        appName:"Manuganu",
        imgUrl:"https://play-lh.googleusercontent.com/Aft7l-o4KmMm7kRrr9KrrwWCBo23opPWFf3XkDPotpmUb8k43O6l0xrYNv2yhpovUTY",
        category:"GAMES"
    },
    {
        id:18,
        appName:"Wion",
        imgUrl:"https://cdn6.aptoide.com/imgs/1/d/3/1d3a614a43d425d64aae3131f06c0cf9_fgraphic.png",
        category:"NEWS"
    },
    {
        id:19,
        appName:"Inshorts",
        imgUrl:"https://play-lh.googleusercontent.com/lvAGNNFIBMC3ZgS-JJcSwDzpSjOGMg7FGY14FrffJobLOed9-H2DiuZwknsIwVwKwTjo",
        category:"NEWS"
    },
    {
        id:20,
        appName:"Way-2-News",
        imgUrl:"https://play-lh.googleusercontent.com/TMgAy1tFxIGlGTnriTKWIJBQKihcPfFS5i17Dd-1Cg04HAHeso3algcXT1kkKQ3Mu_Q=w240-h480-rw",
        category:"NEWS"
    },
    {
        id:21,
        appName:"Daily Hunt",
        imgUrl:"https://play-lh.googleusercontent.com/hob_fdd8pV3AI8K2rv49MumzgdqmBcYW8BfuquYzGtFpsDu-JabZmvZhxm8oNNIX3bg",
        category:"NEWS"
    },
    {
        id:22,
        appName:"The Hindu",
        imgUrl:"https://play-lh.googleusercontent.com/VX_eSbWBRAKQTfbv6xVEWijJVNT07YmiB_fi2t4OsbQWQu9vzmGDHoO2kc46igNZPyc",
        category:"NEWS"
    },
    {
        id:23,
        appName:"Google News",
        imgUrl:"https://cdn-icons-png.flaticon.com/512/2702/2702605.png",
        category:"NEWS"
    },
    {
        id:24,
        appName:"Times Of India",
        imgUrl:"https://play-lh.googleusercontent.com/AS0Z1xkuhveb3IXzYASn52nhlFDIwcEmu1XmewVDZ39R8fZrQ13wldCy2nbjx9Aa1WCS",
        category:"NEWS"
    },
    {
        id:25,
        appName:"New York Time",
        imgUrl:"https://theme.zdassets.com/theme_assets/968999/d8a347b41db1ddee634e2d67d08798c102ef09ac.jpg",
        category:"NEWS"
    },
    {
        id:26,
        appName:"Ajio",
        imgUrl:"https://play-lh.googleusercontent.com/ODwuO86g8lbgiWbhRLclRnEstD0WAhlXYW9Me2rY2huXr7H0NYMAKUtwami7uyREN9Q",
        category:"SHOPPING"
    },
    {
        id:27,
        appName:"Amazon",
        imgUrl:"https://play-lh.googleusercontent.com/39mlAbEyC7FSqeQTR11pD1wg9g9PMRPm_lBT9ICyLHlA_jocBcivywfdSDwWOOUZzw",
        category:"SHOPPING"
    },
    {
        id:28,
        appName:"Flipkart",
        imgUrl:"https://iconpusher.com/images/icons/2733/7.48.png",
        category:"SHOPPING"
    },
    {
        id:29,
        appName:"Meesho",
        imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Meesho_Logo_Full.png/480px-Meesho_Logo_Full.png",
        category:"SHOPPING"
    },
    {
        id:30,
        appName:"Zepto",
        imgUrl:"https://play-lh.googleusercontent.com/6vbFCfoCaXTaGmBFHVyh4oTSlxgsD17Kxw7bxt7OZKPfrm8E-D9aUVIcHruBoXWCcno",
        category:"SHOPPING"
    },
    {
        id:31,
        appName:"Shopsy",
        imgUrl:"https://play-lh.googleusercontent.com/Ornb14bIU5LtffQy9wwf1bjPP27s7sLG9VyXE5mJyf4Hy585RZcOTERMd93Apjunjzw",
        category:"SHOPPING"
    },
    {
        id:32,
        appName:"Jio Mart",
        imgUrl:"https://play-lh.googleusercontent.com/pCGXVpuh8vhXVA_zuqmh9WKSucOYWtuHDnw7gNb5H5Y3VPB1umHOEiCIuhELruPQfw",
        category:"SHOPPING"
    },

]

class AppStore extends Component{
    state = {
        activeTabId:tabsList[0].tabId,
        searchInput:""
    }


    getListOnSearch = (event) =>(
        this.setState({searchInput:event.target.value})
    )

    onChangeTab = (tabId) =>{
        const getActiveTabId = tabsList.filter((eachTab) =>(
            eachTab.tabId === tabId
        ))
        const[tabObject] = getActiveTabId
        this.setState({activeTabId:tabObject.tabId})
    }
        
    getFilteredList = () =>{
        const{activeTabId} = this.state
        const filteredList = appsList.filter((eachProject)=>(
            eachProject.category === activeTabId
        ))
        return filteredList
    }
    render(){
        const{activeTabId, searchInput} = this.state
        const activeTabListProjects = this.getFilteredList()
        const onSearchList = activeTabListProjects.filter((eachObject) =>(
            eachObject.appName.toLowerCase().includes(searchInput.toLowerCase())
        ))
        return(
            <div className="bg-container">
                <h1 className="title-text">App Store</h1>
                <div className="search-bar-container">
                    <input 
                        type="search" 
                        placeholder="search here" 
                        className="search-input" 
                        onChange={this.getListOnSearch}
                    />
                    <img src = "https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png" 
                        alt = "search=icon"
                        className="search-icon-size"
                    />
                </div>
                <div className="project-items-align">
                    <ul className="tab-lst-continer-1">
                        {tabsList.map((eachTab) =>(
                            <TabItem 
                                key = {eachTab.tabId}
                                tabDetails = {eachTab} 
                                onChangeTab = {this.onChangeTab}
                                isActive = {eachTab.tabId === activeTabId}
                            />
                        ))}
                    </ul>
                </div>
                <div className="project-items-align">
                    <ul className="tab-lst-continer-2">
                        {onSearchList.map((eachProject)=>(
                            <AppItem key = {eachProject.id} projectDetails = {eachProject}/>
                        ))}
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default AppStore
