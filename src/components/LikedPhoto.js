import React from "react";
import ServiceWorker from "../serviceWorker";
import NanBar from "./NavBar";
import NasaPhoto from "./NasaPhoto";
import { Link } from "react-router-dom";

class LikedPhoto extends React.Component{
    gallery = [];
    constructor(props){
        super(props);
        this.gallery = new ServiceWorker().LikedPhoto.map((e)=>{
            return <NasaPhoto photodate={e} />;
        })
    }
    render(){
        return (<div className="container">
            
            <div className="wrapper">
                <div id="totallikes"><strong>{this.gallery.length}</strong> Likes</div>
            <div id="gallery">
                 <div className="col">
                     {this.gallery.filter((e,i)=>{return i%2==0})}
                 </div>
                 <div className="col">
                 {this.gallery.filter((e,i)=>{return i%2!=0})}
                 </div>
            
            </div>
            <div id="explore">
                You have reached the end :)<br />
                Go back to the <Link to="/">home page</Link> to find out more amazing photos of the space!
            </div>
            </div>
        </div>);
    }
}

export default LikedPhoto;