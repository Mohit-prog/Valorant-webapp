import { useState, useEffect } from "react";
import { mapData } from "../../Constants";
import ShimmerUI from "../common/ShimmerUI";
import MapCard from "./MapCard";

const MapsBody = () => {
  const [maps, setMaps] = useState();

  useEffect(() => {
    getMapsDetail();
  }, []);

   function getMapsDetail() {

     setMaps(mapData);
   
    
  }
  return !maps ? (
    <ShimmerUI />
  ) : (
    <div className="cardlist">
      {
            
            maps.map((map) => (
           
           <MapCard map={map}   key={map.map_name}/>
         
       ))
        }
    </div>
  );
};

export default MapsBody;
