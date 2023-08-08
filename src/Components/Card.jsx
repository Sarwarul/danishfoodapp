import React from "react";
import "./Card.css"


const Card=({name,cuisines,rating,Price,img})=>{
    // const{name,cuisines,rating,Price,img}=Hotel;
  
    return(
      <div className="card ">
        <img  className="cardimg" src={img}/>
        <h1>{name}</h1>
        <h2>{cuisines}</h2>
        <h2>{Price}</h2>
        <h2>{rating} star</h2>
      </div>
    );
}
export default Card;