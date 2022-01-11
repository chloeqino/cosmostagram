import React, { useState, useEffect } from "react";
import HttpClient from "../HttpClient";
const apiKey = process.env.REACT_APP_NASA_KEY;
console.log(apiKey);
export default function NasaPhoto(props) {
  const [photoData, setPhotoData] = useState(null);
  const [liked, setLiked] = useState(false);
 console.log(props);
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
    HttpClient.getApod(dateFormatter(props.photodate)).then(mydata=>{
        setPhotoData(mydata);
        console.log("data"+mydata);
    })
}, []);
function dateFormatter(dateObject){
    let datestring = dateObject.getDate();
    let yearstring = dateObject.getFullYear();
    let monthstring = dateObject.getMonth()+1;
    return yearstring+"-"+monthstring+"-"+datestring;
}
if (!photoData) return <div>empty</div>;

  return (
    <div className="nasa-photo">
        <h1>{photoData.title}</h1>
        <img
          src={photoData.url}
          alt={photoData.title}
          className="photo"
        />
      <div>
        
        <p className="date">{photoData.date}</p>
        <p className="explanation">{photoData.explanation}</p>
      </div>
      <div className="useraction">
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 45 45"><path onClick = {(e)=>{setLiked(!liked)}} className={`heart ${liked ? "fill":""}`} stroke="black" d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
      </div>
    </div>
  );
}