import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import NasaPhoto from "./NasaPhoto";
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './Styles';
const today = new Date();
function travelBack(days){
    let pastdate = new Date(today);
    pastdate.setDate(pastdate.getDate()-days);
    return pastdate;
}

let initalgallery = [...Array(6).keys()].map((e)=>{
    return <NasaPhoto photodate={travelBack(e)} />;
});

console.log(initalgallery);
export default function Home(){
    const [num,setNum] = useState(6);
    const [start,setStart] = useState(6);
    const [gallery,setGallery] = useState([...initalgallery]);
    const [visible, setVisible] = useState(false)
   console.log(gallery);
  
   const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
    
    function getGallerys(){
       
       let n = start;
       let newgallery = gallery;
        while (n<=num+start){
            newgallery.push(<NasaPhoto photodate={travelBack(n)} />)
            n++;
        }
       setGallery(newgallery);
    }
    function LoadMore(){
        setStart(start+num+1);
        getGallerys();
    }
    useEffect(() => {
        // Update the document title using the browser API
      // LoadMore();
      });
    return (
        <div className="home">
            <h1>Home</h1>
             <div id="gallery">
                 <div className="col">
                     {gallery.filter((e,i)=>{return i%2==0})}
                 </div>
                 <div className="col">
                 {gallery.filter((e,i)=>{return i%2!=0})}
                 </div>
            
            </div>
            <Button>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
            <button onClick={()=>LoadMore()} id="loadmore">More</button>
        </div>
    );
}