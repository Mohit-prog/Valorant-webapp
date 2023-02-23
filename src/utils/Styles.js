export const agentBackground=(props) =>{
    
   const background = {
        backgroundImage: "url(" + props.background + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
      return background;
  };

