import { mapData } from "../Constants";



export const searchHandler = (googleText, agentList) => {
    return agentList.filter((agent) =>
      agent?.displayName?.toLowerCase().includes(googleText.toLowerCase())
    );
  };
  
 
export const getMapDetail=(mapName)=>{
  const maps = mapData;
  return maps.filter(map=>map.map_name===mapName);

}