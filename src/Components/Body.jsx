import React ,{ useState,useEffect} from "react";
import Card from "./Card";
import Hotellist from "./Hotellist";
import "./Body.css";





function filterData(searchTxt,Hotel){

const filterData=Hotel.filter((Hotel)=>
Hotel.name.includes(searchTxt)
);
return filterData;
}
const Body=()=>{
// const searchTxt="KFC";
const[searchTxt,setsearchTxt]=useState("KFC");
const[Hotel,setHotel]=useState(Hotellist);
useEffect(()=>{
console.log("ATif");
  getHotels();
},[]);

async function getHotels()
{
  console.log("Danish");
  const data= await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&page_type=DESKTOP_WEB_LISTING"
  );
  console.log( "ATIF",data);

  const json= await data.json();
  setHotel(json?.data?.card[2]?.data?.data?.cards);
}
  return(
    <>
    <div className="search-container">
     
       <input type="text" className="searchinput" placeholder="search"  value={searchTxt}
       onChange={(e)=>{
        setsearchTxt(e.target.value);
       }}/>
       
<button className="search-btn" onClick={()=>{

// need to filter data
const data= filterData(searchTxt,Hotel);
setHotel(data);
// update the state-hotel varible
// filterData
}}>search</button>
    </div>
   <div className="Body-list">
    {
      Hotel.map((Hotel)=>{
        return <Card{...Hotel} key={Hotel.id}/>;
      })
      
      /* <Card {...Hotellist[0]}/> */}
    {/* <Card {...Hotellist[1]}/> */}
    {/* // <Card name={Hotellist[2].name} cuisines={Hotellist[2].cuisines}/> */}
    {/* // <Card name={Hotellist[3].name} cuisines={Hotellist[3].cuisines}/>    <Card name={Hotellist[5].name} cuisines={Hotellist[5].cuisines}/> */}
    {/* // <Card name={Hotellist[6].name} cuisines={Hotellist[6].cuisines}/> */}
    {/* // <Card name={Hotellist[7].name} cuisines={Hotellist[7].cuisines}/> */}
    {/* // <Card name={Hotellist[8].name} cuisines={Hotellist[8].cuisines}/> */}
    {/* // <Card name={Hotellist[9].name} cuisines={Hotellist[9].cuisines}/> */}
    {/* // <Card={Hotellist[10].name} cuisines={Hotellist[10].cuisine */}
    
    


   </div>
   </>
  );
}
export default Body;