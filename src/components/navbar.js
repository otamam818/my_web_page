import React from 'react';

function Navbar(props) {
  return (
    <nav>
      <span className="title" href="www.google.com">{props.name}</span>
      <div>
        <span onClick={() => console.log("Hello Blog")}>Blog</span>
        <span onClick={() => console.log("Hello Skills")}>Skills</span>
        <span onClick={() => console.log("Hello Contact")}>Contact</span>
      </div>
    </nav>
  )
}

export default Navbar;

