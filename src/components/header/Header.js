import React from "react";
import "./header.scss";

function Header() {
  return (
    <header>
      <section>
        <div className="avatar-container">
          <img
            class=""
            src="https://avatars1.githubusercontent.com/u/50626492?v=4"
            alt=""
          />
        </div>
        <div className="bio">
          <h2>"Hello I am</h2>
          <h1> Karan Maurya!"</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          nobis distinctio impedit possimus sed expedita vel aperiam, quas
          libero, eos qui voluptas dolorem. Sunt ipsum a provident eligendi
          minima facilis optio maiores harum, obcaecati corrupti?minima facilis
          optio maiores harum, obcaecati corrupti?
        </div>
      </section>
    </header>
  );
}

export default Header;
