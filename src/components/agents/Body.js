import { useEffect, useState } from "react";
import AgentCard from "./AgentCard";
import NoResults from "../common/NoResults";
import ShimmerUI from "../common/ShimmerUI";
import { searchHandler } from "../../utils/Helper";
import useOnline from "../../utils/useOnline";
const AgentsBody = () => {
  const [agentList, setAgentlist] = useState();
  const [filteredAgent, setFilteredAgent] = useState();
  const [googleText, setGoogleText] = useState("");

  useEffect(() => {
    getAgentsDetails();
  }, []);

  async function getAgentsDetails() {
    const data = await fetch(
      "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
    );
    const json = await data.json();

    setAgentlist(json?.data);
    setFilteredAgent(json?.data);
  }

  var isOnline = useOnline();
  if (!isOnline) return <h1> 🔴 Check your connection 🔴</h1>;

  return !agentList ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search agent"
          value={googleText}
          onChange={(e) => {
            setGoogleText(e.target.value);
            const data = searchHandler(googleText, agentList);
            setFilteredAgent(data);
          }}
          className="searchinput"
        />
        {filteredAgent.length != agentList.length ? (
          <button
            className="clearButton greenButton"
            onClick={() => {
              setFilteredAgent(agentList);
            }}
          >
            show All
          </button>
        ) : null}
      </div>

      <div className="cardlist">
        {filteredAgent?.length === 0 ? (
          <NoResults />
        ) : (
          filteredAgent.map((agent) => (
            <AgentCard {...agent} key={agent.uuid} />
          ))
        )}
      </div>
    </>
  );
};

export default AgentsBody;
