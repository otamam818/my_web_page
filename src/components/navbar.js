import React from 'react';

function Navbar(props) {
  return (
    <nav>
      <a href="www.google.com">{props.name}</a>
      <div>
        <span onClick={() => console.log("Hello world")}>Blog</span>
        <a href="/skills">Skills</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar;

