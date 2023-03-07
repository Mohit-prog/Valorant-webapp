import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "../common/ShimmerUI";
import { agentVideoObject } from "../../Constants";
import useAgentInfo from "../../utils/useAgentInfo";

const AgentInfo = () => {
  const { name } = useParams();
 
  const agent = useAgentInfo(name);
  
  return !agent ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="agentInfo">
      
        <h1 className="agentName">{agent?.displayName}</h1>
       
        <div className=" agentvideobg"> {
          (agent?.displayName!="Gekko")?
      <video src={agentVideoObject[agent.displayName] }  style={{width: "90vw",
    height: "40vh",borderRadius:"10%"}} autoPlay loop muted  />:<video src={agentVideoObject[agent.displayName] }  style={{width: "90vw",
    height: "40vh",borderRadius:"10%"}} autoPlay loop   />
   }
    </div>
        <h1 className="agentDescription">{agent?.description}</h1>
        <div className="abilities">
          {agent.abilities.map((ability) => (
            <>
              <div className="abilityvalue">
                <>
                  <h1>{ability.displayName}</h1>
               
                  <img className="abilityvalueimg" src={ability.displayIcon} />
                 
                </>
                <h3 >{ability.description}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default AgentInfo;
