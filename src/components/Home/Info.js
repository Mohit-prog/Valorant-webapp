// import React, { useState } from "react";

// const Section = ({ title, isVisible, setIsVisible, description }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       {isVisible ? (
//         <button onClick={() => setIsVisible("")}>hide</button>
//       ) : (
//         <button onClick={() => setIsVisible(title)}>show</button>
//       )}
//       {isVisible && <h2>{description}</h2>}
//     </div>
//   );
// };

// function Info() {
//   const [visibleSection, setVisibleSection] = useState("DEFY THE LIMITS");

//   return (
//     <div>
//       <Section
//         title={"DEFY THE LIMITS"}
//         isVisible={visibleSection === "DEFY THE LIMITS"}
//         setIsVisible={(str) => {
//           setVisibleSection(str);
//         }}
//         description={
//           "Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush."
//         }
//       />
//       <Section
//         title={"section2"}
//         isVisible={visibleSection === "section2"}
//         setIsVisible={(str) => {
//           setVisibleSection(str);
//         }}
//         description={
//           "Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush."
//         }
//       />
//       <Section
//         title={"section3"}
//         isVisible={visibleSection === "section3"}
//         setIsVisible={(str) => {
//           setVisibleSection(str);
//         }}
//         description={
//           "Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush."
//         }
//       />
//     </div>
//   );
// }

// export default Info;

import React from "react";
import RedirectButton from "../common/RedirectButton";

const IntroVideo_URL = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltefd45731d8f9d9df/6217f2ea910a6c613c73168c/VALORANT_PLAY22_16x9_Target4_v005.mp4"
const Info = () => {
  return (
    <div className="infosection">
      <h2>DEFY THE LIMITS</h2>
      <div className="intro">
      
      <h3>
        Blend your style and experience on a global, competitive stage. You have
        13 rounds to attack and defend your side using sharp gunplay and
        tactical abilities. And, with one life per-round, you'll need to think
        faster than your opponent if you want to survive. Take on foes across
        Competitive and Unranked modes as well as Deathmatch and Spike Rush.
      <RedirectButton/>
      </h3>
      
    
      <video src={IntroVideo_URL } className="introvideo" autoPlay loop muted />
       </div>
    </div>
  
  );
};

export default Info;
