import Logoicon from "../../images/valoIcon.png";
import { Link } from "react-router-dom";

import { useRef } from "react";

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

const NavItems =()=> {

  const navRef = useRef();
 
  function clickHandler(){
    window.addEventListener('click',()=>{
       
      navRef.current.classList.toggle('active');
        console.log("clicked");
    })
}


  return(<>
  <a href="#" className="toggle-button" onClick={clickHandler()}>
   <span className='bar'></span>
   <span className='bar'></span>
   <span className='bar'></span>
    </a>
  
  <ul className="nav-items" ref={navRef}>
    <li><Link to="/" className="text-link">Home</Link></li>
    <li><Link to="/agents" className="text-link">Agents</Link></li>
    <li><Link to="/weapons" className="text-link">Weapons</Link></li>
    <li><Link to="/maps" className="text-link">Maps</Link></li>
    {/* <li><Link to="/mystats" className="text-link">My-Stats</Link></li> */}
  </ul>
  </>
)};
//final Header
const Header = () => {
  return (
    <div className="header">
      {valorantlogo}
      
      <NavItems/>
    </div>
  );
};

export default Header;
