import { Link } from "react-router-dom";


const WeaponsCard=(props)=>{

  
     
    return(
        <>
           <div className="displaycard" >
         
    <Link to={"/weapons/"+props.weapon.uuid}> <img src={props.weapon.displayIcon} className="agentImage" alt="icon" /></Link>
      <h2>{props.weapon.displayName}</h2>
      <>{(!props.weapon?.shopData?.cost)?<h3>cost : 0</h3>:
      (<h3>Cost : {props.weapon?.shopData?.cost}</h3>)}
      </>
      <>{(!props.weapon?.weaponStats?.fireRate)?<h3>FireRate : 0</h3>:
      (<h3>FireRate : {props.weapon?.weaponStats?.fireRate}</h3>)}
      </>
     
      
    </div>
        </>
    )
}

export default WeaponsCard;