import React from "react";
import { BrowserRouter, Route, Routes,Link,NavLink } from "react-router-dom";
import Home from "../components/Home";
import LikedPhoto from "./LikedPhoto";

class NanBar extends  React.Component{
    render(){
        return (
            <nav id="main-nav">
                <div className="wrapper">
                <Link to="/" id="logo">Spacestagram</Link>
                <div className="right">
                <NavLink to = "/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 25"><path className="icon" d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/></svg>
                </NavLink>
                <NavLink to = "/likes">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="icon" d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
                </NavLink>
               
                </div>
                </div>
            </nav>
        );
    }
}

export default NanBar;