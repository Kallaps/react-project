import React from "react";

const Header = () => {
  return (
    <div>
      <div className="nav">
        <ul className="list">
          <li>Home</li>
          <li>News</li>
          <li>Contacts</li>
          <li>About</li>
          <input
            type="text"
            name="text"
            class="input"
            placeholder="Type something here...."
          ></input>
        </ul>
      </div>
    </div>
  );
};

export default Header;
