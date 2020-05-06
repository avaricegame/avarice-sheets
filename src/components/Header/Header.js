import React from "react";

const Header = ({ onRouteChange, isSignedin }) => {

    return (
      <header>
       
                    <div className="player-character-campaign">
                      <div className="padding-right">
                            <span class="color--accent"><h2>Player: Zack Bringhurst</h2></span>
                            <span class="color--accent"><h2>Character: Todd Bendy</h2></span>
                             <span class="color--accent"><h2>Campaign:The Creton of Death</h2></span>
                             </div>
                             <div className="padding-right">
                            <span class="color--accent"><h2>Race: Lowca</h2></span>
                            <span class="color--accent"><h2>Class: Survivalist</h2></span>
                             <span class="color--accent"><h2>Level: 4</h2></span>
                    </div> 
                    <div>
                      <span class="color--accent"><h2>Sheet ID: CHARID#497</h2></span>
                    </div>
                    </div>
                     
                    <div class="header__top-bar">
                            <h2 class="header__h2--link" onClick={() => onRouteChange("home")}>Exit</h2>
                            {/* <h2 class="header__h2--link">Settings</h2>
                            <h2 class="header__h2--link" onClick={() => onRouteChange("signedout")}>Sign Out</h2> */}
                    </div>
      </header>
   

   
  ); }
  
export default Header;
