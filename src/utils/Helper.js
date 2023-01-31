


export const searchHandler = (googleText, agentList) => {
    return agentList.filter((agent) =>
      agent?.displayName?.toLowerCase().includes(googleText.toLowerCase())
    );
  };
  
 