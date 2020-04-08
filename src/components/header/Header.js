import React from "react";
import "./header.scss";

function Header() {
  return (
    <header>
      <section>
        <div className="avatar-container">
          <img
            src="https://avatars1.githubusercontent.com/u/50626492?v=4"
            alt=""
          />
        </div>
        <div className="bio">
          <h2>"Hello I am</h2>
          <h1> Karan Maurya!"</h1>I am a student of B.Tech[CSE] in NIT Jaipur. I
          am interested in Full Stack Development so I have been working on
          Django and React, the best of both sides. I have ample experience with
          these technologies and looking forward for some great opportunities.
        </div>
      </section>
    </header>
  );
}

export default Header;
