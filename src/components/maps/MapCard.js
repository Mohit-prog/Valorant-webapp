import React from 'react'
import { Link } from "react-router-dom";
const MapCard = (props) => {
    console.log(props);
   
       
    return(
        <>
           <div className="displaycard" >
         
    <Link to={"/maps/"+props?.map.map_name}> <img src={props.map?.map_featured_image?.url} className="agentImage" alt="icon" /></Link>
      <h2>{props.map.map_name}</h2>
      
     
      
    </div>
        </>
    )
}

export default MapCard