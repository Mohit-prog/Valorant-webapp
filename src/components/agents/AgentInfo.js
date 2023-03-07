import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "../common/ShimmerUI";
import { abilityLink, agentVideoObject } from "../../Constants";
import useAgentInfo from "../../utils/useAgentInfo";

const AgentInfo = () => {
  const { name } = useParams();
 console.log(abilityLink)
  const agent = useAgentInfo(name);

  return !agent ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="agentInfo">
        <h1 className="agentName">{agent?.displayName}</h1>

        <div className=" agentvideobg">
          {" "}
          {agent?.displayName != "Gekko" ? (
            <video
              src={agentVideoObject[agent.displayName]}
              style={{ width: "90vw", height: "40vh", borderRadius: "10%" }}
              autoPlay
              loop
              muted
            />
          ) : (
            <video
              src={agentVideoObject[agent.displayName]}
              style={{ width: "90vw", height: "40vh", borderRadius: "10%" }}
              autoPlay
              loop
            />
          )}
        </div>
        <h1 className="agentDescription">{agent?.description}</h1>
        <div className="abilities">
          {agent.abilities.map((ability) => (
            <>
            {console.log(ability.displayName ,abilityLink[ability.displayName])}
              <div className="abilityvalue">
                <>
                  <h1>
                    {ability.displayName}
                    <img
                      className="abilityvalueimg"
                      src={ability.displayIcon}
                      style={{ width: "5vw", height: "5vh" }}
                    />
                  </h1>
                  
                  {(abilityLink[ability.displayName]!="NA")?<video
                  className="abilityvideo"
                    src={
                     abilityLink[ability.displayName]
                    }
                    style={{ width: "70%", height: "70%" }}
                    autoPlay
                    loop
                    muted
                  />:null}
                </>
                <h3>{ability.description}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default AgentInfo;
