import Logoicon from "../../images/valoIcon.png";
import hamburgerIcon from "../../images/hamburger.png";
import cancelIcon from "../../images/cancel.png";
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
  const [close, setClose] = useState(false);

  function clickHandler() {
    if(close){
      hamburgerRef?.current?.classList?.remove('active')
      displayNavItem?.current?.classList?.remove("active");
    }
    else{
      hamburgerRef?.current?.classList?.add("active");
      displayNavItem?.current?.classList?.add("active");
    }
    

    setClose(!close);
  }

  function setMarked() {
    return activeTab
      ? {
          backgroundColor: "#296919",
          border: "18px solid  #296919",
          borderRadius: "10%",
          textShadow: "1px 1px #000",
          fontWeight: "800",
        }
      : null;
  }

  return (
    <>
      
      <a className="toggle-button" onClick={() => clickHandler()}>
      
        {close ? (
          <img
            src={cancelIcon}
            alt="cancel"
            className="hamburger"
           
          />
        ) : (
          <img
            src={hamburgerIcon}
            alt="hamburger"
            className="hamburger"
            ref={hamburgerRef}
          />
        )}
      </a>

      <ul className="nav-items" ref={displayNavItem}>
        <li>
          <NavLink
            to="/"
            className="text-link"
            style={activeTab === "home" ? setMarked() : null}
            onClick={() => {
              setActiveTab("home");
              clickHandler();
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/agents"
            className="text-link"
            style={activeTab === "agents" ? setMarked() : null}
            onClick={() => {
              setActiveTab("agents");
              clickHandler();
            }}
          >
            Agents
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/weapons"
            className="text-link"
            style={activeTab === "weapons" ? setMarked() : null}
            onClick={() => {
              setActiveTab("weapons");
              clickHandler();
            }}
          >
            Weapons
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/maps"
            className="text-link"
            style={activeTab === "maps" ? setMarked() : null}
            onClick={() => {
              setActiveTab("maps");
              clickHandler();
            }}
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
