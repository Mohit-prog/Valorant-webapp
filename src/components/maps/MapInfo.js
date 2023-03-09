import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMapDetail } from "../../utils/Helper";

const MapInfo = () => {
  const { name } = useParams();

  const [map, setMap] = useState([]);

  async function getMapInfo() {
    setMap(getMapDetail(name)[0]);
  }

  useEffect(() => {
    getMapInfo();
  }, []);

  return (
    <div className="mapinfo">
      <h1 className="title-name">{map.map_name}</h1>
      <img className="map-image" src={map.mini_map_url}></img>
      <h3 className="para-about">{map.map_description}</h3>

      {map.gallery_images?.map((img) => {
        return <img className="map-image" src={img.url}></img>;
      })}
    </div>
  );
};

export default MapInfo;
