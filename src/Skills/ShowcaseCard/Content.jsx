import {useState} from "react";
import Card from "../../Common/Card";

function Content ( { data, isClosed } ) {
  // Used to store CSS variables for any data that has a customized preference
  const [styleVars, setStyleVars] = useState({});
  const contentClass = `content ${isClosed ? 'hidden' : 'shown'}`

  const skillEntries = [];
  Object.entries(data).forEach((entry, index) => {
    const [key, value] = entry;
    if (key.startsWith('--') ) {
      // A deep copy is not required as it just represents string-based data
      if (styleVars[key] === undefined) {
        const styleVarsClone = { ...styleVars };
        styleVarsClone[key] = value;
        setStyleVars(styleVarsClone);
      }
      return;
    }

    const [name, {skills, imageFile /*, projects */}] = entry;
    const subSkills = skills.map((value, index) => {
      return <Card key={index} innerText={value} />
    });

    const imageBinary = imageFile ? require(`../Images/${imageFile}`) : null;
    /* TODO: Make a separate component for this
    const relatedProjects = projects.map((value, index) => {
      return <InfoCard key={index} value={value} />
    });
    */

    // console.log("reached here, data:\n", {name, subSkills, relatedProjects});

    skillEntries.push(
      <div key={index} className="skill-entries">
        <div className="heading-section spread">
          <img src={imageBinary} alt={`Logo of ${name}`} />
          <h1> {name} </h1>
        </div>
        <div className="skill-section">
          <h2> Sub-skills </h2>
          <div className="spread">
            {subSkills}
          </div>
        </div>
      </div>
    )
  });
  return (
    <div className={contentClass}>
      {skillEntries}
    </div>
  )
}

export default Content;
