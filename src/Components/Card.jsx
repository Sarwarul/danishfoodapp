import React from "react";
import "./Card.css"


const Card=({Hotellist})=>{
    const{name}=Hotellist;
    console.log( "ATIF",Hotellist);
    return(
      <div className="card ">
        <img  className="cardimg" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg"/>
        <h1>{name}</h1>
        
      </div>
    );
}
export default Card;