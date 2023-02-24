import Logoicon from "../../images/valoIcon.png";
import hamburgerIcon from "../../images/hamburger.png"
import { NavLink } from "react-router-dom";

import { useRef, useState } from "react";

/********Header**********/
//state

//logo
const valorantlogo = (
  <>
    <img src={Logoicon} alt="Valorant" className="valoranticon" />
    <h1 className="headertitle">Valorant WebApp</h1>
  </>
);

//listItems

const NavItems = () => {
  const displayNavItem = useRef();
  const hamburgerRef = useRef();
  const [activeTab, setActiveTab] = useState("home");

  function clickHandler() {
    window.addEventListener("click", () => {
      
      hamburgerRef?.current?.classList?.toggle("active");
      displayNavItem?.current?.classList?.toggle("active");
      
      

    });
  }

  function setMarked() {
    return activeTab
      ? {
        backgroundColor: "#296919",
        border: "18px solid  #296919",
        borderRadius:"10%",
        textShadow : "1px 1px #000",
        fontWeight:"800"

        }:null;
  
  }

  return (
    <>
      <a className="toggle-button" onClick={clickHandler()}>
      <img src={hamburgerIcon} alt="hamburger" className="hamburger" ref={hamburgerRef}/>
      </a>

      <ul className="nav-items" ref={displayNavItem}>
        <li>
          <NavLink
            to="/"
            className="text-link"
            style={(activeTab==="home")?setMarked():null}
            onClick={()=>setActiveTab("home")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/agents"
            className="text-link"
            style={(activeTab==="agents")?setMarked():null}
            onClick={()=>setActiveTab("agents")}
          >
            Agents
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/weapons"
            className="text-link"
            style={(activeTab==="weapons")?setMarked():null}
            onClick={()=>setActiveTab("weapons")}
          >
            Weapons
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/maps"
            className="text-link"
            style={(activeTab==="maps")?setMarked():null}
            onClick={()=>setActiveTab("maps")}
          >
            Maps
          </NavLink>
        </li>
        {/* <li><Link to="/mystats" className="text-link">My-Stats</Link></li> */}
      </ul>
    </>
  );
};
//final Header
const Header = () => {
  return (
    <div className="header">
      {valorantlogo}

      <NavItems />
    </div>
  );
};

export default Header;
