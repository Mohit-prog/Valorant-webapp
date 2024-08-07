import ReactAudioPlayer from "react-audio-player";
import audioIcon from "../../images/audio.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { agentBackground } from "../../utils/Styles";
import { voiceLines } from "../../Constants";
import isoVoice from "../../videos/IsoMatchStart6.wav"
import isoVoice from "../../videos/IsoMatchStart6.wav"
import cloveVoice from "../../videos/CloveMatchStart7.wav"

//agent card
//https://playvalorant.com/page-data/en-us/agents/sage/page-data.json
const AgentCard = (props) => {
  const [element, setElement] = useState();
  console.log(props)

  return (
    <div className="displaycard" style={agentBackground(props)}>
      <Link to={"/agents/" + props.uuid} className="linkbox">
        <img src={props.bustPortrait} className="agentImage" alt="icon" />
      </Link>
      <h2>{props.displayName}</h2>
      <h3>{props.abilities.map(printAbility)}</h3>
      <img
        src={audioIcon}
        alt="audioIcon"
        className="audioIcon"
        onClick={() => {
          element.audioEl.current.play();
        }}
      />
      <ReactAudioPlayer
        ref={(element) => {
          setElement(element);
        }}
        className="agentsoundbar hideaudio"
        controlsList="nodownload noplaybackrate "
        
        src={
          props.displayName=='Iso'?isoVoice:
          props.displayName=='Clove'?cloveVoice:
          "https://media.valorant-api.com/sounds/" +
          voiceLines[props.displayName] +
          ".wav"
        }
        controls
      />
      <h4> Role : {props.role.displayName}</h4>
    </div>
  );
};
const printAbility = (ability) => {
  if (ability.slot === "Ultimate") return ability.displayName;
  return null;
};

export default AgentCard;
