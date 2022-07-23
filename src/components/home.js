/** @fileoverview
 *  The main component handling all logic and implementations for the
 *  homepage
 */

// Imports
// ───────────────────────────────────────────────────────────────────────────
import React from 'react';
import '../styles/homepage.css';

// Global constants
// ───────────────────────────────────────────────────────────────────────────
const IMG_HEIGHT = '30vh';
const offset = {
  angle: (Math.PI * (3 / 4)),
  X: 5.0,
  Y: 8.5
};
const SKILLS_FILE = 'skills.json';

// Main Component
// ───────────────────────────────────────────────────────────────────────────
export class Home extends React.Component {
  constructor(props) {
    super(props);
    const /* string[][] */ skills =
          Object.entries(require(`../assets/${SKILLS_FILE}`));
    this.state = {
      skills: skills,
      visibilities: Array(skills.length).fill(false),
    };
  }

  render() {
    const /* string[][] */ skills = this.state.skills;
    const /* number */ each_angle = (2 * Math.PI) / skills.length;

    const /* SkillListItem */ skillElement = skills.map((pair, num_element) => {
      return <SkillListItem
        key={num_element}
        data={pair}
        each_angle={each_angle}
        num_element={num_element}
      />
    });

    return (
      <div className="homepage">
        <div className="picture-container">
          <img src={require("../pictures/mypic.png")} alt="Profile" />
        </div>
        <ol className="skill-list">{skillElement}</ol>
      </div>
    )
  }
}

/**
 * List-based items that display skills and subskills, separated in a 
 * circular pattern from a center-point
 * @extends React.Component
 */
class SkillListItem extends React.Component {
  /**
  * @param {each_angle}  the angular distance among each neighboring
  *                      SkillListItem 
  * @param {num_element} the number indicating the ordered position of the
  *                      current item
  * @return {{top: string, left: string}}
  */
  getStyle(each_angle, num_element) {
    const /* number */ rotated_angle =
          (each_angle * num_element) - offset.angle;

    const /* number */ hyp = parseFloat(IMG_HEIGHT);

    // Round it up so that no magic numbers are created from
    // floating-point arithmetic
    const calculated = {
        X: (Math.cos(rotated_angle) * hyp - offset.X).toFixed(1),
        Y: (Math.sin(rotated_angle) * hyp - offset.Y).toFixed(1),
    }

    /**
     * @type {{top: string, left: string}}
     */
    const style = {
      top: `${calculated.Y}vh`,
      left: `${calculated.X}vh`
    };

    return style;
  }

  render () {
    const /* string */ key = this.props.data[0];

    /**
     * @type {{ImageName: string, SubSkills: string[]}}
     */
    const metadata = this.props.data[1];

    const /* HTMLImage */ myImg = require(`../pictures/${metadata.ImageName}`);

    // Get the position of the component
    const style = this.getStyle(
      this.props.each_angle,
      this.props.num_element
    );

    // Place the subskills inside the component
    /**
     * @type <li/>
     */
    const subSkills = metadata.SubSkills.map((subSkill, index) => {
      return <li key={index} className="subSkill">{subSkill}</li>
    });

    const button = parseFloat(style.left) > 0 ?
          [<img src={myImg} alt="skill" />, <span className="key">{key}</span>]:
          [<span className="key">{key}</span>, <img src={myImg} alt="skill" />];

    return (
      <li
        key={key}
        style={style}>
        <button className="description">
            {button}
        </button>
        <ul>
          {subSkills}
        </ul>
      </li>
    )
  }
}

