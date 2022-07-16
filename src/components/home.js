/** @fileoverview
 *  The main component for the homepage
 */

// Imports
// ───────────────────────────────────────────────────────────────────────────
import React from 'react';
import '../styles/homepage.css';

// Global constants
// ───────────────────────────────────────────────────────────────────────────
const IMG_HEIGHT = '35vh';
const SKILLS_FILE = 'skills.json';

// Main Component
// ───────────────────────────────────────────────────────────────────────────
export function Home(props) {
  /** 
   * @type {string[]}
   */
  const skills = Object.entries(require(`../assets/${SKILLS_FILE}`));

  /** 
   * @type {number}
   */
  const each_angle = (2 * Math.PI) / skills.length;

  /** 
   * @type {SkillListItem}
   */
  const skillElement = skills.map((pair, num_element) => {
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

/**
 * List-based items that display skills and subskills, separated in a circular
 * pattern from a center-point
 * @extends React.Component
 */
class SkillListItem extends React.Component {
  getStyle(each_angle, num_element) {
    const offset = {
      angle: (Math.PI * (3 / 4)),
      X: 5.5,
      Y: 7.5
    }
    const rotated_angle = (each_angle * num_element) - offset.angle;
    const hyp = parseFloat(IMG_HEIGHT);

    // Round it up so that no magic numbers are created from
    // floating-point arithmetic
    const calculated = {
        X: (Math.cos(rotated_angle) * hyp - offset.X).toFixed(1),
        Y: (Math.sin(rotated_angle) * hyp - offset.Y).toFixed(1),
    }
    const style = {
      top: `${calculated.Y}vh`,
      left: `${calculated.X}vh`
    };
    return style;
  }

  render() {
    /**
     * @type {string}
     */
    const key = this.props.data[0];

    /**
     * @type {{ImageName: string, SubSkills: string[]}}
     */
    const metadata = this.props.data[1];

    /**
     * @type HTMLImage
     */
    const myImg = require(`../pictures/${metadata.ImageName}`);

    // Place the subskills inside the component
    /**
     * @type <li/>
     */
    const subSkills = metadata.SubSkills.map((subSkill, index) => {
      return <li key={index} className="subSkill">{subSkill}</li>
    });

    // Get the position of the component
    const style = this.getStyle(
      this.props.each_angle,
      this.props.num_element
    );

    return (
      <li
        key={key}
        style={style}>
        <button className="description">
          <img src={myImg} alt="skill" />
          <span className="key">{key}</span>
        </button>
        <ul>
          {subSkills}
        </ul>
      </li>
    )
  }
}

