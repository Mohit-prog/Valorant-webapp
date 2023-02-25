import React from "react";
import { Link } from "react-router-dom";
import guidePoster from "../../images/guideposter.jpg";

const BeginnersGuide = () => {
  return (
    <>
     
      <img
        src={guidePoster}
        className="guideposter"
        
      />
     
      <div className="guidesection">
        <h2 className="guideheading">
          BEGINNER'S GUIDE 
        </h2>
        <p className="guidetext">
          Straight from the files of Brimstone, this is the VALORANT Beginner’s
          Guide. Whether this is your first rotation or you're needing a
          refresher, we figure it’s best you take it from the Agent who’s seen
          it all before.
        </p>
        <p className="guidetext">
          Below is what to know before your first game. Pay attention. Might
          learn something.
        </p>
        
          <img
            src={
              "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7b0d44ce9e2e579f/5ed03afe2b63070f50426d1e/WIV_1_Intro_WiV.jpg"
            }
            className="guideimages"
          />
        
        <p className="guidetext">
          Before you enter your first round, you get to pick from a group of
          Agents, each with their own role and special skills designed to work
          alongside each other toward a win. You can dig into the specifics of
          each Agent on our<Link to="/agents">Agents</Link> page.
        </p>
        
          <img
            src={
              "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt48f4d3cf0d11cebe/61ef5b72aead2b14ab93ff42/012422_WIV_2_Roles_Updated.jpg"
            }
            className="guideimages"
          />
        
        <p className="guidetext">After everyone selects their Agent (oh, you picked that one), you’ll jump into a random map and formally enter the first round.</p>
        <p className="guidetext">Start a round as either attacker or defender and switch sides in between. Before you do either, you’ll need to navigate the buy phase, which lets you purchase weapons and abilities. What you buy shapes how you can win. Let style or matchups guide your choices.</p>
       
          <img
            src={
              "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb654bb95a7453fa2/5ed03ba04d187c101f3f2de5/WIV_3_Round.jpg"
            }  className="guideimages"
          />
      
        <p className="guidetext">No one’s going to tell you how to spend your money, but you’re going to have to pull the trigger at some point.</p>
        <p className="guidetext">There’s a gun for every situation and you can comb the details of each weapon on our dedicated <Link to="/weapons">arsenal </Link> page. When in doubt, try buying based on a weapon’s type and see how it fits your style, expertise, and your team’s strategy.</p>
      
          <img
            src={
              "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc36ea9ba5782a159/5ed03c2f93be34199dd62a8c/WIV_4_WEAPONS.jpg"
            }  className="guideimages"
          />
        
        <p className="guidetext">Each map is a different stage to style on your enemies. Flex your creative skills and savvy gunplay for different encounters.</p>
        <p className="guidetext">Below are the basics and you can plot your route using our detailed <Link to="/maps">maps </Link> page.</p>
      
          <img
            src={
              "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5c39bcff2883a491/5ed03c4ec94d6c5071a30811/WIV_5_Maps_CORRECTED.jpg"
            }  className="guideimages"
          />
        
        <p className="guidetext">Yeah, you might already know how to frag an enemy six ways from Sunday, but Brimstone will tell you, most of those ways are pretty noisy.</p>
     
          <img
            src={
              "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte34e5d88963f92e7/5ed03f96461a060f4a368900/WIV_TACSCHOOL_1.jpg"
            }  className="guideimages"
          />
      
      
          <img
            src={
              "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt792f0e09cd7f99e5/5ed03fa708ac190a51c6a6f6/WIV_TACSCHOOL_2.jpg"
            }  className="guideimages"
          />
        
        <p className="guidetext">No more doubts, you’re ready. But like you, we’re just getting started.</p>
      </div>
      
    </>
  );
};

export default BeginnersGuide;
