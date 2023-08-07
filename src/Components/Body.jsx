import React from "react";
import Card from "./Card";
import Hotellist from "./Hotellist";
import "./Body.css";
const Body=()=>{
    console.log("Body",Hotellist);
  return(
   <div className="Body-list">
    <Card Hotellist={Hotellist[0].name}/>
    
    <Card/>
    <Card/>
    <Card/>
   </div>
  );
}
export default Body;