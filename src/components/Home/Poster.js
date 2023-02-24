import React from "react";

const Poster = () => {
  return (
    <>
      <img
        className="homeagentsbackground"
        src={"https://playvalorant.com/assets/images/agents-background.jpg"}
      ></img>
      <img
        className="homeagentsicon"
        src={
          "https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png"
        }
      ></img>
      <div className="cg">
      <video
      className="homecgvideo"
        src={
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt778f65cedfee54fd/63bcad5b08dfb21202a7794d/VAL_Ep6_Homepage-CG-Video_V5.mp4"
        }
        autoPlay
        loop
        muted
      />
      <h1 className="valorantText">VALORANT</h1>
      </div>
    </>
  );
};

export default Poster;
