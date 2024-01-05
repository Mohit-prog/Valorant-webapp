import React from 'react'
import { useParams } from 'react-router-dom';

const WeaponSkinInfo = () => {

    const {skinId} =useParams();


  return (
    <div>{skinId}</div>
  )
}

export default WeaponSkinInfo;