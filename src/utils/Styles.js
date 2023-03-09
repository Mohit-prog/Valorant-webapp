export const agentBackground=(props) =>{
    
   const background = {
        backgroundImage: "url(" + props.background + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
      return background;
  };

  export const navActive=() =>{
    
    const navStyle = {
         backgroundImage: "url(" + props.background + ")",
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         backgroundPosition: "center",
       };
       return navStyle;
   };
 