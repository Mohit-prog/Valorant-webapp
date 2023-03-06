import React from 'react'

const WeaponSkin = (props) => {



   

           
    var skinName = props.skin.displayName;
    skinName = skinName.substring(0, skinName.lastIndexOf(" "));

 if(skinName.includes("Standard")|| skinName.includes("Random") || props.skin.displayIcon===null || skinName==="")
   return null;


    
  return (
    <>
        <div className='skin-container'>
        <img className ='skin-img' src={props.skin.displayIcon}/>
        
            <div className='skin-name'>{console.log(skinName)}{skinName}</div>
        </div>
        
    </>
  )
}

export default WeaponSkin;