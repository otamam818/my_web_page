/** @fileoverview
 *  The main component handling all logic and implementations for the
 *  homepage
 */

/* Imports */
/* ─────────────────────────────────────────────────────────────────────── */
import React from 'react';
import '../styles/homepage.css';

/* Global constants and declarations*/
/* ─────────────────────────────────────────────────────────────────────── */
const IMG_HEIGHT = '50vh';
const offset = {
  angle: (Math.PI * (3 / 4)),
  rad_spacing: 2
};
const SKILLS_FILE = 'skills.json';
const FULL_CIRCLE = (2 * Math.PI)

/* Main Component */
/* ─────────────────────────────────────────────────────────────────────── */
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

    /* Separate each angle evenly */
    const /* number */ each_angle = FULL_CIRCLE / skills.length;

    const /* SkillListItem */ skillElements =
        skills.map((pair, num_element) => {
      return <SkillListItem
        key={num_element}
        data={pair}
        each_angle={each_angle}
        num_element={num_element}
      />
    });

    return (
    <div className="homepage">
      <div className="welcome-message">
        <h1>Welcome to my homepage</h1>
        <p>Click any icon around the circle to know more</p>
      </div>
        <div className="skill-circle">
          <div className="picture-container">
            <img src={require("../pictures/mypic.png")} alt="Profile" />
          </div>
          <ol className="skill-list">{skillElements}</ol>
        </div>
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

    const /* number */ hyp =
        (parseFloat(IMG_HEIGHT) / 2) + offset.rad_spacing;

    /* Round it up so that no magic numbers are created from
       floating-point arithmetic */
    const calculated = {
        X: (Math.cos(rotated_angle) * hyp).toFixed(1),
        Y: (Math.sin(rotated_angle) * hyp).toFixed(1),
    }
    /**
     * @type {{top: string, left: string, bottom: string, right: string}}
     */
    const style = {};
    (calculated.X > 0) ?
        style['left'] = Math.abs(calculated.X) + 'vh':
        style['right'] = Math.abs(calculated.X) + 'vh';
    (calculated.Y > 0) ?
        style['top'] = Math.abs(calculated.X) + 'vh':
        style['bottom'] = Math.abs(calculated.X) + 'vh';

    return style;
  }

  render () {
    const /* string */ key = this.props.data[0];

    /**
     * @type {{ImageName: string, SubSkills: string[]}}
     */
    const metadata = this.props.data[1];

    const /* HTMLImage */ myImg = require(`../pictures/${metadata.ImageName}`);

    /* Get the position of the component */
    const style = this.getStyle(
      this.props.each_angle,
      this.props.num_element
    );

    /* Place the subskills inside the component */
    const subSkills = metadata.SubSkills.map((subSkill, index) => {
      return <li key={index} className="subSkill">{subSkill}</li>
    });

    /* Swaps based on the previously calculated angles */
    const buttonContents = parseFloat(style.left) > 0 ?
          [<img key={key + 'img'} src={myImg} alt="skill" />,
           <span key={key + 'name'} className="key">{key}</span>]:
          [<span key={key + 'name'} className="key">{key}</span>,
           <img key={key + 'img'} src={myImg} alt="skill" />];

    return (
      <li
        key={key}
        style={style}>

        <button className="description">
            {buttonContents}
        </button>

        <ul>
          {subSkills}
        </ul>

      </li>
    )
  }
}

