import { useState,useEffect } from "react";

const useAgentInfo=(name)=> {


    const [agent, setAgent] = useState();
    useEffect(() => {
      getAgentInfo();
    }, []);
  
    async function getAgentInfo() {
      const data = await fetch("https://valorant-api.com/v1/agents/" + name);
      const json = await data?.json();
  
      setAgent(json?.data);
    }
  
  

  return agent;
}

export default useAgentInfo;