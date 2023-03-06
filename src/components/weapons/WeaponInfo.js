import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { weaponInfoObject } from "../../Constants";
import WeaponSkin from "./WeaponSkin";

const WeaponInfo = () => {
  const { name } = useParams();
  console.log("https://valorant-api.com/v1/weapons/" + name);
  const [weapon, setWeapon] = useState([]);

  async function getWeaponInfo() {
    const response = await fetch("https://valorant-api.com/v1/weapons/" + name);
    const json = await response.json();
    const data = json.data;
    setWeapon(data);
  }

  useEffect(() => {
    getWeaponInfo();
  }, []);

  return (
    <div className="weapon-page">
      <h1 className="weapon-name">{weapon?.displayName}</h1>
      <img className="weapon-img" src={weapon?.displayIcon} />

      <h3 className="weapon-about">
        {weaponInfoObject[weapon?.displayName]}
      </h3>
      {(weapon?.weaponStats!=null)?
     ( <div className="weapon-info">
      <p>
          <strong>Cost :</strong> {weapon?.shopData?.cost} VP
        </p>
        <p>
          <strong>fireRate :</strong> {weapon?.weaponStats?.fireRate}
        </p>
        <p>
          <strong>MagazineSize :</strong> {weapon?.weaponStats?.magazineSize}
        </p>
        <p>
          <strong>EuipTime :</strong> {weapon?.weaponStats?.equipTimeSeconds}
        </p>
        <p>
          <strong>ReloadTime :</strong> {weapon?.weaponStats?.reloadTimeSeconds}
        </p>
        <p>
          <strong>Damage(0-50m) :</strong> 
          Head -
          {weapon?.weaponStats?.damageRanges[0]?.headDamage},
           Body -
          {weapon?.weaponStats?.damageRanges[0]?.bodyDamage}, 
          Leg -
          {weapon?.weaponStats?.damageRanges[0]?.legDamage}
        </p>
      </div>):null
      }
      <h2 className="skins-heading">SKINS</h2>
      <div className="weapon-skins">
        {weapon?.skins?.map((skin) => (
          <WeaponSkin key={skin.uuid} skin={skin} />
        ))}
      </div>
    </div>
  );
};

export default WeaponInfo;
