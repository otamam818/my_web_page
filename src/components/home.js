import React from 'react';
import "../styles/homepage.css";

const IMG_HEIGHT = '35vh';

function Home(props) {
    let skills = Object.entries(require('../assets/skills.json'));
    let each_angle = (2*Math.PI) / skills.length;
    let skillElement = skills.map((pairs, num_element) => {
        let key = pairs[0];
        let metadata = pairs[1];

        // Place the data inside the component
        let myImg = require(`../pictures/${metadata.ImageName}`);
        let subSkills = metadata.SubSkills.map((subSkill, index) => {
            return <li key={index} className="subSkill">{subSkill}</li>
        });

        // Get the position of the component
        let offsetX = 5.5;
        let offsetY = 2.0;
        let rotated_angle = (each_angle * num_element) - (Math.PI * (3/4))
        let hyp  = parseFloat(IMG_HEIGHT);
        let top  = (Math.sin(rotated_angle) * hyp - offsetY).toFixed(1);
        let left = (Math.cos(rotated_angle) * hyp - offsetX).toFixed(1);
        let style = {top: `${top}vh`, left: `${left}vh`};
        console.table({style, hyp, num_element, each_angle, top});

        return (
            <li
              key={key}
              style={style}>
              <div className="description">
                <img src={myImg} alt="skill"/>
                <span className="key">{key}</span>
              </div>
              <ul>
                {subSkills}
              </ul>
            </li>
        )
    });

    return (
        <div className="homepage">
            <div className="picture-container">
                <img src={require("../pictures/mypic.png")} alt="Profile"/>
            </div>
            <ol className="skill-list">{skillElement}</ol>
        </div>
    )
}

export default Home;

