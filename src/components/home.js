import React from 'react';
import "../styles/homepage.css";

function Home(props) {
    let skills = Object.entries(require('../assets/skills.json'));
    let skillElement = skills.map((pairs, _) => {
        let key = pairs[0];
        let metadata = pairs[1];

        let myImg = require(`../pictures/${metadata.ImageName}`);
        let subSkills = metadata.SubSkills.map((subSkill, index) => {
            return <li key={index}>{subSkill}</li>
        });

        return (
            <li key={key}>
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

