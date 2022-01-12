import React, { useState, useEffect } from "react";
import HttpClient from "../HttpClient";
import ServiceWorker from "../serviceWorker";
const apiKey = process.env.REACT_APP_NASA_KEY;
console.log(apiKey);

export default function NasaPhoto(props) {
  const [photoData, setPhotoData] = useState(null);
  const [liked, setLiked] = useState(false);
  console.log(props);
 //console.log(props);
 function handleLiked(){
   console.log(liked);
   if(liked){
     new ServiceWorker().unLike(photoData.date);
   }else{
    new ServiceWorker().addLiked(photoData.date);
   }
   console.log(new ServiceWorker().LikedPhoto);


 }
  useEffect(() => {
    /*fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
                // we'll update the KEYHERE soon!
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
        {
            credentials: "same-origin",
            headers: {Accept: 'application/json', 'Content-Type': 'application/json',},
        }
      );
      const data = await res.json();
      setPhotoData(data);
    }*/
    HttpClient.getApod(props.photodate).then(mydata=>{
      console.log("data"+mydata);
        setPhotoData(mydata);

        setLiked(new ServiceWorker().LikedPhoto.includes(mydata.date));
       
    })
}, []);

if (!photoData) return <div>Loading</div>;

  return (
    
    <div className="nasa-photo">
        
        <img
          src={photoData.url}
          alt={photoData.title}
          className="photo"
        />
      <div>
        <div className="info">
      <h2>{photoData.title} - {photoData.date}</h2>
       
        <p className="explaination">{photoData.explanation}</p>
     
      <div className="useraction">
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 45 45"><path 
      onClick = {(e)=>{setLiked(!liked);
      handleLiked()}} className={`heart ${liked ? "fill":""}`} stroke="black" d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
<a class="twitter-share-button"
  href={`https://twitter.com/intent/tweet?text=${photoData.title}&url=${photoData.url}`} data-size="large" target="_blank">
Tweet</a>

      </div>
      </div>
      </div>
    </div>
  );
}