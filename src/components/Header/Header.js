import React from "react";

const Header = ({ onRouteChange, isSignedin }) => {

    return (
      <header>
        <p
          onClick={() => onRouteChange("signedout")}
        >
          Sign Out
        </p>
      </header>
    );
  }
  {
    /* {<div class="header__top-bar">
                            <h2><a href="home.html" class="header__h2--link">Back to Home</a></h2>
                            <h2></h2>
                            <h2><a href="" class="header__h2--link">Settings</a></h2>
                    </div>
                    <div>
                            <h2>Player: <span class="color--accent">Zack Bringhurst</span></h2>
                            <h2>Character: <span class="color--accent">Todd Bendy</span></h2>
                            <h2>Campaign: <span class="color--accent">The Creton of Death</span></h2>
                    </div>} */
  }
  
export default Header;
