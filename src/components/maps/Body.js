import { useState, useEffect } from "react";
import { mapData, mapHeader } from "../../Constants";
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
    <h3 className="para-about">
              {mapHeader}
              </h3>
      {
            
            maps.map((map) => (
           
           <MapCard map={map}   key={map.map_name}/>
         
       ))
        }
    </div>
  );
};

export default MapsBody;
